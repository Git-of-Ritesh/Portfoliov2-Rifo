"use client";
import React from "react";
import Projects from "../Components/Projects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col pl-5 md:px-100 justify-center">
      <h1 className="text-3xl hi md:text-4xl font-semibold geist-font-bold">
        Projects
      </h1>
      <Projects />
    </main>
  );
}
