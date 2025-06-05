import Image from 'next/image';
import AnimatedText from './AnimatedText';

const ANIMATED_TEXTS = [
  'developers',
  'data engineers',
  'students',
  'contributors',
];

export default function Hero() {
  return (
    <section
      id='about-us'
      className='bg-neutral-50 dark:bg-neutral-900 px-5 py-5 md:px-10 md:py-10 2xl:px-20 2xl:py-15 w-full flex flex-col md:flex-row gap-4 items-stretch justify-center border-b border-neutral-200 dark:border-neutral-800'
    >
      {/* Left side */}
      <div className='flex flex-col gap-4 justify-center flex-1/2'>
        <h1 className='font-mono text-xl sm:text-3xl md:text-4xl'>
          We are&nbsp;
          <span className='font-medium'>
            <AnimatedText texts={ANIMATED_TEXTS} />
          </span>
          <div className='ml-2 inline-block h-8 w-4 terminal-cursor'></div>!
        </h1>

        <p className='text-neutral-600 dark:text-neutral-400 font-light'>
          Albanian Developer Network is a public community made up of students,
          contributors and other professionals, all united under one name. Our
          mission is to connect, support, and empower developers across every
          Albanian-speaking region.
        </p>

        <button className='w-fit text-sm py-1.5 px-3 text-neutral-900 dark:text-neutral-50 border-2 border-neutral-800 cursor-pointer'>
          Learn More
        </button>
      </div>

      {/* Right side */}
      <div className='flex-1/2'>
        <Image
          className='w-full h-96 object-cover'
          src='/aiHackathon.png'
          width={800}
          height={800}
          alt='Logo'
        />
      </div>
    </section>
  );
}
