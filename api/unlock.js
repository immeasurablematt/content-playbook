const crypto = require("crypto");

const COOKIE_NAME = "playbook_access";
const SALT = "playbook-salt-v1";
const MAX_AGE_DAYS = 30;

function tokenFor(secret) {
  return crypto.createHash("sha256").update(secret + SALT).digest("hex");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secret = process.env.PASSWORD_PROTECT_SECRET;

  // No password set = site is open (e.g. local dev)
  if (!secret || secret === "") {
    return res.status(200).json({ ok: true });
  }

  // Parse body (Vercel may give raw string or pre-parsed object)
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = body ? JSON.parse(body) : {};
    } catch {
      body = {};
    }
  }
  const { password } = body || {};
  if (!password || typeof password !== "string") {
    return res.status(400).json({ error: "Password required" });
  }

  if (password.trim() !== secret) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = tokenFor(secret);
  const maxAge = MAX_AGE_DAYS * 24 * 60 * 60;

  res.setHeader("Set-Cookie", [
    `${COOKIE_NAME}=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`,
  ]);
  return res.status(200).json({ ok: true });
};
