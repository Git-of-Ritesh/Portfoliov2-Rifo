import React from "react";
import Image from "next/image";
import ProfileImage from '@/app/Images/Profile.jpg'
import Social from './Components/Social'


export default function Home() {
  return (
    <div>
      <div className="border-b-1 border-[#CFCFCF]">
        <div className="mx-80 bg-white relative border-t-1 border-l-1 border-r-1 p-3 border-[#CFCFCF] bg-dotted-grid">
          {/* left border design */}
          <span className="absolute w-3 h-0.5 top-[-1px] left-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-1px] left-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* right border design */}
          <span className="absolute w-3 h-0.5 top-[-1px] right-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-1px] right-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* bottom right border design */}
          <span className="absolute w-3 h-0.5 bottom-[-1px] right-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-1px] right-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* bottom left border design */}
          <span className="absolute w-3 h-0.5 bottom-[-1px] left-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-1px] left-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          <div className="flex flex-col mx-18 my-44 gap-5">
            <div className="">
              <Image src={ProfileImage} alt="Profile Image" className="w-25 h-25 rounded-full border-5 border-[#E7E7E7]" />
            </div>
            <div className="flex flex-col gap-2 max-w-xl">
              <h1 className="text-3xl font-semibold tracking-tight">Hi, I’m Ritesh Pandey</h1>
              <p>I'm a <span className="font-bold text-lg">Frontend Developer</span> dedicated to creating engaging digital experiences. I focus on
                <span className="font-bold text-lg"> writing clean code, optimizing performance</span>, and <span className="font-bold text-lg">delivering UI</span> that feels effortless to use.</p>
              <Social />
              <div className="mt-5 flex gap-8">
                <div className="bg-black w-24 px-4 py-2 rounded-4xl cursor-pointer text-white">Hire me</div>
                <div className="flex gap-3 items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <h3>Available to work</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
