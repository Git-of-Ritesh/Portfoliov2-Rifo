"use client";
import React from "react";
import Image from "next/image";

const experience = [
  {
    id: "1",
    imgUrl: "./Images/webninjaz_logo.jpeg",
    title: "Software Developer",
    company: "Webninjaz",
    duration: "July 2025 - Present",
  },
  {
    id: "2",
    imgUrl: "./Images/Novexus.jpeg",
    title: "Full Stack Developer Intern",
    company: "Novexus Technologies",
    duration: "July 2024 - November 2025",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col gap-15 px-100">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-7 md:gap-10 py-16 items-center">
        {/* Polaroids Section (Left) */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          {/* Front polaroid */}
          <div className="relative z-10 -rotate-3 shadow-2xl">
            <div className="bg-white rounded-3xl p-2 border-4 border-white drop-shadow-lg relative w-[270px] h-[270px] md:w-[340px] md:h-[340px]">
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
          <h2 className="text-5xl md:text-4xl font-bold mb-10 geist-font-bold text-black">
            So... Ritesh who ?
          </h2>
          <div className="flex flex-col gap-7">
            <p className=" text-gray-800 mb-2 geist-font-bold">
              So, I’m from <span className="font-bold">Prayagraj</span>, a
              historic and culturally rich city in India, known for its
              spiritual heritage and the confluence of the{" "}
              <span className="font-bold">Ganga</span>,{" "}
              <span className="font-bold">Yamuna</span>, and{" "}
              <span className="font-bold">Saraswati</span> rivers — and mostly
              famous nowadays for <span className="font-bold">MAHAKUMBH</span>.
            </p>

            <p className=" text-gray-800 mb-2 geist-font-bold">
              My passion for coding began the day I realized how lines of code
              could bring ideas to life. Since then, I’ve been deeply engaged
              with computers — learning, experimenting, and constantly improving
              my craft as a developer.
            </p>

            <p className=" text-gray-800 mb-2 geist-font-bold">
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
        <h3 className="text-5xl md:text-4xl font-bold mb-8 geist-font-bold text-black">
          Work Experience
        </h3>

        <div className="flex flex-col gap-4">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between items-center bg-gray-100 border-1 border-gray-200 p-4 rounded-2xl "
            >
              <div className="flex justify-center items-center gap-5">
                <div className="rounded-md p-1 bg-white w-10">
                  <img
                    className="w-full"
                    src={exp.imgUrl}
                    alt="Webninjaz logo"
                  />
                </div>

                <span>
                  <p className="geist-font-bold flex justify-center items-center gap-3 text-md">
                    {exp.title}{" "}
                    <span className="w-1 h-1 rounded-full bg-black"></span>
                    {exp.company}
                  </p>
                  <p className="geist-font-bold text-gray-500">
                    {exp.duration}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <h3 className="text-5xl md:text-4xl font-bold geist-font-bold text-black">
          Part of me Doing stuffs
        </h3>

        <p className=" text-gray-800 mb-2 text-center geist-font-bold">
          Images clearifing that apart from the coding and coding session i have
          something more in my daily habits, this is my canvas that i am
          currently up to its upon you to guess from what i am doing in every
          pictures.
        </p>

        <div className="flex gap-3">
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

          <img
            className="w-80 h-100 p-2 bg-white rotate-6"
            src="/galleryImages/About_image.JPG"
            alt="myImages"
          />
        </div>

        <div className="flex gap-3 -mt-20">
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

          <img
            className="w-80 h-100 p-2 bg-white -rotate-10"
            src="/galleryImages/image5.jpeg"
            alt="myImages"
          />
        </div>
      </section>
    </main>
  );
}
