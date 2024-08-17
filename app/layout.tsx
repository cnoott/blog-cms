import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "liamamad.io",
  description: "Liam's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col space-y-6 max-w-xl ml-auto mr-auto mt-8`}
      >

        <Link href='/'>
          <h1 className='text-4xl underline font-bold'>liamamad.io</h1>
        </Link>
        {children}
      </body>
    </html>
  );
}
