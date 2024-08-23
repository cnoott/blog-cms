import CreatePostForm from '../../components/CreatePostForm';
import Link from 'next/link';

export default function CreatePost() {
  // TODO: published/draft in db model
  return (
    <>
      <Link href='/dashboard'><p className='text-blue-600 mb-5 underline'>← Back to Posts</p></Link>
      <h1 className='text-xl font-bold'> Create Post </h1>
      <CreatePostForm />
    </>
  );
}

