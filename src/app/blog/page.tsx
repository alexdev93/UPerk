'use client'
import dynamic from "next/dynamic";
// Dynamically import the Blog component
const Blog = dynamic(() => import("@/components/blog"), {
  ssr: false, // Optional: Disable server-side rendering if needed
});

const Page = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export default Page;
