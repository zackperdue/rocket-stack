import { Link, Outlet, useLoaderData } from "@remix-run/react"
import type { LoaderFunction } from "@remix-run/server-runtime"
import { json } from "@remix-run/server-runtime"

export const loader: LoaderFunction = async () => {
  return json({
    navigation: [
      { label: "Create", href: "/posts/new" },
      { label: "List", href: "/posts" },
    ]
  })
}

// This is like the index page. 
// Notice the Outlet, renders everything prefixed with `posts`
// This is called a "layout" in Remix because it acts like a wrapper around the child routes
// It's a great place to put a header or footer that is common to all the child routes
export default function PostsRoute() {
  const { navigation } = useLoaderData<typeof loader>()
  return (
    <div>
      <h1>Posts</h1>
      <nav className="flex text-blue-500">
        {navigation.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="mr-2">{item.label}</Link>
        ))}
      </nav>

      <Outlet />
    </div>
  )
}