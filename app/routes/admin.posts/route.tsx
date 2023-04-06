import { Outlet } from "@remix-run/react"
import type { ActionFunction } from "@remix-run/server-runtime"
import { json } from "@remix-run/server-runtime"

// POST create a new post
export const action: ActionFunction = async ({ request }) => {

  return json({})
}

const PostsAdminRoute = () => {
  return (
    <div>
      <h1>Posts Admin</h1>

      <Outlet />
    </div>
  )
}

export default PostsAdminRoute
