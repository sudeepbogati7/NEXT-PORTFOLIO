
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Loading from "./Loading";
const inter = Inter({ subsets: ["latin"] });
import { Suspense } from "react";
// export const metadata: Metadata = {
//   title: "Sudeep Bogati",
//   description: "Hello , I'm Sudeep Bogati . A passionate Software Engineer from Nepal",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Sudeep Bogati </title>
        <meta name="description" content="Hello , this is Sudeep Bogati , a passionate Software Engineer from Nepal. Explore my projects and skills in Full Stack Software Development." />
        <meta name="keywords" content="Sudip Bogati, Sudeep Bogati, sudeepbogati, sudipbogati , Software Engineer,  portfolio, skills, web developer, projects" />
        <link rel="canonical" href="https://sudipbogati.com.np" />
      </head>
      <header className=''>
        <Nav />
      </header>
      <Suspense fallback={<Loading />} >
        <body className={`${inter.className} bg-gray-100`}>{children}</body>
      </Suspense>
    </html>
  );
}
