"use client";

import {
  ArrowRight,
  ChevronsDown,
  Eye,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import Project1 from "./Components/Projects";
import SocialIcons from "./Components/socialIcons";
import { FileText, PersonStanding } from "lucide-react";

type CapabilityCard = {
  title: string;
  description: string;
  bgColor: string;
};

const cards: CapabilityCard[] = [
  {
    title: "User Experience and Product Design",
    description:
      "Enhance user interactions and product aesthetics for consumer apps, SaaS, and Enterprise products",
    bgColor: "#FCBDBD",
  },
  {
    title: "User Research & Usability Testing",
    description:
      "Cather insights to inform design decisions for diverse user groups with research and usability studies.",
    bgColor: "#FCD8BD",
  },
  {
    title: "Frontend Engineer",
    description:
      "A Engineer who know how to play with design and bring them in real-world, many of them know only design or code, but here’s me who do both.",
    bgColor: "#BDDCFC",
  },
  {
    title: "Full-stack JS Developer",
    description:
      "Fluent in Data Structures & Software Design with JS. Experienced in building full-stack apps (MERN).",
    bgColor: "#AEDEAE",
  },
];

const rotateCards: string[] = [
  "-rotate-5",
  "rotate-2 md:-rotate-1",
  "-rotate-2 md:rotate-2",
  "rotate-5",
];
const CardPlaceing: string[] = [
  "m-0",
  "md:-mt-8 -md-6",
  "mb-1 -mt-2 md:mt-0",
  "-mt-3 md:mt-10",
];

export default function Home() {
  const handleDownloadCSVButton = () => {
    const pdfLink = "Resume.pdf";
    const link = document.createElement("a");

    link.href = pdfLink;
    link.download = "RiteshResume.pdf";
    link.target = "_blank";
    link.rel = "noopenner norefferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-20 mt-8 md:mt-30 z-40">
      {/* Hero section */}
      <div className="flex flex-col pl-5 px-5 md:px-100 justify-center">
        <div className=" relative flex gap-4">
          <h1 className="text-2xl md:text-4xl font-semibold geist-font-bold">
            Welcone to Ritesh folio
          </h1>
        </div>

        <div className="flex flex-col mt-4 gap-8">
          <p className="geist-font-bold text-sm md:text-lg text-gray-700">
            Hey 👋 I’m Ritesh, a software developer and designer who believes
            good design starts with empathy. My work combines art, logic, and
            emotion — all shaped into code. Have a look at what I’ve been
            building. I’ve always loved creating things that make people smile —
            from small UI interactions to full-blown web apps.
          </p>

          <div className="flex flex-col gap-2">
            <h4 className="text-md geist-font-bold text-gray-500">
              Currently Working
            </h4>

            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-5">
                <div className="rounded-md p-1 bg-white w-10">
                  <img
                    className="w-full"
                    src="/images/webninjaz_logo.jpeg"
                    alt="Webninjaz logo"
                  />
                </div>

                <span>
                  <p className="geist-font-bold text-sm">Software Developer</p>
                  <p className="geist-font-bold text-sm text-gray-500">
                    Webninjaz Technologies
                  </p>
                </span>
              </div>
              <p className="geist-font-bold text-sm text-gray-500">
                July - Present
              </p>
            </div>
          </div>

          {/* socials */}
          <div className="w-fit">
            <SocialIcons />
          </div>

          <div className="w-full flex gap-2">
            <button
              onClick={handleDownloadCSVButton}
              className="bg-white flex justify-center items-center rounded-2xl px-6 py-3 md:px-10 md:py-3 geist-font-bold text-sm cursor-pointer"
            >
              Download CV
              <FileText className="w-6 h-4" />
            </button>

            <button
              onClick={handleDownloadCSVButton}
              className="bg-white flex justify-center items-center rounded-2xl px-6 py-3 md:px-10 md:py-3 geist-font-bold text-sm cursor-pointer"
            >
              More About Me
              <PersonStanding className="w-6 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Projexts sections */}
      <section className="flex px-5 md:px-100 flex-col">
        <div className="flex geist-font-bold text-xl md:text-4xl">
          Featured Projects
        </div>
        <Project1 />
        <button className="bg-white flex justify-center items-center rounded-2xl mt-10 px-6 py-3 md:px-10 md:py-3 geist-font-bold text-sm cursor-pointer">
          View More Projects
          <ArrowRight className="w-6 h-4" />
        </button>
      </section>
    </div>
  );
}
