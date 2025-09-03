"use client";
import React from "react";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A personal portfolio to showcase my work, skills, and experience.",
    tags: ["Next.js", "React", "TailwindCSS"],
  },
  {
    title: "Task Manager App",
    slug: "task-manager-app",
    description:
      "A full-stack productivity app for managing daily tasks and goals.",
    tags: ["MERN", "TypeScript", "UI/UX"],
  },
  {
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A scalable e-commerce platform with modern UI and secure payments.",
    tags: ["Node.js", "MongoDB", "Stripe"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center px-6 py-16 md:py-24 gap-12">
      <h1 className="text-5xl md:text-6xl geist-font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/Projects/${project.slug}`}
            className="bg-white rounded-xl p-6 drop-shadow-md hover:drop-shadow-xl transition flex flex-col gap-3 text-left"
          >
            <h2 className="geist-font-bold text-2xl mb-1">{project.title}</h2>
            <p className="geist-font text-gray-600 mb-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 rounded-full px-3 py-1 text-xs geist-font"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="geist-font text-blue-600 mt-2 text-sm underline">
              View Details
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
