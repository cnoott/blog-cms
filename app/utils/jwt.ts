import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY!;

export function generateToken(user: { id: number; email: string }): string {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: '1h',
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET_KEY);
}
