const crypto = require("crypto");

const COOKIE_NAME = "playbook_access";
const SALT = "playbook-salt-v1";

function tokenFor(secret) {
  return crypto.createHash("sha256").update(secret + SALT).digest("hex");
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const secret = process.env.PASSWORD_PROTECT_SECRET;
  if (!secret || secret === "") {
    return res.status(200).json({ ok: true });
  }

  const cookieHeader = req.headers?.cookie || "";
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  const cookie = match ? match[1].trim() : null;
  const expected = tokenFor(secret);
  const ok = cookie === expected;

  return res.status(200).json({ ok });
};
