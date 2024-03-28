import Avatar from './Avatar';
import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import DateFormater from './DateFormater';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import React from 'react';

const PostBody: FC<{ slug: string }> = ({ slug }) => {
  const [darkMode, setMode] = React.useState<boolean>(true);
  const [activeTab, setActiveTab] = React.useState<string>('About');
  const [blogPost, setBlogPost] = useState<any>();
  const [content, setContent] = useState();
  const [menuActive, setMenuActive] = useState({
    active: false,
    menu: '',
  });
  const onMenuActive = (value: boolean, name: string) => {
    setMenuActive({ active: value, menu: name });
  };

  const post = () => {
    if (slug) {
      fetch(`/api/slug?slug=${slug}&dir=post`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }).then((res) =>
        res.json().then((data) => {
          setBlogPost(data.post);
          setContent(data.content);
        })
      );
    }
  };
  useEffect(() => {
    post();
  });

  if (blogPost) {
    return (
      <>
        <Head>
          <title>{blogPost.title}</title>
          <meta property='og:image' content={blogPost.ogImage.url} />
        </Head>
        <Header
          params={slug}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          setMode={setMode}
          mode={darkMode}
          headerActive={true}
        />
        <section
          id='My Blog'
          onMouseOver={() => {
            setActiveTab('My Blog');
          }}
          className={` m-auto md:w-[full] ${darkMode ? 'bg-black' : ''}`}
        >
          <div className=' flex  h-[250px] w-[full] items-end align-baseline  md:h-[250px]'></div>
          <div className='m-auto mt-[-100px] flex w-[full] flex-col items-center  justify-center rounded-lg p-2  md:w-[1200px]  '>
            <img
              src={blogPost.coverImage}
              className='  h-[250px]  w-[full] rounded-lg  border-4 border-gray-400  object-cover p-1 md:h-[600px] md:w-[1200px]'
              alt=''
            />
          </div>

          <div className='items-left m-auto flex flex-col justify-between p-[20px] text-xl font-[400] text-[#666] md:max-w-[1200px]'>
            <div className='flex flex-col items-center '>
              <h1 className='text-primary-400 w-[full]  pb-6 text-center text-[40px] font-light leading-tight  md:text-[55px] md:leading-[70px]  '>
                {blogPost.title}
              </h1>

              <h2 className='  text-[30px] font-light'>
                <DateFormater dateString={blogPost.date} />
              </h2>
            </div>
            <hr className='m-[20px] ' />
            <div className='flex  flex-col md:flex-row'>
              <div className='flex flex-col  rounded border-2  p-6 md:w-[600px]  md:flex-col md:border-none md:p-0'>
                <Avatar picture={blogPost.author.picture} name={''} />
                <h1 className='text-primary-400 text-left	  text-[15px] '>
                  {blogPost.author.name}
                </h1>
              </div>
              <div>
                <div
                  className='flex flex-col gap-4 py-4'
                  dangerouslySetInnerHTML={{ __html: content as any }}
                />
              </div>
            </div>
          </div>
        </section>
        <div className='bg-black'>
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header
          params={slug}
          headerActive={true}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          setMode={setMode}
          mode={darkMode}
        />
        <div className='flex h-[100vh] flex-col items-center justify-center gap-2'>
          <div className='mt-20 h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-black' />{' '}
          <h2>Loading...</h2>
        </div>
        <Footer />
      </>
    );
  }
};

export default PostBody;
