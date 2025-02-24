import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Box from "@/components/Box";
import Accommodation from "@/components/Accomodation";
import HygienicToilets from "@/components/Hyginic";
import Footer from "@/components/Footer";
import Others from "@/components/other";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-auto md:h-[600px] text-white mt-24 md:mt-36 overflow-hidden">
        {/* Background Image */}
        <img
          src="/bedroom3.jpg"
          alt="Resort"
          className="w-full h-full md:h-[600px] object-cover min-h-[400px] max-w-[2200px]"
        />

        {/* Text Content */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-full text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase tracking-wide inline-block">
            STAY WITH COMFORT
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-14">
        <Box />
        <Accommodation />
        <HygienicToilets />
        <Others />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
