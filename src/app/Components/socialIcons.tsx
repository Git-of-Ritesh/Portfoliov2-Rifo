"use client";

import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="relative flex items-end gap-x-2 p-2">
      {/* Hidden SVG clip path definition */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>

      {/* Container background */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl" />

      {/* Social Icons */}
      <div className="relative flex items-end gap-x-2">
        {/* GitHub */}
        <a
          href="https://github.com/Git-of-Ritesh"
          target="_blank"
          rel="noopener noreferrer"
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ritesh-kumar-pandey-9b3296305/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>
        </a>

        {/* Dribble */}
        <a
          href="https://dribbble.com/UIbyraj"
          target="_blank"
          rel="noopener noreferrer"
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center shadow-lg border border-pink-400/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8 text-white"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.84 5.02a8.02 8.02 0 0 1 1.8 4.96c0 .21-.01.42-.03.63a15.06 15.06 0 0 0-5.79-.25 25.48 25.48 0 0 0-1.13-2.5c2.51-1.04 4.3-2.44 5.15-2.84zM12 4a8 8 0 0 1 5.04 1.76c-.78.52-2.36 1.46-4.49 2.25a23.73 23.73 0 0 0-2.16-3.31A7.93 7.93 0 0 1 12 4zM8.2 5.2a21.58 21.58 0 0 1 2.08 3.13c-2.55.77-5.54 1.06-6.72 1.1A8 8 0 0 1 8.2 5.2zM4.07 12c0-.14 0-.29.01-.43.91 0 4.73-.05 7.84-1.22.35.7.68 1.42.98 2.17a15.53 15.53 0 0 0-5.71 4.73A7.96 7.96 0 0 1 4.07 12zm3.64 5.91a13.63 13.63 0 0 1 5.26-4.4c.53 1.47.95 3.01 1.24 4.59a8.06 8.06 0 0 1-6.5-.19zm8.47.78c-.25-1.34-.61-2.65-1.07-3.91 1.76-.27 3.57-.19 5.41.26a8 8 0 0 1-4.34 3.65z" />
          </svg>
        </a>

        {/* Threads */}
        {/* Threads */}
        <a
          href="https://www.threads.com/@rajjj.pandeyy?igshid=NTc4MTIwNjQ2YQ=="
          target="_blank"
          rel="noopener noreferrer"
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-14 h-14 bg-gradient-to-br  from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-indigo-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
        >
          <svg
            aria-label="Threads"
            viewBox="0 0 192 192"
            fill="currentColor"
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
