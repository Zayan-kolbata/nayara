import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { GiFlowerPot } from "react-icons/gi";

function Box() {
  return (
    <section className="p-6 md:p-10 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* First Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 md:p-8 lg:p-10 rounded-xl shadow-[0_0_20px_#3b82f6] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_#3b82f6] backdrop-blur-lg backdrop-filter min-h-[200px] md:min-h-[250px] break-words">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-normal tracking-wide">
          Destination. <br /> Luxury. <br /> Respite.
        </h2>
        <p className="text-base md:text-lg mt-4 opacity-90">
          Find comfort, elegance, and tranquility in every stay.
        </p>
      </div>

      {/* Second Card */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 md:p-10 rounded-lg shadow-[0_0_20px_#9333ea] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_#9333ea] backdrop-blur-lg backdrop-filter">
        <AiTwotoneHeart className="text-red-500 text-3xl md:text-4xl mb-4 transition-all duration-300 hover:text-red-700 hover:scale-125 hover:rotate-12" />
        <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
          Your Grand Celebration
        </h3>
        <p className="text-base md:text-lg text-gray-300 mt-2">
          Experience elegance as we orchestrate your dream wedding with
          perfection.
        </p>
      </div>

      {/* Third Card */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8 md:p-10 rounded-lg shadow-[0_0_20px_#14b8a6] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_#14b8a6] backdrop-blur-lg backdrop-filter">
        <GiFlowerPot className="text-orange-700 text-3xl md:text-4xl mb-4 transition-all duration-300 hover:text-orange-900 hover:scale-125 hover:rotate-12" />
        <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
          Premium Hospitality
        </h3>
        <p className="text-base md:text-lg text-gray-300 mt-2">
          Immerse yourself in unparalleled comfort and world-class service.
        </p>
      </div>
    </section>
  );
}

export default Box;
