"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { animate, stagger, createScope } from "animejs";

const experience = [
  {
    id: "1",
    imgUrl: "/Images/webninjaz_logo.jpeg",
    title: "Software Developer",
    company: "Webninjaz",
    duration: "July 2025 - November 2025",
    experience: "4 months",
    description: [
      "Developed and deployed scalable, high-performance web applications using React.js and Next.js, improving load times and SEO visibility through SSR (Server-Side Rendering) and SSG (Static Site Generation).",
      "Enhanced app load time by 25% through code-splitting and lazy loading.",
      "Built pixel-perfect, responsive UIs with reusable component libraries and modern design systems, enhancing maintainability and user experience across devices.",
      "Integrated REST APIs and third-party services, enabling dynamic data flows and real-time interactions for client projects.",
      "Implemented state management solutions using Context API and Redux, reducing code complexity and improving scalability.",
      "Collaborated in Agile sprint cycles, participated in code reviews, and contributed to continuous delivery pipelines for faster feature rollouts.",
    ],
  },

  {
    id: "2",
    imgUrl: "/Images/Novexus.jpeg",
    title: "Full Stack Developer Intern",
    company: "Novexus",
    duration: "July 2024 - November 2025",
    experience: "4 months",
    description: [
      "Developed a responsive full-stack web application that fetched and displayed recipes dynamically from external REST APIs, improving user engagement through interactive design and seamless data integration.",
      "Implemented dynamic DOM manipulation, animation effects, and interactive UI flows, increasing user engagement and retention by ~20%.",
      "Utilized React.js, Tailwind CSS, HTML5, and JavaScript (ES6+) to build fast, modular, and scalable interfaces with a clean design system.",
      "Collaborated within an Agile team environment, using Git for version control and participating in sprint reviews and stand-ups to deliver milestones efficiently.",
    ],
  },
];

export default function AboutPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const root = useRef<HTMLDivElement | null>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    // Initialize Anime.js scoped environment
    scope.current = createScope({ root }).add(() => {
      // no preset animation; will animate on click
    });

    return () => scope.current?.revert();
  }, []);

  const toggleJobDescription = (id: string) => {
    const nextId = openId === id ? null : id;
    const content = document.querySelector(
      `.desc-${id}`
    ) as HTMLDivElement | null;

    // Close previously open description first
    if (openId && openId !== id) {
      const prevContent = document.querySelector(
        `.desc-${openId}`
      ) as HTMLDivElement | null;
      if (prevContent) {
        animate(prevContent, {
          height: [prevContent.scrollHeight, 0],
          opacity: [1, 0],
          easing: "ease-in-out(3)",
          duration: 400,
        });
      }
    }

    // Now handle the one being toggled
    if (content) {
      if (openId === id) {
        // Closing current
        animate(content, {
          height: [content.scrollHeight, 0],
          opacity: [1, 0],
          easing: "ease-in-out(3)",
          duration: 400,
        });
      } else {
        // Opening new
        animate(content, {
          height: [0, content.scrollHeight],
          opacity: [0, 1],
          easing: "ease-in-out(3)",
          duration: 400,
        });
      }
    }

    // Finally, update the state
    setOpenId(nextId);
  };

  useEffect(() => {
    animate("h2, h3", {
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "ease-out(3)",
      delay: stagger(0.2),
    });
  }, []);

  return (
    <main className="w-full flex flex-col gap-15 px-5 md:px-100">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-7 md:gap-10 py-16 items-center">
        {/* Polaroids Section (Left) */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          {/* Front polaroid */}
          <div className="relative z-10 -rotate-3 shadow-2xl">
            <div className="bg-white rounded-3xl p-2 border-4 border-white drop-shadow-lg relative w-[220px] h-[220px] md:w-[340px] md:h-[340px]">
              <span className="absolute w-5 h-5 bg-gray-100 rounded-full top-4 left-4 border border-gray-200 z-20" />
              <Image
                src="/Images/ProfileImage.jpeg"
                alt="profile-polaroid"
                width={320}
                height={320}
                className="rounded-2xl object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Block (Right) */}
        <section className="flex-1 w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 geist-font-bold text-black">
            So... Ritesh who ?
          </h2>
          <div className="flex flex-col gap-7">
            <p className=" text-gray-800 mb-2 geist-font-bold text-sm md:text-lg">
              So, I’m from <span className="font-bold">Prayagraj</span>, a
              historic and culturally rich city in India, known for its
              spiritual heritage and the confluence of the{" "}
              <span className="font-bold">Ganga</span>,{" "}
              <span className="font-bold">Yamuna</span>, and{" "}
              <span className="font-bold">Saraswati</span> rivers — and mostly
              famous nowadays for <span className="font-bold">MAHAKUMBH</span>.
            </p>

            <p className=" text-gray-800 mb-2 geist-font-bold text-sm md:text-lg">
              My passion for coding began the day I realized how lines of code
              could bring ideas to life. Since then, I’ve been deeply engaged
              with computers — learning, experimenting, and constantly improving
              my craft as a developer.
            </p>

            <p className=" text-gray-800 mb-2 geist-font-bold text-sm md:text-lg">
              So, I completed my graduation in{" "}
              <span className="font-bold">Computer Science in 2025</span> and
              have been continuously improving my software development skills.
              But as I grew, I realized that software without thoughtful design
              and strong UX principlesisn’t truly great. That’s when I began
              exploring UI and UX to take my craft to the next level.
            </p>
          </div>
        </section>
      </div>

      {/* Professional Experience */}
      <section className="flex flex-col">
        <h3 className="text-2xl md:text-4xl font-bold mb-8 geist-font-bold text-black">
          Work Experience
        </h3>

        <div className="flex flex-col gap-4 md:gap-4">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col justify-between items-center bg-gray-100 border-1 border-gray-200 p-2 md:p-4 rounded-2xl "
            >
              <div className="flex w-full justify-between items-center gap-5">
                <div className="flex gap-5 justify-center items-center">
                  <div className="rounded-md p-1 bg-white w-fit h-fit">
                    <Image
                      src={exp.imgUrl}
                      alt="Webninjaz logo"
                      width={40}
                      height={80}
                    />
                  </div>

                  <span>
                    <p className="geist-font-bold flex items-center gap-1 md:gap-3 text-xs md:text-sm ">
                      {exp.title}{" "}
                      <span className="w-1 h-1 rounded-full bg-black"></span>
                      {exp.company}
                    </p>
                    <p className="geist-font-bold flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-xs md:text-sm text-gray-500">
                      <span>
                        {exp.duration}
                        {""}
                      </span>
                      <span className="w-1 h-1 hidden md:block rounded-full bg-black"></span>
                      <span>{exp.experience}</span>
                    </p>
                  </span>
                </div>

                <span
                  onClick={() => toggleJobDescription(exp.id)}
                  className="cursor-pointer flex justify-center items-center rounded-full p-1 md:border border-gray-300 hover:bg-gray-200 transition"
                >
                  {openId === exp.id ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>

              {/* Hidden Description */}
              <div
                className={`desc-${exp.id}`}
                style={{
                  height: 0,
                  overflow: "hidden",
                  opacity: 0,
                }}
              >
                <ul className="text-gray-700 text-sm mt-3 leading-relaxed geist-font list-disc pl-5 space-y-2">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((point, i) => <li key={i}>{point}</li>)
                  ) : (
                    <li>{exp.description}</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <h3 className="text-5xl md:text-4xl font-bold geist-font-bold text-black">
          My stuffs
        </h3>

        <p className="text-sm text-gray-800 mb-2 text-center geist-font-bold">
          Images clearifing that apart from the coding and coding session i have
          something more in my daily habits, this is my canvas that i am
          currently up to its upon you to guess from what i am doing in every
          pictures.
        </p>

        <div className="flex flex-col justify-center items-center md:flex-row gap-3">
          <Image
            className="p-2 bg-white rotate-2"
            src="/galleryImages/image1.jpeg"
            alt="myImages"
            width={300}
            height={100}
          />

          <Image
            className="p-2 bg-white -rotate-10"
            src="/galleryImages/image4.jpeg"
            alt="myImages"
            width={300}
            height={100}
          />

          <Image
            className=" p-2 bg-white rotate-6"
            src="/galleryImages/About_image.JPG"
            alt="myImages"
            width={300}
            height={100}
          />
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row gap-3 -mt-20">
          <Image
            className="p-2 bg-white -rotate-5"
            src="/galleryImages/image3.jpeg"
            alt="myImages"
            width={300}
            height={100}
          />

          <Image
            className="p-2 bg-white rotate-6"
            src="/galleryImages/image2.jpeg"
            alt="myImages"
            width={300}
            height={100}
          />

          <Image
            className=" p-2 bg-white -rotate-10"
            src="/galleryImages/image5.jpeg"
            alt="myImages"
            width={300}
            height={100}
          />
        </div>
      </section>
    </main>
  );
}
