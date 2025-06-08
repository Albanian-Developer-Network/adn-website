import DiscordIcon from '@/components/icons/DiscordIcon';
import GithubIcon from '@/components/icons/GithubIcon';

export default function JoinUsSection() {
  return (
    <section
      id='join-us'
      className='flex flex-col items-center px-5 py-5 md:px-20 md:py-10 bg-white dark:bg-[#0a0a0a] border-b border-neutral-200 dark:border-neutral-800'
    >
      <h1 className='text-xl sm:text-2xl font-semibold mb-2'>Join Us</h1>
      <p className='text-sm sm:text-base text-neutral-700 dark:text-neutral-400 mb-2'>
        Find friends, make connections, share your ideas and experiences!
      </p>

      <div className='flex gap-4 items-center'>
        <a
          href='https://github.com/Albanian-Developer-Network'
          className='cursor-pointer'
          target='_blank'
        >
          <GithubIcon className='w-8 sm:w-10 fill-[#181717] dark:fill-white' />
        </a>

        <a
          href='https://discord.gg/sdhRFkNhyS'
          className='cursor-pointer'
          target='_blank'
        >
          <DiscordIcon fill='#5865F2' className='w-8 sm:w-10' />
        </a>
      </div>
    </section>
  );
}
