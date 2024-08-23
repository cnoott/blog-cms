import jwt from 'jsonwebtoken';
import * as jose from 'jose';

const JWT_SECRET = process.env.JWT_SECRET!;

export function generateToken(user: { id: number; name: string }): string {
  return jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, {
    expiresIn: '1d',
  });
}

export async function verifyToken(token: string) {
  const encodedSecret = new TextEncoder().encode(JWT_SECRET);
  return await jose.jwtVerify(token, encodedSecret);
}
