import { Form } from "@remix-run/react"
import type { ActionFunction } from "@remix-run/server-runtime"
import { redirect } from "@remix-run/server-runtime"
import { makePost } from "~/models/posts.server"

export const action: ActionFunction = async ({ request }) => {
  // implement post creation logic here
  const post = makePost(4)
  return redirect(`/posts/${post.id}`)
}

export default function PostsNewRoute() {
  return (
    <div>
      <Form method="post">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <button>Save</button>
      </Form>
    </div>
  )
}