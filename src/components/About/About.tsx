import { FC, useEffect } from 'react';

const About: FC<{
  setActiveTab: (value: string) => void;
  activeTab: string;
  setHeader: (value: boolean) => void;
}> = ({ activeTab, setActiveTab, setHeader }) => {
  const aboutData = [
    { title: 'Name:', value: 'MD MEHRAB ALAM' },
    { title: 'Date of birth:', value: 'July 06, 2000' },
    { title: 'Address:', value: 'Wasseypur Dhanbad, Jharkhand, India' },
    { title: 'Pin Code:', value: '826001' },

    { title: 'Email:', value: 'mehrab2000alam@gmail.com' },
    { title: 'Phone:', value: '(+91) 7256895889' },
  ];
  return (
    <section
      id='About'
      onMouseOver={() => {
        setActiveTab('About');
        setHeader(true);
      }}
    >
      <div className='mx-auto my-0  flex h-full max-w-[1200px] items-center justify-between p-5 '>
        <div className='w-[600px]'></div>
        <div className='w-[600px]' data-aos='fade-left'>
          <h1 className='pb-10 text-5xl text-white'>About Me</h1>
          <p className='max-w-[500px] pb-10 text-lg text-[#666]'>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className='flex flex-col gap-5 text-[#666]'>
            {aboutData.map((about, i) => {
              return (
                <div className='flex items-center text-xl' key={i}>
                  <div className='w-[150px] text-white'>{about.title}</div>
                  <div>{about.value}</div>
                </div>
              );
            })}
          </div>
          <div className='my-10 text-xl text-white'>
            <span className='text-primary-400'>4</span> Projects completed
          </div>

          <a
            href='/docs/mehrab-resume.pdf'
            className='W-full shadow-primary-800 bg-primary-300 rounded-3xl px-6 py-2 text-xl tracking-widest shadow-md '
            download
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
