'use client';
import { useState } from 'react';
import { createUser } from '../(site)/auth/actions';
import { AuthResult } from '../types';
import { useAuth } from '../context';
import Link  from 'next/link';

export default function SignUpForm() {
  const [state, setState] = useState<AuthResult>({});
  const { login, logout, user } = useAuth();

  async function handleSubmit(formData: FormData) {
    const result: AuthResult = await createUser(formData);
    setState(result);
    if (result.token) {
      login(result.token);
    }
  }

  if (user) {
    return (
      <div>
        <p>Logged in as: {user?.name}</p>
        <button
          className='font-bold w-15 mt-5'
          onClick={logout}
        >Log Out</button>
      </div>
    );
  }

  return (
    <form action={handleSubmit} className='w-1/2'>
      {state.message && <p className='text-green-600'>{state.message}</p>}
      {state?.errors?.general && <p className='text-red-600'>{state?.errors?.general}</p>}
      <div>
        <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
          Username
        </label>
        <div className='mt-2'>
          <input
            id='name'
            name='name'
            type='name'
            required
            autoComplete='name'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
            Password
          </label>
        </div>
        <div className='mt-2'>
          <input
            id='password'
            name='password'
            type='password'
            required
            autoComplete='current-password'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
            Super Secret Password
          </label>

        </div>
        <div className='mt-2'>
          <input
            id='secretPassword'
            name='secretPassword'
            type='password'
            required
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      </div>

      <div>
        <button
          type='submit'
          className='mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Sign in
        </button>
      </div>
      <div>
        <Link href='/auth/login'>
          <p className='mt-5 text-indigo-600 font-bold'>Or Login</p>
        </Link>
      </div>
    </form>
  );
}
