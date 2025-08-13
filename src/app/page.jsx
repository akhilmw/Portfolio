"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa"; // Import the icon
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative flex-shrink-0">
          <Image 
            src="/image1.png" 
            alt="Akhil S Nair" 
            fill 
            className="object-contain p-4" 
            priority
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 sm:gap-8 items-center justify-center px-2 sm:px-4">
          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight">
            Engineer <span className="font-normal">|</span> Musician <span className="font-normal">|</span> Gamer <span className="font-normal">|</span> Traveler
          </h1>
          {/* DESC */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed max-w-2xl">
            I&apos;m <span className="font-bold">Akhil S Nair</span>, a software engineer and CS master&apos;s student at UIC. I recently worked at Amazon Web Services on the Aurora Serverless Control Plane team, 
            tackling large-scale configuration management challenges. Beyond code, I bring the same creativity I use in music, gaming, and travel into building scalable, 
            innovative software solutions — blending logic, artistry, and curiosity.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm sm:max-w-none justify-center items-center">
            <a
              href="/Akhil_Resume.pdf"
              download
              className="flex items-center justify-center p-3 sm:p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-slate-600 transition-colors duration-200 text-sm sm:text-base"
            >
              <FaFileDownload className="mr-2" /> My Resume
            </a>
            <button className="p-3 sm:p-4 rounded-lg ring-1 ring-black hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
