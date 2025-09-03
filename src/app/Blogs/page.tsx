"use client";
import React from "react";
import Link from "next/link";

const blogs = [
  {
    title: "How I Built My Portfolio",
    slug: "how-i-built-my-portfolio",
    excerpt:
      "A behind-the-scenes look at the design and development of my personal site.",
    date: "2024-06-01",
  },
  {
    title: "Designing for Developers",
    slug: "designing-for-developers",
    excerpt:
      "Tips and tricks for making developer-focused UIs beautiful and usable.",
    date: "2024-05-20",
  },
  {
    title: "Productivity Tools I Love",
    slug: "productivity-tools-i-love",
    excerpt:
      "A roundup of my favorite tools for staying productive as a developer.",
    date: "2024-05-10",
  },
];

export default function BlogsPage() {
  return (
    <main className="flex flex-col items-center px-6 py-16 md:py-24 gap-12">
      <h1 className="text-5xl md:text-6xl geist-font-bold mb-4">Blog</h1>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/Blogs/${blog.slug}`}
            className="bg-white rounded-xl p-6 drop-shadow-md hover:drop-shadow-xl transition flex flex-col gap-2 text-left"
          >
            <h2 className="geist-font-bold text-2xl mb-1">{blog.title}</h2>
            <p className="geist-font text-gray-600 mb-1">{blog.excerpt}</p>
            <span className="geist-font text-xs text-gray-400">
              {blog.date}
            </span>
            <span className="geist-font text-blue-600 mt-2 text-sm underline">
              Read More
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
