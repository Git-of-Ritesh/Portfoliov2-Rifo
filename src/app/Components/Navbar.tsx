"use client";

import React, { useRef, useEffect } from "react";
import { House, UserRound, PackageOpen } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type NavItem = {
  id: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { id: "/", path: "/", icon: <House className="stroke-2" /> },
  { id: "About", path: "/About", icon: <UserRound className="stroke-2" /> },
  {
    id: "Projects",
    path: "/Projects",
    icon: <PackageOpen className="stroke-2" />,
  },
  // { id: "Blogs", path: "/Blogs", icon: <BookOpenText className="stroke-2" /> },
];

const Navbar = () => {
  const router = useRouter();

  const pathName = usePathname();

  // Active nav indicator
  const activeIndex = navItems.findIndex((item) => item.path === pathName);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const ButtonRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const currentButton = ButtonRef.current[activeIndex];
    const indicator = indicatorRef.current;

    if (currentButton && indicator) {
      const { offsetLeft } = currentButton;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
    }
  }, [activeIndex]);

  // Proactively prefetch top-level routes so clicks feel instant
  useEffect(() => {
    navItems.forEach((item) => {
      try {
        router.prefetch?.(item.path);
      } catch (error) {
        console.log(error);
      }
    });
  }, [router]);

  return (
    <div className="flex justify-center items-center sticky top-0 p-5 z-50">
      {/* Navbar links */}
      <div className="relative flex items-center gap-10 bg-white rounded-xl py-3 px-6 drop-shadow-xl drop-shadow-gray-200">
        <div
          ref={indicatorRef}
          className="absolute -left-4 top-1 w-14 h-10 p-3 z-10 bg-gray-100 rounded-xl transition-all duration-300"
        ></div>

        {navItems.map((item, index) => (
          <Link
            key={item.id}
            href={item.path}
            prefetch
            ref={(el) => {
              ButtonRef.current[index] = el;
            }}
            aria-label={item.id}
            className={`z-20 transition-colors cursor-pointer duration-200 ${
              activeIndex === index ? "text-black" : "text-gray-400"
            }`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
