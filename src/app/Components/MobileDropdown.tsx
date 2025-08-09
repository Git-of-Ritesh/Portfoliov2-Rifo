import React from "react";
import { Copy } from "lucide-react";
import Link from "next/link";

type MenuLink = {
  id: string;
  URL: string;
};

const menuLinks: MenuLink[] = [
  {
    id: "Home",
    URL: "/",
  },
  {
    id: "About",
    URL: "/About",
  },
  {
    id: "Projects",
    URL: "/Projects",
  },
  {
    id: "Blog",
    URL: "/Blogs",
  },
];

const MobileDropdown = () => {
  return (
    <div className="absolute bg-white right-5 top-full -mt-2 p-5 flex flex-col gap-8 rounded-xl">
      {menuLinks.map((items, index) => (
        <Link
          href={items.URL}
          prefetch
          key={index}
          className="geist-font text-left text-4xl"
        >
          {items.id}
        </Link>
      ))}

      <div className="bg-black text-white p-5 flex gap-2 rounded-lg">
        pvtriteshpandey02@gmail.com
        <div className="flex items-center p-1 border-1 border-gray-300 rounded-md">
          <Copy className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
