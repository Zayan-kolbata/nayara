"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["toilet1.jpg", "toilet2.jpg"];

function HygienicToilets() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Changed to 2.5 sec for smoother transition

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-8 px-6 sm:px-10 md:px-20 lg:px-32 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Image Section - Appears First on Mobile */}
      <div className="w-full md:w-1/2">
        <div className="border-2 border-yellow-500 p-2 inline-block overflow-hidden w-full rounded-md shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Luxury Hygienic Toilets"
              className="rounded-md w-full h-auto md:h-[350px] lg:h-[400px] object-cover aspect-[4/3] sm:aspect-[16/9] md:aspect-[3/2]"
              initial={{ opacity: 0, y: 20 }} // Better fade for mobile
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-left"
        initial={{ opacity: 0, x: -30 }} // Slide in from left on desktop
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-yellow-500 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide uppercase">
          Hygienic Toilets
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
          At <span className="font-semibold">Niara</span>, we believe that
          luxury extends beyond the bedroom. Our meticulously designed{" "}
          <span className="font-semibold">hygienic toilets</span> offer a
          sanctuary of cleanliness, comfort, and elegance.
        </p>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
          Each facility is equipped with{" "}
          <span className="font-semibold">
            premium fittings, touch-free sanitization, and eco-friendly
            amenities
          </span>
          , ensuring an unparalleled standard of hygiene.
        </p>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl mt-4 leading-relaxed">
          Our 24/7 maintenance service guarantees a pristine experience, making
          your stay truly indulgent and worry-free.
        </p>
      </motion.div>
    </section>
  );
}

export default HygienicToilets;
