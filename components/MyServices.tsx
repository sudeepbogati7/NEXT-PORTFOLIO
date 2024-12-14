import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function MyServices (){
    return (
        <>
            <div className="z-20 ">
                <h1 className="text-lg text-blue-900 font-semibold"> What Can I do ?  </h1>
                <div data-aos="fade-up" className="text-gray-600">
                  I can build software tailored to your specific needs, offering a wide
                  range of websites designed to support and grow your business. Here
                  are some examples of what I can create for you:
                </div>

                <div className="px-1 my-6 w-full flex flex-col  gap-6">
                  <div className='w-full flex flex-col lg:flex-row gap-4'>
                    <div data-aos="flip-up" className="bg-gradient-to-t w-full  rounded-md shadow-md px-4 py-2 from-slate-200 to-blue-200">
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

                    <div data-aos="flip-up" className="bg-gradient-to-b rounded-md w-full  shadow-md px-4 py-2 from-slate-200 to-blue-200">
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

                  <div data-aos="flip-up" className="w-full bg-gradient-to-b rounded-md shadow-md px-4 py-2 from-slate-200 to-blue-200">
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
        </>
    )
}