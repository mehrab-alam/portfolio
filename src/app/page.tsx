'use client';

import About from '@/components/About/About';
import Blog from '@/components/Blog/Blog';
import Contact from '@/components/Contact/Contact';
import Experience from '@/components/Experience/Experience';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Skills from '@/components/Skills/Skills';
import { Params } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const [darkMode, setMode] = React.useState<boolean>(true);
  const [activeTab, setActiveTab] = React.useState<string>('About');
  const [headerActive, setHeader] = React.useState<boolean>(true);

  const [allPost, setPost] = React.useState<
    [
      {
        coverImage: string;
        slug: string;
        title: string;
        date: string;
        excerpt: string;
        author: { picture: string; name: string };
      }
    ]
  >();

  const Post = async () => {
    try {
      const res = await fetch(`/api/allPosts`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      const result = await res.json();
      setPost(result.post);
    } catch (err) {
      return;
    }
  };

  React.useEffect(() => {
    Post();
    AOS.init({
      once: true,
      offset: 100,
      duration: 1000,
      anchorPlacement: 'top-top',
    });
  }, []);

  const [showHeader, setShowHeader] = React.useState(true);
  const [position, setPosition] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setPosition(scrollPosition);
      if (scrollPosition > 300) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section
        className={`${darkMode ? 'fuchsia bg-black ' : 'teal bg-white '} `}
      >
        <Header
          params=''
          setMode={setMode}
          mode={darkMode}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          headerActive={showHeader}
        />
        <Hero
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          setHeader={setHeader}
          headerActive={headerActive}
        />
        <About
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          setHeader={setHeader}
        />
        <Experience setActiveTab={setActiveTab} activeTab={activeTab} />
        <Skills setActiveTab={setActiveTab} activeTab={activeTab} />
        {allPost && (
          <Blog
            morePost={allPost}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        )}
        <Contact setActiveTab={setActiveTab} activeTab={activeTab} />
        <Footer />
      </section>
    </main>
  );
}
