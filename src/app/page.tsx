"use client";

import { ArrowRight } from "lucide-react";
import Project1 from "./Components/Projects";
import SocialIcons from "./Components/socialIcons";
import { FileText, PersonStanding } from "lucide-react";
import Image from "next/image";

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
                  <Image
                    className="w-full"
                    src="/Images/webninjaz_logo.jpeg"
                    alt="Webninjaz logo"
                    width={70}
                    height={120}
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
