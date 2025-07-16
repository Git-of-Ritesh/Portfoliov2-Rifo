'use client'

import React from 'react';
import Image from 'next/image';
import { Send, ArrowUp } from 'lucide-react';
import LinkedinImage from "../Images/Linkedin.png"
import { StaticImageData } from 'next/image';
import ThreadsImage from "../Images/threads.png"
import GithubImage from "../Images/github.png"
import DribbleImage from "../Images/dribble.png"

type SocialDetails = {
  SocialImageURL: StaticImageData;
  SocialImageName: string;
  SocialLink: string;
}

const socials: SocialDetails[] = [
  // Linked in 
  {
    SocialImageURL: LinkedinImage,
    SocialImageName: "LinkedIn",
    SocialLink: "Linked url",
  },
  {
    SocialImageURL: ThreadsImage,
    SocialImageName: "Threads",
    SocialLink: "Linked url",
  },
  {
    SocialImageURL: GithubImage,
    SocialImageName: "Github",
    SocialLink: "Linked url",
  },
  {
    SocialImageURL: DribbleImage,
    SocialImageName: "Dribble",
    SocialLink: "Linked url",
  }
]


const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 rounded-3xl -mt-60 md:-mt-40 md:mx-4 md:my-6 p-10 md:p-16 text-white relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-4xl md:text-5xl cedarville-cursive-regular mb-2">Ritesh pandey 😊</h1>
          <h2 className="text-4xl md:text-5xl font-light mb-4">Lets Collaborate</h2>
          <p className="text-gray-300 text-sm md:text-md mb-8 max-w-md">
            I love turning ideas into real products with clean design and solid code. This is just a glimpse of what I can do.
          </p>
          <div className="flex items-center gap-3 text-lg">
            <span className='text-sm md:text-md'>Socials:</span>
            {socials.map((social) => (
              <a 
              key={social.SocialImageName}
              href="#" 
              className="flex items-center gap-1"><Image src={social.SocialImageURL} alt={social.SocialImageName} width={22} height={22} /></a>
            ))}
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-1 justify-start gap-8 md:justify-evenly md:gap-0 min-w-[250px]">
          <div>
            <h3 className="text-gray-400 mb-2">General</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Projects</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 mb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Download CV</a></li>
              <li><a href="#" className="hover:underline">UI/UX Design</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 min-w-[250px] flex flex-col items-center">
          <h3 className="flex items-center text-xl mb-2">HAVE SOMETHING IN MIND?</h3>
          <form className="flex items-center bg-neutral-800 rounded-xl px-4 py-2 w-full max-w-xs mb-8 border border-neutral-700">
            <input
              type="email"
              value="pvriteshpandey02@gmail.com"
              readOnly
              className="bg-transparent outline-none text-white flex-1 placeholder-gray-400"
            />
            <button type="submit" className="ml-2 p-2 rounded-lg bg-neutral-900 shadow-lg hover:bg-neutral-700 transition">
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
      {/* Up Arrow Floating Button */}
      <button
        className="absolute right-10 md:bottom-10 bottom-50 bg-white text-neutral-900 rounded-full p-2 md:p-4 shadow-lg hover:bg-gray-200 transition flex items-center justify-center"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-8 h-8" />
      </button>
    </footer>
  );
};

export default Footer;