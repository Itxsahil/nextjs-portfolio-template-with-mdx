import { Container } from "@/components/container"
import Image from "next/image"
import { getAllBlogs } from "@/lib/mdx" // Assuming this function exists
import { Link } from "next-view-transitions" // Assuming next-view-transitions is used

export default async function Home() {
  const blogs = await getAllBlogs()
  const recentBlogs = blogs?.slice(0, 2) // Get the 2 most recent blogs

  // Placeholder data for projects as seen in the image
  const projects = [
    {
      icon: "/image copy 2.png?height=24&width=24", // Placeholder icon
      title: "Nebula Notes",
      description: "A collaborative note-taking app for teams and creatives.",
      link: "#",
    },
    {
      icon: "/image copy 2.png?height=24&width=24", // Placeholder icon
      title: "TaskForge",
      description: "Streamline your workflow with intuitive task automation.",
      link: "#",
    },
    {
      icon: "/image copy 2.png?height=24&width=24", // Placeholder icon
      title: "CodeQuill",
      description: "A markdown-based code documentation tool for developers.",
      link: "#",
    },
    {
      icon: "/image copy 2.png?height=24&width=24", // Placeholder icon
      title: "EcoTrack",
      description: "Track your carbon footprint and live sustainably.",
      link: "#",
    },
  ];


  return (
    <Container>
      <section className="py-25 px-8 relative bg-neutral-50 dark:bg-neutral-900 min-h-screen">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 mb-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-rose-500">Sahil Khan</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Building{" "}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
                next-router-express
              </span>
              ,{" "}
              other <span className="font-semibold">cool things</span>
            </p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-lg">
              Senior Software Engineer building SaaS products and web apps. Find me on{" "}
              <a href="https://x.com/sahilkhan_dev" className="text-rose-500 font-bold">
                twitter
              </a>{" "}
              for tech updates and memes.
            </p>
          </div>
          <div className="flex-shrink-0 mt-8 md:mt-0">
            <Image
              src="/image copy.png" // Using the provided image
              alt="Sahil Khan's Profile Picture"
              width={160}
              height={160}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Recent Blogs Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold mb-8 text-rose-500">Recent Blogs</h2>
          <div className="flex flex-col gap-4">
            {recentBlogs!.length > 0 ? (
              recentBlogs!.map((blog, index) => (
                <Link key={index} href={`/b/${blog.slug}`}>
                  <div className="flex items-center justify-between p-4 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer">
                    <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-100">
                      {blog.title || `Sample Blog Post #${index + 1}`}
                    </h3>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {blog?.date
                        ? new Date(blog?.date).toLocaleDateString("en-us", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                        : "Date not available"}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-neutral-600 dark:text-neutral-300">No recent blogs found.</p>
            )}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/b"
              className="text-rose-500 flex items-center justify-center gap-1"
            >
              See All Blogs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-8 text-rose-500">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects!.map((project, index) => (
              <a key={index} href={project.link} className="block">
                <div className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Image
                      src={project.icon || "/image copy 2.png"}
                      alt={`${project.title} icon`}
                      width={24}
                      height={24}
                      className="mr-3"
                    />
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">{project.title}</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Blurs - consistent with previous theme */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-rose-200 dark:bg-rose-400 opacity-30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-rose-100 dark:bg-rose-300 opacity-40 rounded-full blur-2xl -z-10" />
      </section>
    </Container>
  )
}
