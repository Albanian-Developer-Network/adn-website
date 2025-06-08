import { Briefcase, Code2, GraduationCap, Users } from 'lucide-react';
import AspirationCard from './AspirationCard';

export default function AspirationsSection() {
  return (
    <section className='px-5 py-5 md:px-10 md:py-10 2xl:px-20 2xl:py-15 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800'>
      <h1 className='text-xl sm:text-2xl font-semibold mb-4'>Our Goals</h1>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <AspirationCard
          title='Networking'
          description='We enable people to extend the reach of their network'
          icon={<Users size={32} />}
        />

        <AspirationCard
          title='Education & Growth'
          description='We promote learning through voluntary mentorships and public resources - everything free!'
          icon={<GraduationCap size={32} />}
        />

        <AspirationCard
          title='Open Source Contribution'
          description='We empower developers to contribute and collaborate on open projects'
          icon={<Code2 size={32} />}
        />

        <AspirationCard
          title='Career Advice'
          description='We help connect talent with local and global job opportunities'
          icon={<Briefcase size={32} />}
        />
      </div>
    </section>
  );
}
