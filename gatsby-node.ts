import axios from "axios"
import { Post } from "./src/utils/types/post"
import path from "path"

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }: any) => {
  const res = await axios.get("https://ileplaca-backend.vercel.app/posts")
  const posts = res.data

  posts.forEach((post: Post) => {
    const node = {
      title: post.title,
      description: post.description,
      user: post.user,
      id: createNodeId(`Post-${post.id}`),
      created_at: post.created_at,
      slug: post.slug,
      parent: null,
      children: [],
      internal: {
        type: "Post",
        contentDigest: createContentDigest(post),
        content: JSON.stringify(post)
      }
    }

    actions.createNode(node)
  })
}


exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query GetPostsTitle {
      allPost {
        nodes {
          slug
        }
      }
    }
  `)

  data.allPost.nodes.forEach(node => {
    actions.createPage({
      path: '/posts/'+ node.slug,
      component: path.resolve('./src/features/posts/post-details/post-details.tsx'),
      context: { slug: node.slug }
    })
  })
}