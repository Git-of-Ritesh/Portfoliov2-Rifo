import React from 'react'
import { Copy } from 'lucide-react';

type MenuLink = {
    id: string;
    URL: string;
}

const menuLinks: MenuLink[] = [
    {
        id: "Home",
        URL: "homeURL"
    },
    {
        id: "About",
        URL: "homeURL"
    },
    {
        id: "Projects",
        URL: "homeURL"
    },
    {
        id: "Blog",
        URL: "homeURL"
    }
];

const MobileDropdown = () => {
  return (
    <div className='absolute bg-white right-5 top-full -mt-2 p-5 flex flex-col gap-8 rounded-xl'>
                {menuLinks.map((items, index) => (
                    <a
                        key={index}
                        className='geist-font text-left text-4xl'
                    >
                        {items.id}
                    </a>
                ))}

                <div className='bg-black text-white p-5 flex gap-2 rounded-lg'>
                    pvtriteshpandey02@gmail.com
                    <div className='flex items-center p-1 border-1 border-gray-300 rounded-md'>
                        <Copy className='w-4 h-4' />
                    </div>
                </div>

            </div>
  )
}

export default MobileDropdown