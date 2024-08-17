import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`${inter.className} flex flex-col space-y-6 max-w-xl ml-auto mr-auto mt-10`}
      >
        {children}
      </body>
    </html>
  );
}
