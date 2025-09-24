"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
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
          <p className="text-gray-700 dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl transition-colors duration-300">
            I&apos;m a frontend developer who turns designs into real,
            responsive, and sometimes magically animated websites.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </Link>
            <a
              href="/resume/Pawina_Resume.pdf"
              download="Pawina_Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white mt-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="block bg-white dark:bg-[#121212] hover:bg-gray-50 dark:hover:bg-slate-800 rounded-full px-5 py-2 text-gray-800 dark:text-white transition-colors duration-300 font-medium">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#181818] dark:to-[#282828] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative transition-all duration-300 shadow-xl hover:shadow-2xl border-4 border-gray-200 dark:border-gray-700">
            <Image
              src="/images/mypic1-P.png"
              alt="my pic"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
