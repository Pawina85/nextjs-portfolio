"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  // State for hover animations
  const [isHovered, setIsHovered] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

  // Effect to restart typing animation on hover
  useEffect(() => {
    if (isHovered) {
      // Restart the typing animation by changing the key
      setAnimationKey(prev => prev + 1);
    }
  }, [isHovered]);

  // Auto-restart animation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.h1 
            className="bg-gradient-to-r from-green-800 to-green-600 text-transparent bg-clip-text mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold"
            animate={{
              scale: isHovered ? 1.02 : 1,
              textShadow: isHovered ? "0 0 20px rgba(34, 197, 94, 0.3)" : "none"
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-gray-900 dark:text-white transition-colors duration-300">Hi There, I&apos;m </span>
            <br></br>
            <TypeAnimation
              key={animationKey} // This restarts the animation when key changes
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
              speed={isHovered ? 80 : 50} // Faster animation on hover
              repeat={Infinity}
              style={{
                color: isHovered ? '#059669' : 'inherit',
                transition: 'color 0.3s ease'
              }}
            />
          </motion.h1>
          <motion.p 
            className="text-gray-700 dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl transition-colors duration-300"
            animate={{
              y: isHovered ? -5 : 0,
              opacity: isHovered ? 0.9 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            I&apos;m a frontend developer who turns designs into real,
            responsive, and sometimes magically animated websites.
          </motion.p>
          <motion.div
            animate={{
              y: isHovered ? -10 : 0
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
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
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <motion.div 
            className="rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#181818] dark:to-[#282828] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative transition-all duration-300 shadow-xl hover:shadow-2xl border-4 border-gray-200 dark:border-gray-700"
            animate={{
              scale: isImageHovered ? 1.05 : 1,
              rotate: isImageHovered ? 5 : 0,
              boxShadow: isImageHovered 
                ? "0 25px 50px -12px rgba(34, 197, 94, 0.25)" 
                : "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ 
              duration: 0.4,
              type: "spring",
              stiffness: 300
            }}
          >
            <motion.div
              animate={{
                scale: isImageHovered ? 1.1 : 1,
                rotate: isImageHovered ? -5 : 0
              }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/mypic1-P.png"
                alt="my pic"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                width={300}
                height={300}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
