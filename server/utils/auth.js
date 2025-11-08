// Simple JWT creation/verification helpers for demo purposes.
// In production, use stronger practices, refresh tokens, & secure storage.

const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'dev_secret_key';

function signToken(payload, opts = { expiresIn: '7d'}) {
  return jwt.sign(payload, SECRET, opts);
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { signToken, verifyToken };
