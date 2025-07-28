import { getAllBlogs, getOnlyFrontMatter, getSingleBlog } from "@/lib/mdx"
import { Container } from "@/components/container"
import type { Metadata } from "next"
import { compileMDX } from "next-mdx-remote/rsc"
import { redirect } from "next/navigation"
import rehypePrettyCode from "rehype-pretty-code"

export async function generateStaticParams() {
  const blogs = await getAllBlogs()
  return blogs?.map((blog) => ({ slug: blog.slug })) || []
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const frontmatter = await getOnlyFrontMatter((await params).slug)
  if (!frontmatter) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }
  return {
    title: frontmatter.title + " - by Sahil Khan",
    description: frontmatter.description,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blogData = await getSingleBlog(slug)

  if (!blogData) {
    redirect(`/`)
  }


  const { content } = await compileMDX({
    source: blogData,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "tokyo-night",
            },
          ],
        ],
      },
    },
  })

  return (
    <Container>
      <article className="py-20 relative bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
        {/* Blog Content */}
        <div
          className="mx-auto prose dark:prose-invert
                     prose-h1:text-rose-500 dark:prose-h1:text-rose-500
                     prose-h2:text-rose-500 dark:prose-h2:text-rose-500
                     prose-h3:text-rose-500 dark:prose-h3:text-rose-500
                     prose-h4:text-rose-500 dark:prose-h4:text-rose-500
                     prose-h5:text-rose-500 dark:prose-h5:text-rose-500
                     prose-h6:text-rose-500 dark:prose-h6:text-rose-500
                     prose-a:text-rose-500 hover:prose-a:text-rose-600
                     dark:prose-a:text-rose-500 dark:hover:prose-a:text-rose-600
                     prose-strong:text-rose-500 dark:prose-strong:text-rose-500
                     prose-em:text-rose-500 dark:prose-em:text-rose-500
                     prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto
                     prose-blockquote:border-l-rose-500 dark:prose-blockquote:border-l-rose-500 prose-blockquote:text-neutral-700 dark:prose-blockquote:text-neutral-300
                     max-w-3xl px-4 sm:px-6 lg:px-8"
        >
          {content}
        </div>
      </article>
    </Container>
  )
}
