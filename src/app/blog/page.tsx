'use client';
import MoreStories from '@/components/Blog/MoreStories';
import { useEffect, useState } from 'react';

const BlogPage = () => {
  const [allPost, setPost] = useState<
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

  const Post = () => {
    fetch(`/api/allPosts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    }).then((res) =>
      res.json().then((data) => {
        setPost(data.post);
      })
    );
  };

  useEffect(() => {
    Post();
  }, []);

  return (
    <>
      <section className='fuchsia'>
        {!allPost ? (
          <h1>loading</h1>
        ) : (
          <>
            <MoreStories morePost={allPost} />
          </>
        )}
      </section>
    </>
  );
};
export default BlogPage;
