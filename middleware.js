const COOKIE_NAME = "playbook_access";
const SALT = "playbook-salt-v1";

async function sha256(str) {
  const data = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function getCookie(request, name) {
  const header = request.headers.get("Cookie") || "";
  const match = header.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1].trim() : null;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Allow unlock page and API
  if (pathname === "/unlock" || pathname.startsWith("/api/")) {
    return fetch(request);
  }

  // Allow static assets (Vite build)
  if (
    pathname.startsWith("/assets/") ||
    pathname === "/favicon.svg" ||
    pathname === "/favicon.ico"
  ) {
    return fetch(request);
  }

  const secret = process.env.PASSWORD_PROTECT_SECRET;
  if (!secret || secret === "") {
    return fetch(request);
  }

  const cookie = getCookie(request, COOKIE_NAME);
  const expected = await sha256(secret + SALT);
  if (cookie === expected) {
    return fetch(request);
  }

  return Response.redirect(new URL("/unlock", request.url), 302);
}
