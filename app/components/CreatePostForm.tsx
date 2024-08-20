'use client';
import { useState } from 'react';
import { createPost } from '../create-post/actions';

export default function CreatePostForm() {
  const [state, setState] = useState<{ message?: string; errors?: any }>({});

  async function handleSubmit(formData: FormData) {
    const result = await createPost(formData);
    console.log('RESULT', result);
    setState(result); // Update state with response (success or errors)
  }

  return (
    <form action={handleSubmit}>
      <div className=''>
        <label htmlFor='title' className='block text-sm font-medium leading-6 text-gray-900'>
          Title
        </label>
        <div className='mt-2'>
          <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
            <input
              id='title'
              name='title'
              type='text'
              placeholder='title'
              required
              className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
            />
            {state.errors?.title && <p>{state.errors.title}</p>}
          </div>
        </div>
      </div>

      <div className=''>
        <label htmlFor='desc' className='block text-sm font-medium leading-6 text-gray-900'>
          Description
        </label>
        <div className='mt-2'>
          <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
            <input
              id='desc'
              name='desc'
              type='desc'
              placeholder='desc'
              required
              className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
            />
            {state.errors?.desc && <p>{state.errors.desc}</p>}
          </div>
        </div>
      </div>

      <div className=''>
        <label htmlFor='content' className='block text-sm font-medium leading-6 text-gray-900'>
          Content
        </label>
        <div className='mt-2'>
          <textarea
            id='content'
            name='content'
            rows={3}
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            defaultValue={''}
            required
          />
            {state.errors?.content && <p>{state.errors.content}</p>}
        </div>
      </div>

      <button
        type='submit'
        className='mt-5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'

      >
        Create Post
      </button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
