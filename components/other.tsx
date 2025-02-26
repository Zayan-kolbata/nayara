"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/dinninghall.jpg", // Ensure images are inside /public in Next.js
  "/reception.jpg",
  "/hall.jpg",
  "/reception2.jpg",
  "/dinninghLl2.jpg",
];

function Others() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-8 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center gap-10">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-yellow-500 text-xl md:text-2xl font-semibold tracking-wide uppercase">
          Luxurious Others at nayra
        </h2>
        <p className="text-gray-300 text-lg mt-4 leading-relaxed">
          Welcome to
          <span className="text-yellow-400 font-semibold">&nbsp;nayra</span>,
          where elegance meets tranquility. Nestled in the heart of a serene
          tropical paradise, our boutique resort offers an unparalleled
          experience of luxury and comfort.
        </p>
        <p className="text-gray-400 text-lg mt-4 leading-relaxed">
          Each of our meticulously designed suites and villas is a sanctuary of
          sophistication, featuring modern amenities, stunning oceanfront views,
          and personalized services that redefine hospitality. Whether you seek
          a peaceful retreat or a romantic getaway, nayra promises an
          unforgettable stay.
        </p>
        <p className="text-gray-500 text-lg mt-4 leading-relaxed">
          Indulge in world-class spa treatments, savor exquisite culinary
          delights, and immerse yourself in the warmth of our bespoke
          hospitality. Your dream escape awaits at nayra.
        </p>
      </div>

      {/* Right Image Section with Auto-Changing Images */}
      <div className="md:w-1/2 relative">
        <div className="border-2 border-yellow-500 p-2 inline-block overflow-hidden w-full aspect-[4/3] rounded-md shadow-lg">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Luxury Resort Room"
              className="rounded-md w-full h-full object-cover"
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Others;
