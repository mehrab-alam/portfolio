import { FC, useEffect, useState } from 'react';

const Hero: FC<{
  setActiveTab: (value: string) => void;
  setHeader: (value: boolean) => void;
  headerActive: boolean;
  activeTab: string;
}> = ({ setActiveTab, activeTab, setHeader, headerActive }) => {
  const [carouselActive, setActive] = useState<boolean>(false);

  return (
    <section
      id='Home'
      onMouseOver={() => {
        setActiveTab('About');
      }}
    >
      <div className='mx-auto my-0 flex h-[100vh] max-w-[1200px] items-center justify-between p-5'>
        <div className='text-4xl text-white' data-aos='fade-up'>
          <h4 className='text-primary-400 text-xl'>Hello !</h4>
          <h1 className='my-5 max-w-[600px] text-7xl  tracking-widest'>
            I&apos;m <span className='text-primary-400'>Mehrab Alam</span>
          </h1>
          <p className='mb-5 text-3xl'>A Full Stack Developer</p>
          <div className='mt-10 flex items-center gap-2'>
            <button className='bg-primary-300 flex h-[40px] w-32 items-center justify-center rounded-3xl  text-sm font-[600] text-black transition-all hover:border hover:border-gray-400 hover:bg-black hover:text-white   '>
              HIRE ME
            </button>
            <button className='hover hover:bg-primary-300 flex h-[40px] w-32 items-center justify-center rounded-3xl border border-gray-400 text-sm font-[600]  transition-all hover:text-black '>
              MY WORKS
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
