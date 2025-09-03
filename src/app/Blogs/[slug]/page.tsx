"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const blogs = [
  {
    title: "How I Built My Portfolio",
    slug: "how-i-built-my-portfolio",
    content:
      "This is a behind-the-scenes look at how I designed and developed my personal portfolio website using Next.js, React, and TailwindCSS. I cover design decisions, challenges, and lessons learned.",
    date: "2024-06-01",
  },
  {
    title: "Designing for Developers",
    slug: "designing-for-developers",
    content:
      "In this post, I share tips and tricks for making developer-focused UIs both beautiful and usable, drawing from real-world experience.",
    date: "2024-05-20",
  },
  {
    title: "Productivity Tools I Love",
    slug: "productivity-tools-i-love",
    content:
      "A roundup of my favorite tools for staying productive as a developer, including apps, browser extensions, and workflows.",
    date: "2024-05-10",
  },
];

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl geist-font-bold mb-4">Blog Not Found</h1>
        <Link href="/Blogs" className="text-blue-600 underline geist-font">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center px-6 py-16 md:py-24 gap-8">
      <h1 className="text-5xl md:text-6xl geist-font-bold mb-4">
        {blog.title}
      </h1>
      <span className="geist-font text-xs text-gray-400 mb-2">{blog.date}</span>
      <div className="bg-white rounded-xl p-6 drop-shadow-md max-w-2xl text-left">
        <p className="geist-font text-gray-700 text-lg">{blog.content}</p>
      </div>
      <Link href="/Blogs" className="text-blue-600 underline geist-font mt-6">
        Back to Blog
      </Link>
    </main>
  );
}
