import { Link, useLoaderData } from "@remix-run/react"
import type { LoaderFunction } from "@remix-run/server-runtime"
import { json } from "@remix-run/server-runtime"
import type { Post } from "~/models/posts.server"
import { getAllPosts } from "~/models/posts.server"

// A normal user (non admin) can POST to this route to create a new post
export const action: LoaderFunction = async () => {
  // implement post creation logic here
  return json({})
}

export const loader: LoaderFunction = async () => {
  const posts = await getAllPosts()

  return json({
    posts
  })
}

export default function PostsIndexRoute() {
  const { posts } = useLoaderData<typeof loader>()

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}