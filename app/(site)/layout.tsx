import { AuthProvider } from '../context';
import Logo from '../components/Logo';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <div
        className='flex flex-col space-y-6 max-w-xl ml-auto mr-auto mt-8 h-full'>
      <Logo />
        {children}
    </div>
  );
}
