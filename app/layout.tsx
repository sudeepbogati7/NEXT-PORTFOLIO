
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Loading from "./Loading";
const inter = Inter({ subsets: ["latin"] });
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Sudeep Bogati",
  description: "Hello , I'm Sudeep Bogati . A passionate Software Engineer from Nepal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header className=''>
        <Nav />
      </header>
      <Suspense fallback={<Loading />} >
        <body className={inter.className}>{children}</body>
      </Suspense>
    </html>
  );
}
