import { FC } from 'react';

const Contact: FC<{
  setActiveTab: (value: string) => void;
  activeTab: string;
}> = ({ setActiveTab, activeTab }) => {
  return (
    <section
      className='px-4 py-20 md:px-0'
      id='Contact'
      onMouseOver={() => {
        setActiveTab('Contact');
      }}
    >
      <div className='mx-auto my-0  max-w-[1200px]  '>
        <h1 className='text-center text-5xl text-white'>CONTACT US</h1>
        <div className=' flex flex-col-reverse pt-8 shadow-xl lg:flex-row'>
          <div className=' w-full bg-gray-200 lg:h-[800px] lg:w-[600px]'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3649.676820049039!2d86.4197686314583!3d23.830088603057934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708499353467!5m2!1sen!2sin'
              className='h-[400px] w-full border-none lg:h-[800px] lg:w-[600px]'
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='h-full w-full bg-[#0f0f0f] bg-opacity-70 p-8 text-white lg:h-[800px] lg:w-[600px]'>
            <h4 className='py-2 text-xl font-[600] md:text-3xl'>Contact us</h4>
            <p className='max-w-[350px] py-2 text-xl text-gray-400 md:w-[400px]'>
              We're open for any suggestion or just to have a chat
            </p>
            <div className='flex flex-col items-start justify-between gap-5 py-2 md:flex-row md:py-4'>
              <div>
                <div className='py-1 text-lg font-[600] md:py-2'>ADDRESS:</div>
                <p className='w-[200px] text-sm text-[#666]'>
                  Gani Colony, wasseypur, Dhanbad, Jharkhan, India
                </p>
              </div>
              <div className='flex flex-row items-center gap-2 md:flex-col md:items-start md:gap-0'>
                <div className='py-1 text-lg font-[600] md:py-2'>EMAIL:</div>
                <a
                  href='mailto:mehrab2000alam@gmail.com'
                  className='hover:text-primary-600 w-[200px] text-sm text-[#666] '
                >
                  mehrab2000alam@gmail.com
                </a>
              </div>
              <div className='flex flex-row items-center gap-2 md:flex-col md:items-start md:gap-0'>
                <div className='py-1 text-lg font-[600] md:py-2'>PHONE:</div>
                <a
                  href='tel:7256895889'
                  className='hover:text-primary-600 w-[200px] text-sm text-[#666] '
                >
                  +91 7256895889
                </a>
              </div>
            </div>
            {/* form */}
            <div className='py-4'>
              <form action=''>
                <div className='flex flex-col gap-6  md:flex-row'>
                  <input
                    type='text'
                    className='h-[50px] max-w-[400px]  rounded-sm border-gray-300 bg-[#eee] text-black focus:border-none active:border-none active:outline-none md:w-[260px]'
                    name='name'
                    placeholder='Name'
                  />
                  <input
                    type='email'
                    className=' h-[50px] max-w-[400px] rounded-sm border-gray-300 bg-[#eee] text-black focus:border-none active:border-none active:outline-none md:w-[260px]'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <input
                  type='text'
                  className='my-4 h-[50px] w-full rounded-sm border-gray-300 bg-[#eee] text-black focus:border-none active:border-none active:outline-none md:w-[545px]'
                  name='subject'
                  placeholder='Subject'
                />
                <textarea
                  name='message'
                  className='my-2 w-full rounded-sm border-gray-300 bg-[#eee] text-black focus:border-none active:border-none active:outline-none md:w-[545px]'
                  placeholder='Create a message here'
                  cols={20}
                  rows={4}
                />
                <br />
                <button
                  type='submit'
                  className='bg-primary-600 my-2 h-[50px] rounded px-4 py-2 font-[600] text-white hover:shadow-lg md:w-[150px]'
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
            <div>
              <div className='my-4 text-lg  font-[600] md:text-2xl'>
                Follow us here
              </div>
              <div className='flex gap-2 '>
                <a
                  href='#'
                  className='text-primary-600 md:text-md text-sm font-[600] transition-all hover:text-[#666]'
                >
                  FACEBOOK
                </a>
                <a
                  href='#'
                  className='text-primary-600 md:text-md text-sm font-[600] transition-all hover:text-[#666]'
                >
                  TWITTER
                </a>
                <a
                  href='#'
                  className='text-primary-600 md:text-md text-sm font-[600] transition-all hover:text-[#666]'
                >
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
