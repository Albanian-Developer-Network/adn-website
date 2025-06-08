import { Megaphone } from 'lucide-react';

export interface AlertProps {
  title: string;
  message: string;
}

export default function Alert(props: AlertProps) {
  return (
    <div className='p-1 bg-slate-800 flex items-center justify-center gap-1.5'>
      <Megaphone size={20} className='text-white' />
      <p className='text-sm text-neutral-200'>
        <b className='text-neutral-50'>{props.title}</b> - {props.message}
      </p>
    </div>
  );
}
