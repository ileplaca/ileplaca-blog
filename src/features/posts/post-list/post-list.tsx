import React, { FC } from 'react';
import { Post } from '../../../utils/types/post';
import PostItem from '../post-item';
import { FluidObject } from 'gatsby-image';
import { useImagesStore } from '../../../utils/zustand/images';

export interface PostListProps {
  posts: Post[],
  images: { node: { childImageSharp: { fluid: FluidObject | FluidObject[] }, id: string } }[]
}

const PostList: FC<PostListProps> = ({ posts, images }) => {
  return (
    <div className='flex justify-center w-full'>
      <div className='grid w-full grid-cols-1 gap-8 p-2 xl:w-1/2 xl:grid-cols-2'>
        {
          posts.map(post => {
            const image = images[Math.floor(Math.random()*12)]
            return <PostItem key={post.id} post={post} image={image.node.childImageSharp.fluid} />
          })
        }
      </div>
    </div>
  )
}

export default PostList;