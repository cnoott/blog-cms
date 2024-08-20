'use server';
import { format } from 'path';
import { User } from '../models';
import { z } from 'zod';
import { generateToken } from '../utils/jwt';

const userSchema = z.object({
  name: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
  secretPassword: z.string().min(1, 'Secret pass is required'),
});

export async function createUser(formData: FormData) {
  const validation = userSchema.safeParse({
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
  
  let newUser;
  try {
    newUser = await User.create({name, password});
    console.log('User created!');
  } catch (e) {
    console.log('Error creating new user');
    return {errors: { general: 'Error creating new user' } };
  }

  const token = generateToken({id: newUser.id, name: newUser.name});

  return {success: true, message: `New User ${name} Created!`, token: token};
}

const loginSchema = z.object({
  name: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});


export async function loginUser(formData: FormData) {
  const validation = loginSchema.safeParse({
    name: formData.get('name'),
    password: formData.get('password')
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };  
  }
  const { name, password } = validation.data;
  const user = await User.findOne({where: {name}});

  console.log('USER2', name, password);

  if (!user || !user.checkPassword(password)) {
    return { errors: { general: 'Incorrect username or password'} };
  }
  const token = generateToken({id: user.id, name: user.name});

  return {success: true, message: `${name} Logged In!`, token: token};

}
