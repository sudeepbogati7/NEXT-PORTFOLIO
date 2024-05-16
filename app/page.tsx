'use client';
import 'tailwindcss/tailwind.css';
import Image from "next/image";
import '@/app/theme.css';

import Nav from '@/components/nav';

export default function Home() {
  return (
    <>
      <header className='flex items-center justify-center'>
        <Nav />
        <div>
          <label htmlFor="theme" className="theme">
            <span className="theme__toggle-wrap">
              <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" />
                <span className="theme__fill"></span>
                <span className="theme__icon">
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                </span>
            </span>
          </label>
        </div>
      </header>
      <main className="mt-24">
        Hey what is going on
      </main>
    </>
  );
}
