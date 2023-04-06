import { useLoaderData } from "@remix-run/react"
import type { LoaderFunction } from "@remix-run/server-runtime"
import { json } from "@remix-run/server-runtime"
import invariant from "tiny-invariant"
import { getPostById } from "~/models/posts.server"

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params

  invariant(id, "Post ID is required")

  const post = await getPostById(id)

  return json({
    post
  })
}

// This would be the route for a single post
export default function PostsDetailRoute() {
  const { post } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>Post Detail</h1>

      <pre>
        <code>{JSON.stringify(post, null, 2)}</code>
      </pre>
    </div>
  )
}