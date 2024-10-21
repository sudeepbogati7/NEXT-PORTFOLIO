
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Loading from "./Loading";
const inter = Inter({ subsets: ["latin"] });
import { Suspense } from "react";
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
        <meta name="keywords" content="Sudip Bogati, Sudeep Bogati, Sudeep Bogati Software Engineer, ASCOL, greentick, sudeepbogati, sudipbogati , Software Engineer,  portfolio, skills, web developer, projects" />
        <link rel="canonical" href="https://sudipbogati.com.np" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5570809106422894"
          crossOrigin="anonymous"></script>

        <meta property="og:title" content="Sudeep Bogati - Software Engineer" />
        <meta property="og:description" content="Hello, this is Sudeep Bogati, a passionate Software Engineer from Nepal. Explore my projects and skills in Full Stack Software Development." />
        <meta property="og:url" content="https://sudipbogati.com.np" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sudipbogati.com.np/profile.jpg" />

        <meta name="twitter:card" content="summarsy_large_image" />
        <meta name="twitter:title" content="Sudeep Bogati - Software Engineer" />
        <meta name="twitter:description" content="Hello, this is Sudeep Bogati, a passionate Software Engineer from Nepal. Explore my projects and skills in Full Stack Software Development." />
        <meta name="twitter:image" content="/profile.jpg" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "  Person",
            "name": "Sudeep Bogati",
            "url": "https://sudipbogati.com.np",
            "sameAs": [
              "https://www.linkedin.com/in/sudeepbogati",
              "https://github.com/sudeepbogati7"
            ],
            "jobTitle": "Software Engineer",
            "worksFor": {
              "@type": "Organization"
            }
          }
          `}
        </script>
      </head>

      <div className=''>
        <Nav />
      </div>
      <Suspense fallback={<Loading />} >
        <body className={`${inter.className} bg-gray-100`}>{children}</body>
      </Suspense>
    </html>
  );
}
