import { Container } from "@/components/container"
import type { Metadata } from "next"
import { getAllBlogs } from "@/lib/mdx"
import { Link } from "next-view-transitions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export const metadata: Metadata = {
  title: "All Blogs - by Sahil Khan",
  description: "All my general wisdom",
}

export default async function BlogsPage() {
  const blogs = await getAllBlogs()

  return (
    <Container>
      <section className="py-20 relative bg-neutral-50 dark:bg-neutral-900 min-h-screen">
        <div className="flex flex-col items-center w-full px-2 sm:px-4 md:px-8 lg:px-16 mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-12 drop-shadow-sm dark:drop-shadow-lg text-center">
            All <span className="text-rose-500 dark:text-rose-500">Blogs</span>
          </h1>

          <div className="flex flex-col gap-6 w-full max-w-2xl">
            {blogs && blogs.length > 0 ? (
              blogs.map((blog, idx) => (
                <Link key={idx} href={`/b/${blog.slug}`} className="w-full">
                  <Card className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle>
                        {/* The Link is now the parent, so this is just text */}
                        <p className="text-rose-500 dark:text-rose-500">{blog.title}</p>
                      </CardTitle>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {blog?.date
                          ? new Date(blog?.date).toLocaleDateString("en-us", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "Date not available"}
                      </p>
                    </CardHeader>
                    {/* You can add a short description or excerpt here if your blog object includes it */}
                    {blog.description && (
                      <CardContent>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">{blog.description}</p>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              ))
            ) : (
              <p className="text-center text-neutral-600 dark:text-neutral-300 w-full">No blog posts found.</p>
            )}
          </div>
        </div>
      </section>
    </Container>
  )
}
