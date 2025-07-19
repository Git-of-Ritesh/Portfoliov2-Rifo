'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Copy, House, UserRound, PackageOpen, BookOpenText, AlignLeft } from 'lucide-react';
import MobileDropdown from "./MobileDropdown"


type NavItem = {
    id: string;
    icon: React.ReactNode;
}


const navItems: NavItem[] = [
    { id: "Home", icon: <House className="stroke-2" /> },
    { id: "About", icon: <UserRound className="stroke-2" /> },
    { id: "Projects", icon: <PackageOpen className="stroke-2" /> },
    { id: "Blogs", icon: <BookOpenText className="stroke-2" /> },
];


const Navbar = () => {

    const[mobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => setMobileMenuActive(prev => !prev);


    const [activeIndex, setActiveIndex] = useState<number>(0);
    const indicatorRef = useRef<HTMLDivElement>(null);
    const ButtonRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        const currentButton = ButtonRef.current[activeIndex];
        const indicator = indicatorRef.current

        if (currentButton && indicator) {
            const { offsetLeft } = currentButton;
            indicator.style.transform = `translateX(${offsetLeft}px)`;
        }
    }, [activeIndex]);



    return (
        <div className='flex justify-between items-center p-5 z-50 sticky top-0'>
            {/* Protfolio Name */}
            <div>
                <h2 className='text-3xl geist-font-bold'>Rifo</h2>
            </div>

            {/* Navbar links */}
            <div className='relative hidden md:flex items-center gap-10 bg-white rounded-xl py-3 px-6 drop-shadow-xl drop-shadow-gray-200'>
                <div
                    ref={indicatorRef}
                    className="absolute -left-4 top-1 w-14 h-10 p-3 z-10 bg-gray-100 rounded-xl transition-all duration-300"
                ></div>

                {navItems.map((item, index) => (
                    <button
                        key={item.id}
                        ref={el => { ButtonRef.current[index] = el; }}
                        onClick={() => setActiveIndex(index)}
                        className={`z-20 transition-colors cursor-pointer duration-200 ${activeIndex === index ? "text-black" : "text-gray-400"
                            }`}
                    >
                        {item.icon}
                    </button>
                ))}
            </div>

            {/* gmail copy option */}
            <div className='hidden  md:flex items-center py-3 px-4 bg-white rounded-xl gap-3 drop-shadow-xl drop-shadow-gray-200'>
                <h2 className='geist-font'>pvtriteshpandey02@gmail.com</h2>
                <div className='flex items-center p-1 border-1 border-gray-300 rounded-md bg-gray-50'>
                    <Copy className='w-4 h-4' />
                </div>
            </div>

            {/* menu for mobile */}
            <button 
            onClick={toggleMobileMenu}
            className='logo relative bg-white flex md:hidden lg:hidden gap-2 p-3 rounded-xl'>Menu<AlignLeft className='border-1 border-gray-500 rounded-md p-1 stroke-1 drop-shadow-gray-200 drop-shadow-xl' /></button>

            {mobileMenuActive && (
                <MobileDropdown />
            )}
            
        </div>
    )
}

export default Navbar