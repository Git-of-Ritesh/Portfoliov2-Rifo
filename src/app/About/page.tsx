"use client";
import React from "react";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center gap-12">
      <section className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl geist-font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-xl text-gray-600 geist-font">
          Hi! I'm Ritesh Pandey, a passionate Software Engineer and Designer
          based in Gurugram, Haryana, India. I love building beautiful,
          functional products that make a difference. My journey blends
          creativity and code, and I thrive on turning ideas into reality.
        </p>
      </section>
      <section className="max-w-2xl w-full">
        <h2 className="text-3xl geist-font-bold mb-2">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="bg-gray-200 rounded-full px-4 py-2 geist-font text-sm">
            React
          </span>
          <span className="bg-gray-200 rounded-full px-4 py-2 geist-font text-sm">
            Next.js
          </span>
          <span className="bg-gray-200 rounded-full px-4 py-2 geist-font text-sm">
            TypeScript
          </span>
          <span className="bg-gray-200 rounded-full px-4 py-2 geist-font text-sm">
            Node.js
          </span>
          <span className="bg-gray-200 rounded-full px-4 py-2 geist-font text-sm">
            UI/UX Design
          </span>
          <span className="bg-gray-200 rounded-full px-4 py-2 geist-font text-sm">
            Figma
          </span>
          <span className="bg-gray-200 rounded-full px-4 py-2 geist-font text-sm">
            MongoDB
          </span>
        </div>
      </section>
      <section className="max-w-2xl w-full">
        <h2 className="text-3xl geist-font-bold mb-2">Experience</h2>
        <div className="flex flex-col gap-4 mt-2">
          <div className="bg-white rounded-xl p-4 drop-shadow-md text-left">
            <h3 className="geist-font-bold text-xl">Webninjaz (Current)</h3>
            <p className="geist-font text-gray-600">Software Engineer</p>
            <p className="geist-font text-sm mt-1">
              Building modern web experiences and scalable products.
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 drop-shadow-md text-left">
            <h3 className="geist-font-bold text-xl">Freelance</h3>
            <p className="geist-font text-gray-600">
              Full Stack Developer & Designer
            </p>
            <p className="geist-font text-sm mt-1">
              Delivered multiple projects for startups and individuals.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-2xl w-full">
        <h2 className="text-3xl geist-font-bold mb-2">Contact</h2>
        <p className="geist-font text-lg">
          Let's connect!{" "}
          <a
            href="mailto:pvtriteshpandey02@gmail.com"
            className="text-blue-600 underline"
          >
            pvtriteshpandey02@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
