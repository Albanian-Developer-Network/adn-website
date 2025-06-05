import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='z-10 sticky top-0 py-3 flex items-center justify-around w-full bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-800'>
      <div className='flex items-center gap-3'>
        <Image
          src='logo.svg'
          alt='Albanian Dveloper Network'
          width={50}
          height={50}
          className='rounded-xl'
        />

        <nav>
          <ul className='flex flex-column gap-1 items-center'>
            <li className='py-1.5 px-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 cursor-pointer hover:bg-neutral-100 hover:dark:bg-neutral-800'>
              <Link href='/#'>Home</Link>
            </li>

            <li className='py-1.5 px-2 text-sm font-medium text-neutral-900 dark:text-neutral-50 cursor-pointer hover:bg-neutral-100 hover:dark:bg-neutral-800'>
              <Link href='/#about-us'>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className='flex gap-1.5 items-center'>
        <div className='hidden md:flex items-center gap-1.5 py-1.5 px-2 w-60 border border-neutral-200 dark:border-neutral-800 cursor-pointer'>
          <Search
            size={18}
            className='text-neutral-600 dark:text-neutral-100'
          />
          <span className='text-sm font-medium text-neutral-600 dark:text-neutral-100'>
            Search...
          </span>
        </div>

        <a
          href='#join-us'
          className='w-max p-1.5 px-3 text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 cursor-pointer hover:bg-neutral-700 hover:dark:bg-white/90'
        >
          Join Us!
        </a>
      </nav>
    </header>
  );
}
