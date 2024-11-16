// // components/DevelopmentSteps.js
// import React from "react";

// const steps = [
//   {
//     title: "Design",
//     description: "Plan the UI/UX and overall structure, including wireframes and prototypes."
//   },
//   {
//     title: "Development",
//     description: "Build frontend and backend, integrating features and connecting databases."
//   },
//   {
//     title: "Testing",
//     description: "Conduct tests to ensure functionality and performance are up to standards."
//   },
//   {
//     title: "Deployment",
//     description: "Deploy the app to a live environment, making it accessible to users."
//   },
//   {
//     title: "Maintenance",
//     description: "Continuously monitor and improve the app for optimal performance."
//   },
// ];

// export default function DevelopmentSteps() {
//   return (
//     <div className="px-6 w-full md:w-4/5 xl:w-3/5 mx-auto">
//                         <ol data-aos="fade-up" className="relative border-s-2 border-gray-400">
//                             <li className="mb-10 ms-6">
//                                 <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-orange-400">
//                                     <Image src="/tu.png" width={100} height={100} alt="gtn" />
//                                 </span>
//                                 <h3 className="flex items-center font-bold text-gray-900">Bachelors in Information Technology (BIT)</h3>
//                                 <Link href="https://www.tuiost.edu.np/" className="underline flex tracking-wide text-base items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600">
//                                     Tribhuvan University, Kathmandu
//                                 </Link>
//                                 <time className="block italic mb-2 text-sm font-normal leading-none text-gray-500">2021 - 2025</time>
//                                 <div className="relative">
//                                     <div style={{ maxHeight: showMore ? '1000px' : '100px' }} className={`${showMore ? 'max-h-fit' : 'max-h-0'} overflow-hidden transition-all duration-800 relative`}>
//                                         <p className="mb-4 text-base font-normal text-gray-700">
//                                             Studied Bachelor of Information Technology (BIT) from Tribhuvan University. My studies covered programming, databases, Web Development, Networking. I gained hands-on experience through projects and internships, developing strong IT and problem-solving skills.
//                                         </p>
//                                         <ol className="list-disc px-4 text-sm flex flex-col gap-2 overflow-hidden transition-all duration-500">
//                                             <li><span className="font-semibold">Programming</span>: Learned Java, C and C++.</li>
//                                             <li><span className="font-semibold">Databases</span>: Managed and created databases using SQL as well as NoSQL.</li>
//                                             <li><span className="font-semibold">Web Development</span>: Built websites using HTML, CSS, PHP and JavaScript.</li>
//                                             <li><span className="font-semibold">Software Engineering</span>: Studied how to plan and build software projects.</li>
//                                             <li><span className="font-semibold">Networking:</span> Learned about computer networks and security.</li>
//                                             <li><span className="font-semibold">Information Systems:</span> Studied how to create systems to solve business problems.</li>
//                                             <li><span className="font-semibold">Data Structures:</span> Learned about organizing and using data efficiently.</li>
//                                             <li><span className="font-semibold">Hands-On Projects:</span> Gained real-world experience through projects and internships.</li>
//                                         </ol>
//                                     </div>
//                                     {!showMore && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 opacity-80 to-transparent pointer-events-none"></div>}
//                                 </div>
//                                 <button onClick={() => setShowMore(!showMore)} className="flex gap-2 items-center mt-1 text-blue-500">
//                                     {showMore ? 'Read Less' : 'Read More'} {showMore ? <FaChevronUp /> : <FaChevronDown />}
//                                 </button>
//                             </li>
//                             <li className="mb-10 ms-6">
//                                 <span data-aos="fade-up" className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 border border-[#92a91a]">
//                                     <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//                                         <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                                     </svg>
//                                 </span>
//                                 <h3 data-aos="fade-up" className="flex items-center text-base font-bold text-gray-900">+2, Computer Science</h3>
//                                 <Link data-aos="fade-up" href="https://sungavacollege.edu.np/" className="underline flex tracking-wide text-sm items-center mb-2 font-medium text-gray-800 w-fit hover:border-gray-600">
//                                     Sungava College, Chitwan
//                                 </Link>
//                                 <time data-aos="fade-up" className="block italic mb-2 text-sm font-normal leading-none text-gray-500">2019 - 2021</time>
//                                 <div data-aos="fade-up" className="text-sm text-gray-600 tracking-wide">
//                                     <div>Grade XI CGPA: <span className="font-semibold">3.79</span></div>
//                                     <div>Grade XII CGPA: <span className="font-semibold">3.59</span></div>
//                                     <div><span className="font-semibold">Major Subjects:</span> Physics, Chemistry, Mathematics, Computer</div>
//                                 </div>
//                                 <Link data-aos="fade-up" target="_blank" className="flex text-gray-600 items-center gap-1 border-b-2 border-gray-300 hover:border-black transition-all duration-200 ease hover:text-black w-fit my-4" href="https://drive.google.com/file/d/1HQmnNRXbOQFOO1TB0UoquRGiYusXoyur/view?usp=sharing">
//                                     See more <Image src="/redirect.png" width={12} height={12} alt="see-more" />
//                                 </Link>
//                             </li>
//                         </ol>
//                     </div>
//   );
// }
