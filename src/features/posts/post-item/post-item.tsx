import React, { FC } from 'react';
import { Post } from '../../../utils/types/post';
import { Link } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import Img from 'gatsby-image'
import { useImagesStore } from '../../../utils/zustand/images';

interface PostItemProps {
  post: Post,
  image: FluidObject | FluidObject[]
}

const PostItem: FC<PostItemProps> = ({ post, image }) => {
  const { setCurrentSrc } = useImagesStore();
  const imageSrc = (image as { src: string }).src

  return (
    <article className='p-4 border rounded-3xl h-96' key={post.id}>
      <div className='w-full h-3/5'>
        <Img className='object-cover w-full h-full rounded-3xl' fluid={image} />
      </div>
      <div className='flex flex-col justify-between pl-2 h-2/5'>
        <div>
          <div className='mt-2 font-semibold text-gray-700'>
            Companies Salaries Statistics
          </div>
          <Link onClick={() => setCurrentSrc(imageSrc)} className='text-3xl font-light' to={`posts/${post.slug}`}>
            {post.title}
          </Link>
        </div>
        <div className='text-xl'>
          {post.user.username}
        </div>
      </div>
    </article>
  )
}

export default PostItem;