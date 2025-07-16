import React from "react";
import Image from "next/image";
import { ArrowRight, ChevronsDown, Eye, Heart, ArrowUpRight } from 'lucide-react';
import ProfilePhoto from "./Images/IMG_3990 2.jpeg"
import Project1 from "./Components/Projects"
import Footer from "./Components/Footer"

type CapabilityCard = {
  title: string;
  description: string;
  bgColor: string;
}

const cards: CapabilityCard[] = [
  {
    title: "User Experience and Product Design",
    description: "Enhance user interactions and product aesthetics for consumer apps, SaaS, and Enterprise products",
    bgColor: "#FCBDBD",
  },
  {
    title: "User Research & Usability Testing",
    description: "Cather insights to inform design decisions for diverse user groups with research and usability studies.",
    bgColor: "#FCD8BD",
  },
  {
    title: "Frontend Engineer",
    description: "A Engineer who know how to play with design and bring them in real-world, many of them know only design or code, but here’s me who do both.",
    bgColor: "#BDDCFC",
  },
  {
    title: "Full-stack JS Developer",
    description: "Fluent in Data Structures & Software Design with JS. Experienced in building full-stack apps (MERN).",
    bgColor: "#AEDEAE"
  }
]

const rotateCards: string[] = ['-rotate-5', '-rotate-1', 'rotate-2', 'rotate-5'];
const CardPlaceing: string[] = ['m-0', '-mt-8', 'mb-1', 'mt-8']


export default function Home() {
  return (
    <div className="flex flex-col gap-80 mt-40 md:mt-50 z-40">

      <div className="flex flex-col pl-5 md:pl-20 justify-center">
        <div className=" relative flex gap-4">
          <h1 className="text-3xl md:text-6xl font-semibold geist-font-bold">Hi, I am</h1>
          <h1 className="realtive cedarville-cursive-regular text-3xl md:text-6xl">Ritesh</h1>
          {/* <video
            className="w-30 h-30 md:w-50 md:h-30 -top-10 left-24 md:-top-8 md:left-50 object-contain absolute"
            src='/Circle.webm'
            autoPlay
            muted
            playsInline
          /> */}
          <Image
            width={110}
            height={110}
            src={ProfilePhoto}
            alt="ProfilePhoto"
            className="absolute -top-28 left-48 md:-top-25 md:left-96 border-5 border-white rounded-3xl drop-shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-300" />
        </div>

        <div>
          <h2 className="text-3xl md:text-6xl font-semibold geist-font-bold">I am Software Engineer,</h2>
        </div>

        <div>
          <h2 className="text-3xl md:text-6xl font-semibold geist-font-bold">A developer who know both design </h2>
        </div>

        <div className="flex flex-col gap-2 md:gap-6">
          <h2 className="text-3xl md:text-6xl font-semibold geist-font-bold">and code.</h2>
          <h3 className="text-sm md:text-xl text-gray-500 geist-font">Currently Based in Gurugram, Haryana, India</h3>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-5 mt-3 md:mt-8">
          <div className="flex gap-3">
            <button className="flex justify-center items-center gap-4 bg-black rounded-2xl px-5 py-1 md:px-10 md:py-3 text-white geist-font text-sm md:text-xl">Learn More<ChevronsDown className="stroke-1 p-0.5 border-1 border-gray-400 bg-gray-800 rounded-md" /></button>
            <button className="bg-white rounded-2xl px-6 py-3 md:px-10 md:py-3 geist-font md:text-xl text-sm">Download CV</button>
          </div>
          <div className="flex gap-2"><Eye className="stroke-1" /><h3 className="geist-font text-gray-500">Peoples visited</h3><h3 className="geist-font">2,432</h3></div>
          <div className="flex gap-2"><Heart className="stroke-1" /><h3 className="geist-font text-gray-500">Likes</h3><h3 className="geist-font">932</h3></div>
        </div>
      </div>


      {/* cards sections */}
      <section>
        <div className="flex justify-center cedarville-cursive-regular text-5xl">Things i am capable of</div>
        <div className="flex justify-center text-center geist-font-bold px-80 mt-10 text-gray-600">Here’s a collection of things I’ve actually done — not just read about or watched tutorials for. From building full-stack apps to designing clean UIs that don’t hurt your eyes, I tend to get things working eventually. But hey, deadlines are sacred.</div>

        {/* cards Div */}
        <div className="flex justify-center mt-26">

          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col w-fit h-fit gap-10 p-7 rounded-2xl ${rotateCards[index]} ${CardPlaceing[index]} drop-shadow-2xl`}
              style={{ backgroundColor: card.bgColor }}
            >
              <h2 className="w-60 geist-font-bold-lineH text-2xl">{card.title}</h2>
              <h3 className="w-60 geist-font text-md text-gray-800" >{card.description}</h3>
              <button className="bg-transparent w-fit border-1 border-gray-100 p-1 rounded-3xl z-30 backdrop-blur-3xl"><ArrowUpRight className="text-white z-40" /></button>
            </div>
          ))}
        </div>
      </section>


      {/* Projexts sections */}
      <section className="flex flex-col">
        <div className="flex justify-center cedarville-cursive-regular text-5xl">Featured Projects</div>
        <div className="flex justify-center text-center geist-font-bold px-80 mt-10 text-gray-600">Proof I’ve Done More Than Just Watch Tutorials.</div>
        <Project1 />
        <button className="flex justify-center items-center gap-4 mt-30">See more projects<ArrowRight className='border-1 border-gray-400 rounded-md stroke-1' /></button>
      </section>

      {/* footer section */}
      <section>
        <Footer />
      </section>

    </div>
  );
}
