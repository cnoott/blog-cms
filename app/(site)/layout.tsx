import { AuthProvider } from '../context';
import Link from 'next/link';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <div
        className='flex flex-col space-y-6 max-w-xl ml-auto mr-auto mt-8 h-full'>
        <Link href='/'>
          <h1 className='text-4xl underline font-bold'>liamamad.io</h1>
        </Link>
        {children}
    </div>
  );
}
