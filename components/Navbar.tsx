"use client";

import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center border-b-2 border-b-amber-800 lg:px-14 md:px-8 px-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/image.png"
          alt="Nayra Hotel"
          width={50}
          height={50}
          priority
        />
        <h1 className="text-2xl font-bold">Nayra Hotel</h1>
      </div>

      {/* Navigation Links - Hidden on Small Screens */}
      <nav className="hidden md:flex gap-6">
        {["Explore", "Rooms", "About", "Dining"].map((item, index) => (
          <a
            key={index}
            href="#"
            className="relative text-white after:block after:content-[''] after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full px-4 py-2"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Book Now Button - Always Visible */}
      <button className="border border-white text-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-black">
        Book Now
      </button>
    </header>
  );
}

export default Navbar;
