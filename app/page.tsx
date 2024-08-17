import { Courier_Prime } from 'next/font/google';
import BlogCard from './components/BlogCard';

const courier = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <>
      <section>
        <h1 className='text-xl font-bold'>Hey, my name is Liam Amadio.</h1>

        <p>I'm a NYC based software engineer looking to join a team of people building cool shit.
          My last startup was <a className='text-[#6A74DF] font-bold underline' href='https://download.lootswap.com' target='_blank'>lootswap</a> - a buy sell trade marketplace for sneakers and clothes.
        </p>
      </section>

      <section>
        <h1 className='text-lg font-bold'>Contact</h1>
        <p className={courier.className}>liamamadio at gmail dot com</p>
      </section>

      <section>
        <h1 className='text-lg font-bold'>My digital footprint</h1>
        <ul className='text-blue-600'>
          <li><a href="https://instagram.com/liamadio">Instagram (Photography)</a></li>
          <li><a href="https://www.linkedin.com/in/liam-amadio-0531591b9/">Linkedin</a></li>
          <li><a href="https://github.com/cnoott">Github</a></li>
      </ul>
      </section>
      <hr className='border-black'/>

      <section className='flex flex-col space-y-2'>
        <h1 className='font-bold text-xl'>Blog</h1>
        <BlogCard
          title={'How to live forever'}
          desc={'On legacy, identity, and how to impact others blaaslkdfja;lsdkjfalksdjf'}
          date={'08/14/2001'} 
        />
      </section>
    </>
  );
}
