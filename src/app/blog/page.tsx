import Blog from "@/components/blog";
import { fetchFromStrapi } from "@/lib/api";
import { ArticleData } from "@/components/blog/types";

// ✅ App Router supports async Server Components
export default async function BlogPage() {
  let blogs: ArticleData[] = [];

  try {
    blogs = await fetchFromStrapi("blogs?populate=*");
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return <Blog initialBlogs={blogs} />;
}
