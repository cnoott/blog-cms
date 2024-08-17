'use server';

import { z } from 'zod';
import { Post } from '../models';

const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  desc: z.string().min(1, 'Description is required'),
  content: z.string().min(1, 'Content is required'),
});

export async function createPost(formData: FormData) {

  const validation = blogPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    desc: formData.get('desc'),
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { title, content, desc } = validation.data;
  const date = new Date();
    console.log('About to create post');
  try {
    const newPost = await Post.create({ title, content, desc, date });
    console.log('Post Created!', newPost);
  } catch (e) {
    console.log('Error creating new post in db: ', e);
  }

  return { success: true, message: `Blog post "${title}" created!` };
}
