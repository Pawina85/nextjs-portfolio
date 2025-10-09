"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="bg-gradient-to-r from-green-800 to-green-600 text-transparent bg-clip-text mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-gray-900 dark:text-white transition-colors duration-300">Hi There, I&apos;m </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Pawina",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Design System Lover",
                  1000,
                  "And love dog",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gray-700 dark:text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl transition-colors duration-300 max-w-md mx-auto lg:mx-0">
              I&apos;m a frontend developer who turns designs into real,
              responsive, and sometimes magically animated websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start">
              <Link
                href="/#contact"
                className="px-8 py-3 w-full sm:w-auto text-center rounded-full bg-gradient-to-br from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Hire Me
              </Link>
              <a
                href="/resume/Resume-Pawina.pdf"
                download="Resume-Pawina.pdf"
                className="px-2 py-2 w-full sm:w-auto rounded-full bg-gradient-to-br from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="block bg-white dark:bg-[#121212] hover:bg-gray-50 dark:hover:bg-slate-800 rounded-full px-6 py-2 text-gray-800 dark:text-white transition-colors duration-300 font-semibold text-center">
                  Download CV
                </span>
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Avatar Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-center items-center"
          >
            <div className="relative">
              <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#181818] dark:to-[#282828] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/projects/mypic.png"
                  alt="Pawina's profile picture"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 256px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
