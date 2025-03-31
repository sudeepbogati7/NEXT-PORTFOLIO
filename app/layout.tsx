"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Head from "next/head";
import AOS from 'aos';
import { Toaster } from "@/components/ui/toaster";
import Loading from "./Loading";
const inter = Inter({ subsets: ["latin"] });
import { Suspense } from "react";
import { AuthProvider } from "../contexts/AuthContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    AOS.init({ duration: 700 });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navBgColor = '';
  if (isScrolled === false) {
    navBgColor = "bg-transparent transition-all duration-300 ease-in-out";
  } else {
    navBgColor = "md:bg-gray-100 bg-white bg-opacity-50 border border-indigo-100 shadow md:shadow-lg bg-opacity-70 backdrop-blur-sm md:top-4 duration-700 ease-in-out transition-all";
  }

  return (
    <html lang="en">
      <head>
        <title> Sudeep Bogati | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hello, this is Sudeep Bogati, a passionate Software Engineer from Nepal. Explore my projects and skills in Full Stack Software Development." />
        <meta name="keywords" content="Sudip Bogati, Sudeep Bogati, Sudeep Bogati Software Engineer, ASCOL, software engineer, software engineer from nepal, software developer, software developer from nepal, talented software developer from nepal, IT, software, engineer, nepal, nepali in IT, developer, engineer, green tick nepal, digitalize business, sudeep, bogati, sudip, bogati, boy, greentick, sudeepbogati, sudipbogati, Software Engineer, portfolio, skills, web developer, projects" />
        <link rel="canonical" href="https://sudipbogati.com.np" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5570809106422894" crossOrigin="anonymous"></script>


        <script defer src="https://cloud.umami.is/script.js" data-website-id="e1b474a2-bdcd-4552-9eab-89f9f8a3fea6"></script>
        <script defer src="https://analytics.sudipbogati.com.np/script.js" data-website-id="bc85fa94-16c1-421b-8800-08fda1b69b7f"></script>

        <meta property="og:title" content="Sudeep Bogati - Software Engineer" />
        <meta property="og:description" content="Hello, this is Sudeep Bogati, a passionate Software Engineer from Nepal. Explore my projects and skills in Full Stack Software Development." />
        <meta property="og:url" content="https://sudipbogati.com.np" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sudipbogati.com.np/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sudeep Bogati - Software Engineer" />
        <meta name="twitter:description" content="Hello, this is Sudeep Bogati, a passionate Software Engineer from Nepal. Explore my projects and skills in Full Stack Software Development." />
        <meta name="twitter:image" content="/profile.jpg" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sudeep Bogati",
            "url": "https://sudipbogati.com.np",
            "sameAs": [
              "https://www.linkedin.com/in/sudeepbogati",
              "https://github.com/sudeepbogati7"
            ],
            "jobTitle": "Software Engineer",
            "worksFor": {
              "@type": "Organization"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://sudipbogati.com.np"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://sudipbogati.com.np/{search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "about": {
              "@type": "WebPage",
              "@id": "https://sudipbogati.com.np/about"
            },
            "skills": {
              "@type": "WebPage",
              "@id": "https://sudipbogati.com.np/skills"
            },
            "contact": {
              "@type": "WebPage",
              "@id": "https://sudipbogati.com.np/contact"
            }
          }
          `}
        </script>
      </head>
      <body className={`bg-gray-50 font-poppins`}>

        <AuthProvider>
          <Toaster />
          <Nav />
          <main className="pt-20 pb-12">{children}</main>
          <footer className="bg-sky-50 text-sky-800 py-6 text-center">
            <div className="container mx-auto">
              <p className="text-sm">&copy; {new Date().getFullYear()} Sudeep Bogati. All rights reserved.</p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
