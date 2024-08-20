import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export function generateToken(user: { id: number; name: string }): string {
  return jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, {
    expiresIn: '1h',
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
