import React from "react";
import Image from "next/image";
import ProfileImage from '@/app/Images/Profile.jpg'
import Social from './Components/Social'
import ProjectImage11 from '@/app/Assets/WhatsApp Image 2025-05-24 at 12.16.10.jpeg'
import { Pyramid, Gift, Handshake, BadgeCheck } from 'lucide-react';
import Avtar1 from '@/app/Images/avtar1.png'
import Avtar2 from '@/app/Images/avtar2.png'
import Avtar3 from '@/app/Images/avtar3.png'


export default function Home() {
  return (
    <div>

      {/* Hero sectio */}
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
          <span className="absolute w-3 h-0.5 bottom-[-5px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* bottom right border plus design */}
          <span className="absolute w-3 h-0.5 bottom-[-1px] right-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-1px] right-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-5px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* bottom left border plus design */}
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
                <div className="bg-black flex items-center justify-center w-24 py-2 rounded-4xl cursor-pointer text-white">Hire me</div>
                <div className="flex gap-3 items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <h3>Available to work</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder div for design */}
      <div className="mx-80 border-l-1 border-r-1 h-16 border-[#CFCFCF]"></div>


      {/* Qute section */}
      <div className="">
        <div className="mx-80 bg-white relative border-1 p-3 border-[#CFCFCF] bg-dotted-grid">

          {/* left border design */}
          <span className="absolute w-3 h-0.5 top-[-5px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-1px] left-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* right border design */}
          <span className="absolute w-3 h-0.5 top-[-5px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-1px] right-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* bottom left border design */}
          <span className="absolute w-3 h-0.5 bottom-[-5px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-1px] left-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* bottom right border design */}
          <span className="absolute w-3 h-0.5 bottom-[-5px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-1px] right-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>


          <div className="flex flex-col mx-18 my-70 gap-5">
            <h1 className="text-3xl font-bold text-center">Pixel-perfect interfaces, performance-obsessed.Delivering smooth experiences across every device.</h1>
          </div>

        </div>
      </div>

      {/* Placeholder div for design */}
      <div className="mx-80 border-l-1 border-r-1 h-16 border-[#CFCFCF]"></div>

      {/* Selected work section */}
      <div className="border-t-1 border-[#CFCFCF]">
        <div className="mx-80 relative border-l-1 border-r-1 border-b-1 border-[#CFCFCF]">
          {/* Top right border plus design */}
          <span className="absolute w-3 h-0.5 top-[-1px] right-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-1px] right-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-5px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* top left border plus design */}
          <span className="absolute w-3 h-0.5 top-[-1px] left-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-1px] left-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-5px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          <div className="py-20 text-3xl font-bold text-center">Selected Works/-</div>
          <div className="flex relative border-t-1 border-[#CFCFCF]">

            {/* top right border design */}
            <span className="absolute w-3 h-0.5 top-[-5px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>
            <span className="absolute w-3 h-0.5 top-[-1px] right-[0px] bg-[#8A8A8A]"></span>
            <span className="absolute w-3 h-0.5 top-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>

            {/* top left border design */}
            <span className="absolute w-3 h-0.5 top-[-5px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>
            <span className="absolute w-3 h-0.5 top-[-1px] left-[0px] bg-[#8A8A8A]"></span>
            <span className="absolute w-3 h-0.5 top-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

            {/* bottom left border design */}
            <span className="absolute w-3 h-0.5 bottom-[-5px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>
            <span className="absolute w-3 h-0.5 bottom-[-1px] left-[0px] bg-[#8A8A8A]"></span>
            <span className="absolute w-3 h-0.5 bottom-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

            {/* bottom right border design */}
            <span className="absolute w-3 h-0.5 bottom-[-5px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>
            <span className="absolute w-3 h-0.5 bottom-[-1px] right-[0px] bg-[#8A8A8A]"></span>
            <span className="absolute w-3 h-0.5 bottom-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>


            <div className="flex flex-col px-10 py-30 max-w-1/2 justify-between gap-8 ">
              <div className="px-4 py-2 bg-white rounded-xl border-1 border-[#DCDCDC]">NextGen Medicine Recommendation System using AI/ML</div>
              <div className="px-4 py-2 bg-white rounded-xl border-1 border-[#DCDCDC]">Notetify – Smart Note-Taking Web App</div>
              <div className="px-4 py-2 bg-white rounded-xl border-1 border-[#DCDCDC]">Food Recipe Finder Web App</div>
            </div>
            <div className="flex justify-center items-center w-1/2 border-l-1 border-[#CFCFCF] bg-black">
              <Image src={ProjectImage11} alt="Project image" />
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder div for design */}
      <div className="mx-80 border-l-1 border-r-1 h-16 border-[#CFCFCF]"></div>

      {/* Benifits section */}
      <div className="border-t-1 border-b-1 border-[#CFCFCF]">
        <div className="mx-80 relative border-l-1 border-r-1 border-b-1 border-[#CFCFCF] bg-dotted-grid">

          {/* Top right border plus design */}
          <span className="absolute w-3 h-0.5 top-[-1px] right-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-1px] right-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-5px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* top left border plus design */}
          <span className="absolute w-3 h-0.5 top-[-1px] left-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-1px] left-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 top-[-5px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>


          {/* bottom right border plus design */}
          <span className="absolute w-3 h-0.5 bottom-[-1px] right-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-1px] right-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[4px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-5px] right-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          {/* bottom left border plus design */}
          <span className="absolute w-3 h-0.5 bottom-[-1px] left-[-12px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-1px] left-[0px] bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[4px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>
          <span className="absolute w-3 h-0.5 bottom-[-5px] left-[-6px] rotate-90 bg-[#8A8A8A]"></span>

          <div className="px-38 py-20 flex flex-col gap-30 justify-center items-center">

            <div className="relative text-3xl font-bold text-center px-20">Share your ideas and you’ll get all benifits <Gift className="absolute bottom-1 left-100" /></div>

            <div className="flex flex-col gap-10 justify-center items-center">
              <div className="flex items-center border-1 gap-4 w-125 h-fit py-2 px-4 border-[#E5E5E5] bg-white rounded-2xl shadow-xl">
                <div className="border-1 border-[#C0BABA] w-fit h-fit p-1 bg-[#F3F3F3] rounded-3xl"><Pyramid className="stroke-1" /></div>
                <div className="flex flex-col">
                  <h1 className="text-md font-semibold">Tailored Solutions</h1>
                  <h2 className="text-sm tracking-tight">Custom-crafted interfaces designed for real-world impact.</h2>
                </div>
              </div>

              <div className="flex items-center border-1 gap-4 w-115 h-fit py-2 px-4 border-[#E5E5E5] bg-white rounded-2xl shadow-xl">
                <div className="border-1 border-[#C0BABA] w-fit h-fit p-1 bg-[#F3F3F3] rounded-3xl"><Handshake className="stroke-1" /></div>
                <div className="flex flex-col">
                  <h1 className="text-md font-semibold">Colaborative Approach</h1>
                  <h2 className="text-sm tracking-tight">Built through collaboration — shaped by ideas, refined by teamwork.</h2>
                </div>
              </div>

              <div className="flex items-center border-1 gap-4 w-105 h-fit py-2 px-4 border-[#E5E5E5] bg-white rounded-2xl shadow-xl">
                <div className="border-1 border-[#C0BABA] w-fit h-fit p-1 bg-[#F3F3F3] rounded-3xl"><BadgeCheck className="stroke-1" /></div>
                <div className="flex flex-col">
                  <h1 className="text-md font-semibold">Proven Result</h1>
                  <h2 className="text-sm tracking-tight">Performance you can see, results you can measure.</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* How it Goes section */}
      <div>
        <div className="mx-80 relative border-l-1 border-r-1 border-[#CFCFCF]">

          <div className="px-30 py-15 flex flex-col justify-center items-center">
            <h3>How it Works</h3>
            <h1 className="text-3xl font-bold text-center px-20">A Serious about performance and Obsession with delivering value.</h1>
          </div>

          <div className="flex">
            <div className="max-w-1/2 flex flex-col gap-3 border-y-1 p-6 border-r-1 border-[#CFCFCF]">
              <div className="flex gap-3">
                <h1 className="text-xl font-bold">1</h1>
                <div>
                  <h1 className="text-xl font-bold">
                    Discovery
                  </h1>
                  <h2 className="text-gray-600">Digging deep to uncover user needs and product opportunities.</h2>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 justify-end">
                  <h3
                    className="text-xs p-2 rounded-l-xl rounded-b-xl bg-white border-1 border-[#D5D5D5] shadow-md">
                    Let’s figure out what the users really need.</h3>
                  <Image className="w-6 h-6" src={Avtar1} alt="avtar image" />
                </div>

                <div
                  className="flex items-center gap-2 justify-start">
                  <Image className="w-6 h-6" src={Avtar2} alt="avtar image" />
                  <h3 className="text-xs p-2 rounded-r-xl rounded-b-xl bg-white border-1 border-[#D5D5D5] shadow-md">Noted. I’ll also check where users drop off in the flow.
                  </h3>
                </div>

                <div
                  className="flex items-center gap-2 justify-end">
                  <h3 className="text-xs p-2 rounded-l-xl rounded-b-xl bg-white border-1 border-[#D5D5D5] shadow-md">On it. I’ll check the drop-off points.</h3>
                  <Image className="w-6 h-6" src={Avtar3} alt="avtar image" />
                </div>
              </div>
            </div>

            <div className="max-w-1/2 min-w-1/2 border-y-1 p-6 border-r-1 border-[#CFCFCF]">
              <div className="flex gap-3">
                <h1 className="text-xl font-bold">2</h1>
                <div>
                  <h1 className="text-xl font-bold">
                    Research
                  </h1>
                  <h2>Turning insights into actionable design direction.</h2>
                </div>
              </div>

              <div>
                <div></div>
              </div>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}
