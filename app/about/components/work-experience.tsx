'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import WorkTimeline from './work-timeline-component';
import Image from 'next/image';
export default function WorkExperience() {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[210vh] bg-black  '>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
}

const Section1 = ({ scrollYProgress }: any) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky  font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <div className=" w-full  max-w-[280px] ">
        <Image
          src={"/professional.svg"}
          alt={"Career growth illustration"}
          width={280}
          height={200}
        />
      </div>
      <h1 className='2xl:text-7xl font-rowdies top-2 w-full md:w-4/6 mx-auto text-transparent bg-gradient-to-br from-sky-700 to-sky-300 bg-clip-text text-5xl md:text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
        Turning Skills Into Real-World Solutions; Workplaces, responsibilities, and the results that followed.
      </h1>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress } : any) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative min-h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <article className='md:container mx-auto relative z-10 '>
        <WorkTimeline />
      </article>
    </motion.section>
  );
};