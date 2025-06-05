import { cloneElement, ReactElement } from 'react';

export interface AspirationCardProps {
  title: string;
  description: string;
  icon: ReactElement;
}

export default function AspirationCard(props: AspirationCardProps) {
  return (
    <div className='p-5 items-center flex-1/4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800'>
      <div className='flex items-center gap-2'>
        {props.icon}
        <span className='font-semibold text-neutral-950 dark:text-neutral-50'>
          {props.title}
        </span>
      </div>

      <p className='text-sm text-neutral-800 dark:text-neutral-50 mt-1'>
        {props.description}
      </p>
    </div>
  );
}
