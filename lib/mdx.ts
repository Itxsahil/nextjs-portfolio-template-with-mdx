import fs from "node:fs/promises";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";


export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), `blog-contents/${slug}.mdx`),
      "utf-8"
    );
    return singleBlog;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
};


export const getAllBlogs = async () => {
  try {
    const files = await fs.readdir(path.join(process.cwd(), "blog-contents"));
    const allBlogs = await Promise.all(
      files.map(async (filename) => {
        const slug = filename.replace(".mdx", "");
        const frontmatter = await getOnlyFrontMatter(slug);
        return {
          slug,
          ...frontmatter,
        };
      })
    )
    return allBlogs;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
};

export const getOnlyFrontMatter = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), `blog-contents/${slug}.mdx`),
      "utf-8"
    );
    const { frontmatter } = await compileMDX<{ 
      title: string, 
      description: string
      date: string,
      tags: string
    }>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    })
    return frontmatter
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
};