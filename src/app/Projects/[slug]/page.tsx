"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description:
      "A personal portfolio to showcase my work, skills, and experience.",
    details:
      "This project was built using Next.js, React, and TailwindCSS. It features a modern design, responsive layout, and smooth animations.",
    tags: ["Next.js", "React", "TailwindCSS"],
  },
  {
    title: "Task Manager App",
    slug: "task-manager-app",
    description:
      "A full-stack productivity app for managing daily tasks and goals.",
    details:
      "A MERN stack application with authentication, real-time updates, and a beautiful UI/UX.",
    tags: ["MERN", "TypeScript", "UI/UX"],
  },
  {
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description:
      "A scalable e-commerce platform with modern UI and secure payments.",
    details:
      "Built with Node.js, MongoDB, and Stripe integration for seamless payments.",
    tags: ["Node.js", "MongoDB", "Stripe"],
  },
];

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl geist-font-bold mb-4">Project Not Found</h1>
        <Link href="/Projects" className="text-blue-600 underline geist-font">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center px-6 py-16 md:py-24 gap-8">
      <h1 className="text-5xl md:text-6xl geist-font-bold mb-4">
        {project.title}
      </h1>
      <p className="geist-font text-gray-600 text-lg max-w-2xl mb-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 rounded-full px-3 py-1 text-xs geist-font"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="bg-white rounded-xl p-6 drop-shadow-md max-w-2xl text-left">
        <h2 className="geist-font-bold text-xl mb-2">Project Details</h2>
        <p className="geist-font text-gray-700">{project.details}</p>
      </div>
      <Link
        href="/Projects"
        className="text-blue-600 underline geist-font mt-6"
      >
        Back to Projects
      </Link>
    </main>
  );
}
