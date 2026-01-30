import crypto from "crypto";

const COOKIE_NAME = "playbook_access";
const SALT = "playbook-salt-v1";

function tokenFor(secret) {
  return crypto.createHash("sha256").update(secret + SALT).digest("hex");
}

export async function GET(request) {
  const secret = process.env.PASSWORD_PROTECT_SECRET;
  if (!secret || secret === "") {
    return Response.json({ ok: true });
  }

  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  const cookie = match ? match[1].trim() : null;
  const expected = tokenFor(secret);
  const ok = cookie === expected;

  return Response.json({ ok });
}
