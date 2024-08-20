'use server';
import { format } from 'path';
import { User } from '../models';
import { z } from 'zod';

const newUserSchema = z.object({
  name: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  secretPassword: z.string().min(1, 'Secret pass is required'),
});

export async function createUser(formData: FormData) {
  const validation = newUserSchema.safeParse({
    name: formData.get('name'),
    password: formData.get('password'),
    secretPassword: formData.get('secretPassword'),
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { name, password, secretPassword } = validation.data;

  if (secretPassword !== process.env.SUPER_SECRET_PASS) {
    return { errors: { general: 'Incorrect Super Secret Pass! (Are you supposed to be here?)'} };
  }
  
  try {
    const newUser = await User.create({name, password});
    console.log('User created!');
  } catch (e) {
    console.log('Error creating new user');
    return {errors: { general: 'Error creating new user' } };
  }

  return {success: true, message: `New User ${name} Created!`};
}
