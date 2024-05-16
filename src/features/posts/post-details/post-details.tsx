import { graphql } from 'gatsby';
import React, { FC } from 'react';
import { Post } from '../../../utils/types/post';
import Menu from '../../ui/menu';
import Footer from '../../ui/footer';
import { useImagesStore } from '../../../utils/zustand/images';


const PostDetails: FC = ({ data }: any) => {
  const post: Post = data.allPost.nodes[0]
  const { currentSrc } = useImagesStore();

  return (
    <main>
      <Menu />
      <div className='flex justify-center'>
        <div className='w-1/2 mt-12'>
          <div className='flex justify-center w-2/3 h-1/2'>
            <img loading='lazy' className='object-cover w-full h-full rounded-3xl' src={currentSrc} />
          </div>
          <div className='mt-4'>
            <div className='font-light'>
              {String(post.created_at).substring(0, 10)}
            </div>
            <h1 className='text-3xl'>
              {post.title}
            </h1>
            <p className='text-lg'>
              {post.description}
            </p>
            <h2 className='text-xl'>
              {post.user.username}
            </h2>
          </div>
        </div>
      </div>
      <div className='mt-48'></div>
      <Footer />
    </main>
  )
}

export default PostDetails;

export const query = graphql`
  query PostDetails($slug: String) {
    allPost(filter: {slug: {eq: $slug}}) {
      nodes {
        description
        title
        id
        created_at
          user {
          created_at
          email
          roles
          username
          id
        }
      }
    }
  }
`