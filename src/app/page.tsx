import React from "react";
import Image from "next/image";
import ProfileImage from '@/app/Images/Profile.jpg'


export default function Home() {
  return (
    <div>
      <div className="mx-80 bg-white relative border-1 p-3 border-[#CFCFCF] bg-dotted-grid">
        <span className="absolute w-3 h-0.5 top-[-1px] left-[-12px] bg-[#8A8A8A]"></span>
        <span className="absolute w-3 h-0.5 top-[-1px] left-[0px] bg-[#8A8A8A]"></span>
        <span className="absolute w-3 h-0.5 top-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>
        <div className="flex flex-col mx-16 my-20 gap-5">
          <div className="">
            <Image src={ProfileImage} alt="Profile Image" className="w-25 h-25 rounded-full border-5 border-[#E7E7E7]" />
          </div>
          <div className="flex flex-col gap-2 max-w-xl">
            <h1 className="text-3xl font-semibold tracking-tight">Hi, I’m Ritesh Pandey</h1>
            <p>I'm a <span className="font-bold text-lg">Frontend Developer</span> dedicated to creating engaging digital experiences. I focus on
              <span className="font-bold text-lg"> writing clean code, optimizing performance</span>, and <span className="font-bold text-lg">delivering UI</span> that feels effortless to use.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
