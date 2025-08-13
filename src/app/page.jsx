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
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/image1.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl font-bold">
          Engineer <span className="font-normal">|</span> Musician <span className="font-normal">|</span> Gamer <span className="font-normal">|</span> Traveler
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          I&apos;m <span className="font-bold">Akhil S Nair</span>, a software engineer and CS master&apos;s student at UIC. I recently worked at Amazon Web Services on the Aurora Serverless Control Plane team, 
          tackling large-scale configuration management challenges. Beyond code, I bring the same creativity I use in music, gaming, and travel into building scalable, 
          innovative software solutions — blending logic, artistry, and curiosity.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a
              href="/Akhil_Resume.pdf"
              download
              className="flex items-center hover:bg-slate-600 justify-center p-4 rounded-lg ring-1 ring-black bg-black text-white"
            >
              <FaFileDownload className="mr-2" /> My Resume
            </a>
            <button className="p-4 rounded-lg ring-1 ring-black hover:bg-blue-50">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
