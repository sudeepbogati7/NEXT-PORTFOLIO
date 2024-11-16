'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import Image from "next/image";
import '@/app/theme.css';
import Link from 'next/link';
import Nav from '@/components/nav';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialLinks from '@/components/SocialLinks';
// import DevelopmentSteps from '@/components/DevSteps';
export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    
    const handleScroll = () => {
      setIsScrolled (window.scrollY > 150);
    };
    
    window.addEventListener('scroll', handleScroll)
    
    AOS.init({ duration: 700 });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  let navBgColor = ''
  if (isScrolled === false) {
    navBgColor = "bg-transparent"
  }else{
    navBgColor = "bg-white bg-opacity-40 backdrop-blur-sm "
  }
  return (
    <>
      <Nav bgColor= {navBgColor} />
      <main className="">
        {/* Background Section */}
        <div
          style={{
            backgroundImage: "linear-gradient(to right, rgba(225, 238, 247, 1) 0%, rgba(180, 210, 230, 1) 100%)",
          }}
          className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-center opacity-70"
        >
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="max-h-screen relative z-10 mt-16 flex flex-col-reverse md:flex-row md:w-5/6 mx-auto justify-between w-full">
          {/* Left Content */}
          <div>
            <div className=' px-3 mt-6'>
              <h1 className='text-lg flex gap-1 font-medium font-handwriting text-green-700'>Namaste <Image src={'/namaste.svg'} width={18} height={20} alt='namaste'></Image> !</h1>
              <div className='text-2xl font-extrabold '>My name is <span className='bg-gradient-to-r from-red-200 to-blue-200 rounded-md px-2 text-gray-700'>Sudeep Bogati</span> </div>
              <div className='text-gray-600 text-lg font-medium'>originating from the beautiful landscapes of Nepal 🇳🇵. </div>
            </div>
            <div className="bg-gray-900 text-white p-6  shadow-lg font-mono mt-4 max-w-2xl ">
              {/* Terminal Header */}
              <div className="flex items-center mb-4">
              <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              </div>

              {/* Terminal Content */}
              <div className="text-lg flex flex-col font-medium">
                I am a programmer who loves
                <div className="flex gap-1 w-fit text-green-800 font-sans px-2 font-semibold rounded-xl text-2xl bg-gradient-to-r from-blue-300 to-green-200">
                <Image src="/learn.svg" width={25} height={20} alt="learning" />
                learning
                </div>
                <div className="flex gap-1 w-fit mt-2 text-blue-800 font-sans px-3 font-semibold rounded-xl text-2xl bg-gradient-to-l from-indigo-200 to-blue-300">
                <Image src="/terminal.svg" width={25} height={20} alt="building" />
                building new things
                </div>
                <span className="inline-flex items-center w-fit font-sans text-lg gap-1 font-semibold">
                and creating solutions that help businesses grow.
                </span>
              </div>
            </div>

          </div>
          {/* <div className="mt-6 md:mt-0 w-full px-4 md:w-4/5 mx-auto mb-2">
            <div className="text-lg font-semibold text-gray-800 font-handwriting">
              As a <span className="text-green-600">Software Engineer</span>,
            </div>
            <div className="text-2xl font-semibold text-indigo-900">
              I build complete Web Applications to solve business problems
            </div>
            <div className="text-gray-700 text-lg font-medium">
              focusing on making them user-friendly and reliable.
            </div>
            <div className="bg-blue-200 mt-3 text-green-800 font-medium border border-green-500 px-3 rounded w-fit">
              <Link
                className="flex items-center gap-1"
                href={'contact'}
              >
                <Image
                  src={'/contact.svg'}
                  width={18}
                  height={16}
                  alt="contact-svg"
                />
                Contact me
              </Link>
            </div>

            <div className="mt-8">
              <h1 className="text-xl font-semibold">What can I do?</h1>
              <div data-aos="fade-up" className="text-gray-600">
                I can build software tailored to your specific needs, offering a wide
                range of websites designed to support and grow your business. Here
                are some examples of what I can create for you:
              </div>

              <div className="px-1 my-6 w-full flex flex-col  gap-6">
                <div className='w-full flex flex-col md:flex-row gap-4'>
                  <div data-aos="flip-up" className="bg-gradient-to-t w-full md:w-1/2 rounded-md shadow-md px-4 py-2 from-slate-200 to-blue-200">
                    <h2 className="flex gap-1 font-semibold text-indigo-900">
                      <Image
                        className="text-red-300"
                        src={'/trading-up.svg'}
                        width={20}
                        height={20}
                        alt="business"
                      />
                      Business Websites
                    </h2>
                    <ul className="list-disc mt-1 text-gray-700 px-6 text-sm">
                      <li>Informational websites for small to large businesses</li>
                      <li>Portfolio websites for professionals</li>
                      <li>Company profile websites</li>
                    </ul>
                  </div>

                  <div data-aos="flip-up" className="bg-gradient-to-b rounded-md w-full md:w-1/2 shadow-md px-4 py-2 from-slate-200 to-blue-200">
                    <h2 className="flex gap-1 font-semibold text-indigo-900">
                      <Image
                        className="text-red-300"
                        src={'/shop.svg'}
                        width={20}
                        height={20}
                        alt="business"
                      />
                      E-Commerce Platforms
                    </h2>
                    <ul className="list-disc mt-1 text-gray-700 px-6 text-sm">
                      <li>Custom online stores</li>
                      <li>Integration with payment gateways</li>
                      <li>User-friendly shopping experiences</li>
                    </ul>
                  </div>
                </div>
                <div className='flex w-full flex-col md:flex-row gap-4'>
                  <div data-aos="flip-up" className="w-full md:w-1/2 bg-gradient-to-b rounded-md shadow-md px-4 py-2 from-slate-200 to-blue-200">
                    <h2 className="flex gap-1 font-semibold text-indigo-900">
                      <Image
                        className="text-red-300"
                        src={'/grid.svg'}
                        width={20}
                        height={20}
                        alt="business"
                        />
                      Custom Web Applications
                    </h2>
                    <ul className="list-disc mt-1 text-gray-700 px-6 text-sm">
                      <li>Dashboards for data visualization</li>
                      <li>Workflow management tools</li>
                      <li>SaaS (Software as a Service) applications</li>
                    </ul>
                  </div>
                  <div data-aos="flip-up" className="w-full md:w-1/2 bg-gradient-to-b rounded-md shadow-md px-4 py-2 from-slate-200 to-blue-200">
                    <h2 className="flex gap-1 font-semibold text-indigo-900">
                      <Image
                        className="text-red-300"
                        src={'/education.svg'}
                        width={20}
                        height={20}
                        alt="business"
                        />
                      Educational Platforms
                    </h2>
                    <ul className="list-disc mt-1 text-gray-700 px-6 text-sm">
                      <li> Online learning management systems </li>
                      <li>E-learning platforms with video and quiz integrations</li>
                    </ul>
                  </div>
                </div>

                <div data-aos="flip-up" className="w-full md:w-1/2 bg-gradient-to-b rounded-md shadow-md px-4 py-2 from-slate-200 to-blue-200">
                  <h2 className="flex gap-1 font-semibold text-indigo-900">
                    <Image
                      className="text-red-300"
                      src={'/portfolio.svg'}
                      width={16}
                      height={20}
                      alt="business"
                    />
                    Portfolio Websites
                  </h2>
                  <ul className="list-disc mt-1 text-gray-700 px-6 text-sm">
                    <li> Personal branding websites for creatives and professionals </li>
                    <li> Showcase sites for photographers, designers, etc. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* Right Content */}
          <div className="relative  overflow-hidden pb-6  flex flex-col md:w-2/5 w-full mx-auto gap-4 items-center">
            <div className="shadow-lg shadow-blue-500/30 rounded-full border-4 border-blue-300 w-fit object-cover bg-black overflow-hidden">
              <Image
                src={'/profile_photo.jpg'}
                width={150}
                height={100}
                alt="Profile image"
              />
            </div>
            <div className="flex flex-col w-full items-center">
              <div className="font-extrabold text-2xl tracking-wide text-gray-700">
                Sudeep Bogati
              </div>
              <div className="text-gray-700 text-sm">
                <strong className="text-green-600 ">Software Engineer</strong> at Green
                Tick Nepal
              </div>
              <div className="flex text-sm gap-1 text-gray-700">
                <Image
                  src={'/location.svg'}
                  width={16}
                  height={20}
                  alt="Location-svg"
                />
                Kathmandu, Nepal
              </div>
            </div>
            <SocialLinks />
          </div>
      </div>

        <div className='mt-4'>
          <h1 className='flex gap-1 items-center w-fit mx-auto font-semibold text-gray-600 '> Web Development Lifecycle Stages  <Image src={'/steps.svg'} width={20} height={20} alt='steps'></Image></h1>
          <div className='w-fit object-cover mx-auto mt-5'><Image src={'/dev_steps.png'} width={350} height={200} alt='development-steps'></Image></div>
          </div>
      </main>

    </>
  );
}
