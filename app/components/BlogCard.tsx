import Link from 'next/link';
import {BlogCardProps} from '../types';
import { Courier_Prime } from 'next/font/google';
import { formatDate } from '../utils/date';

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
});
export default function BlogCard({title, desc, date}: BlogCardProps) {


  return (
    <Link href='/' className='p-3 relative w-full bg-blue-200 rounded-lg'>
      <h4 className='font-bold underline max-w-80'>{title}</h4>
      <p className=''>{desc}</p>
      <p className={`${courier.className} absolute bottom-9 right-3`}>
        {formatDate(date)}
      </p>
    </Link>
  );
}
