'use client'

import React, { useState } from 'react'
import { SunMedium } from 'lucide-react';
import { MoonStar } from 'lucide-react';



const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <nav aria-label="Main navigation" className='p-5 flex justify-center items-center'>
            <ul className='flex gap-12'>
                <li><a href="/about" className='text-xl text-gray-600'>About</a></li>
                <li><a href="/work" className='text-xl text-gray-600'>Works</a></li>
                <li><a href="/contact" className='text-xl text-gray-600'>Contact</a></li>
            </ul>
            <div onClick={() => setDarkMode(!darkMode)} className='relative left-40 flex gap-8 p-4 border-1 border-[#E6E1E1] rounded-4xl bg-[#F1F1F1] cursor-pointer'>
                <div className={`absolute top-0 left-0 w-14 h-14 rounded-full bg-white z-10 transition-all duration-400 ease-in-out
                     ${darkMode ? 'translate-x-full ShadowLeft' : 'translate-x-0 ShadowRight'}`}></div>
                <SunMedium className='z-20 stroke-2' />
                <MoonStar className='z-20 stroke-2' />
            </div>
        </nav>
    )
}

export default Navbar