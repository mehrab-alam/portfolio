import { FC } from 'react';

const Experience: FC<{
  setActiveTab: (value: string) => void;
  activeTab: string;
}> = ({ setActiveTab, activeTab }) => {
  const experiences = [
    {
      year: '2023-present',
      title: 'Full Stack Developer',
      university: 'Torqbit',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    },
    {
      year: '2023-present',
      title: 'Full Stack Development',
      university: 'Torqbit',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    },
  ];
  return (
    <section
      id='Experience'
      onMouseOver={() => {
        setActiveTab('Experience');
      }}
    >
      <div className='mx-auto my-0   h-full max-w-[1200px] p-5 py-10 '>
        <h1 className='text-center text-5xl text-white'>Experience</h1>

        <p className=' py-10 text-center text-xl text-[#666]'>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <div className='grid grid-cols-2 gap-10'>
          {experiences.map((exp, i) => {
            return (
              <div
                data-aos='flip-right'
                data-aos-delay={`${i * 300}`}
                className='flex h-[300px] w-full flex-col gap-5 rounded-lg bg-[#0f0f0f] bg-opacity-70 p-8'
                key={i}
              >
                <h4 className='text-primary-400 text-xl '>{exp.year}</h4>
                <h4 className='text-xl font-normal text-white '>{exp.title}</h4>
                <div className='text-lg tracking-wide text-[#666]'>
                  {exp.university}
                </div>
                <p className='text-lg text-[#666]'>{exp.description}</p>
              </div>
            );
          })}
        </div>
        <div className=' flex items-center justify-center py-10 '>
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

export default Experience;
