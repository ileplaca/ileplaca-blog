import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from 'gatsby'
import PostList from "../features/posts/post-list"
import Menu from "../features/ui/menu"
import Footer  from "../features/ui/footer"
// test
const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  return (
    <main className=''>
      <Menu />
      <h1 className='py-10 text-5xl text-center'>
        Posts
      </h1>
      <PostList posts={data.allPost.nodes} images={data.allFile.edges} />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`query GetPosts {
  allPost {
    nodes {
      description
      title
      id
      slug
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

  allFile {
    edges {
      node {
        relativePath
        childImageSharp {
          fluid(maxWidth: 512, maxHeight: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`