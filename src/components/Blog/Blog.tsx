import DateFormater from '@/components/Blog/DateFormater';
import {
  faCalendar,
  faComment,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

const Blog: FC<{
  morePost: [
    {
      coverImage: string;
      slug: string;
      title: string;
      date: string;
      excerpt: string;
      author: { picture: string; name: string };
    }
  ];
  setActiveTab: (value: string) => void;
  activeTab: string;
}> = ({ morePost, setActiveTab, activeTab }) => {
  return (
    <section
      onMouseOver={() => {
        setActiveTab('My Blog');
      }}
      className='mx-auto my-0  max-w-[1200px] px-4 py-20 md:px-0'
      id='My Blog'
    >
      <p className=' w-full text-center text-lg font-bold text-white md:text-5xl'>
        BLOG
      </p>
      <h1 className='text-primary-400 w-full py-4 pb-16  text-center md:text-5xl'>
        Recent From Blog
      </h1>
      {morePost?.length > 2 && (
        <div className='flex flex-col items-center gap-10 py-8 lg:flex-row '>
          {morePost.slice(3, 6).map((blog, i) => {
            return (
              <div
                data-aos='flip-right'
                data-aos-delay={`${i * 300}`}
                key={i}
                className='max-h-[600px] rounded  bg-[#0f0f0f] bg-opacity-70 text-white shadow-xl'
              >
                <img
                  src={blog.coverImage}
                  alt=''
                  className='h-[250px] w-full rounded rounded-b-[0px] object-cover object-center'
                />
                <div className='py-8'>
                  <div className='flex w-full items-center justify-between px-8  text-[12px]'>
                    <div className='flex items-center gap-1  font-bold text-gray-400'>
                      <FontAwesomeIcon
                        icon={faUser}
                        className='text-primary-600'
                        size='sm'
                      />
                      {blog.author.name}
                    </div>
                    <div className='flex items-center gap-1  font-bold text-gray-400'>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className='text-primary-600'
                        size='sm'
                      />
                      <DateFormater dateString={blog.date} />
                    </div>
                    <div className='text-primary-600 flex items-center gap-1  font-bold'>
                      <FontAwesomeIcon
                        icon={faComment}
                        color='text-primary-600'
                        size='sm'
                      />
                      0 COMMENTS
                    </div>
                  </div>
                  <h2 className='hover:text-primary-600 px-8 py-2  text-2xl font-[600] transition-all  hover:underline'>
                    <a href={`/blog/${blog.slug}`}>{blog.title}</a>
                  </h2>
                  <p className='px-8 py-2  text-lg text-gray-400'>
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
export default Blog;
