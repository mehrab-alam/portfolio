import { Params } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { FC, useState } from 'react';

const Header: FC<{
  setMode: (value: boolean) => void;
  params: string;
  mode: boolean;
  setActiveTab: (value: string) => void;
  activeTab: string;
  headerActive: boolean;
}> = ({ setMode, mode, setActiveTab, activeTab, params, headerActive }) => {
  const tabs = ['About', 'Experience', 'Skills', 'My Blog', 'Contact'];

  return (
    <header
      data-aos={`${headerActive && 'fade-down'}`}
      className={`left-0 right-0  z-10 bg-black shadow-lg transition-all  ease-linear ${
        headerActive ? 'relative  ' : '  headerAnimation  fixed  '
      } shadow-gray-800`}
    >
      <div className='mx-auto my-0 flex h-[70px] max-w-[1200px] items-center justify-between px-5 '>
        <h1 className='text-xl text-white'>
          <Link href={'/'}>MEHRAB</Link>
        </h1>
        <div className='flex items-center gap-12 text-white'>
          {tabs.map((tab, i) => {
            return (
              <div key={i} className='group flex cursor-pointer flex-col '>
                <Link
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                  className={` ${
                    activeTab === tab ? 'text-primary-400' : 'text-white'
                  } text-lg transition-all`}
                  href={`${params ? `/#${tab}` : `#${tab}`}`}
                >
                  {tab}
                </Link>
                <span
                  className={` bg-primary-400 ${
                    activeTab === tab
                      ? 'scale-x-1 '
                      : 'scale-x-[0] group-hover:scale-[1]'
                  }  delay-50 mt-[4px] h-[2px] w-full  transition-all  delay-200   ease-in-out  `}
                ></span>
              </div>
            );
          })}
        </div>
        <label className='inline-flex cursor-pointer items-center'>
          <input
            type='checkbox'
            onClick={() => {
              setMode(!mode);
            }}
            defaultChecked
            onChange={() => {
              return;
            }}
            value=''
            checked={mode}
            className='peer sr-only'
          />
          <div
            className="peer-checked:bg-primary-600
           peer relative h-6 w-11 rounded-full border-none bg-gray-200 after:absolute after:start-[2px]            
           after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border  after:bg-[#666] after:transition-all
            after:content-[''] focus:outline-none peer-checked:after:translate-x-full  
             rtl:peer-checked:after:-translate-x-full  "
          ></div>
          <span className='text-primary-400 ms-3 text-sm font-medium dark:text-gray-300'>
            Switch Theme
          </span>
        </label>
      </div>
    </header>
  );
};
export default Header;
