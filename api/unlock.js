import crypto from "crypto";

const COOKIE_NAME = "playbook_access";
const SALT = "playbook-salt-v1";
const MAX_AGE_DAYS = 30;

function tokenFor(secret) {
  return crypto.createHash("sha256").update(secret + SALT).digest("hex");
}

export async function POST(request) {
  const secret = process.env.PASSWORD_PROTECT_SECRET;

  if (!secret || secret === "") {
    return Response.json({ ok: true });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    body = {};
  }
  const password = body?.password;
  if (!password || typeof password !== "string") {
    return new Response(JSON.stringify({ error: "Password required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (password.trim() !== secret) {
    return new Response(JSON.stringify({ error: "Invalid password" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = tokenFor(secret);
  const maxAge = MAX_AGE_DAYS * 24 * 60 * 60;
  const setCookie = `${COOKIE_NAME}=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": setCookie,
    },
  });
}
