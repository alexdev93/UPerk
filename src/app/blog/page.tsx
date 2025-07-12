import Blog from "@/components/blog";
import { fetchFromStrapi } from "@/lib/api";
import { ArticleData } from "@/components/blog/types";

// ✅ This is an async Server Component (App Router)
export default async function BlogPage() {
  let blogs: ArticleData[] = [];

  try {
    blogs = await fetchFromStrapi("blogs", {
      next: { revalidate: 60 }, // ISR enabled — revalidates every 60 seconds
    });
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return <Blog initialBlogs={blogs} />;
}
