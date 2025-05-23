// src/app/case-studies/page.tsx
import React from "react";
import CaseStudies from "@/components/case-studies/CaseStudies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Your Company Name",
  description: "Explore our successful projects and client case studies",
  openGraph: {
    title: "Case Studies | Your Company Name",
    description: "Explore our successful projects and client case studies",
    url: "/case-studies",
  },
};

const CaseStudiesPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Case Studies
        </h1>
        <CaseStudies />
      </section>
    </main>
  );
};

export default CaseStudiesPage;
