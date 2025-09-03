"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Copy,
  House,
  UserRound,
  PackageOpen,
  BookOpenText,
  AlignLeft,
  X,
} from "lucide-react";
import MobileDropdown from "./MobileDropdown";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

// Lazy-load Lottie to keep initial JS small; only loads when the checkmark is shown
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false, loading: () => null }
);

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
  { id: "Blogs", path: "/Blogs", icon: <BookOpenText className="stroke-2" /> },
];

const Navbar = () => {
  const router = useRouter();

  const pathName = usePathname();

  const [copiedMail, setCopiedMail] = useState(false);
  const email = "pvtriteshpandey02@gmail.com";

  const handleCopyMail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedMail(true);
      setTimeout(() => setCopiedMail(false), 4000);
    });
  };

  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const toggleMobileMenu = () => setMobileMenuActive((prev) => !prev);

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
    <div className="flex justify-between items-center sticky top-0 md:static p-5 z-50">
      {/* Protfolio Name */}
      <div>
        <h2 className="text-3xl geist-font-bold">Rifo</h2>
      </div>

      {/* Navbar links */}
      <div className="relative hidden md:flex items-center gap-10 bg-white rounded-xl py-3 px-6 drop-shadow-xl drop-shadow-gray-200">
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

      {/* gmail copy option */}
      <button
        onClick={handleCopyMail}
        className="cursor-pointer hidden  md:flex items-center py-3 px-4 bg-white rounded-xl gap-3 drop-shadow-xl drop-shadow-gray-200"
        aria-label="Copy email to clipboard"
      >
        <h2 className="geist-font">pvtriteshpandey02@gmail.com</h2>
        {copiedMail ? (
          <div className="items-center w-7 h-7">
            <DotLottieReact
              className="-ml-6 -mt-1 w-18 h-9"
              src="/Assets/Done.lottie"
              loop={false}
              autoplay={copiedMail}
              speed={2}
            />
          </div>
        ) : (
          <div className="cursor-pointer flex items-center p-0 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 transition">
            <Copy className="stroke-0.6 p-1" />
          </div>
        )}
      </button>

      {/* menu for mobile */}
      {!mobileMenuActive ? (
        <button
          onClick={toggleMobileMenu}
          className="logo relative bg-white flex md:hidden lg:hidden gap-2 p-3 rounded-xl"
        >
          Menu
          <AlignLeft className="border-1 border-gray-500 rounded-md p-1 stroke-1 drop-shadow-gray-200 drop-shadow-xl" />
        </button>
      ) : (
        <button
          onClick={toggleMobileMenu}
          className={`logo relative transition-all duration-300 ${
            mobileMenuActive ? "rounded-3xl" : "rounded-none"
          } bg-white flex md:hidden lg:hidden gap-2 p-3`}
        >
          <X />
        </button>
      )}

      {mobileMenuActive && <MobileDropdown />}
    </div>
  );
};

export default Navbar;
