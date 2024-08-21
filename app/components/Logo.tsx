import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <h1 className='text-4xl underline font-bold'>liamamad.io</h1>
    </Link>
  );
}
