"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { 
  CodeBracketIcon, 
  AcademicCapIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";
import { 
  FaNodeJs, 
  FaReact, 
  FaJs, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiExpress, 
  SiPostgresql, 
  SiSequelize 
} from "react-icons/si";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <button className="flex flex-col items-center justify-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-green-500 hover:scale-105 transition-all duration-300 group cursor-pointer">
          <FaNodeJs className="h-8 w-8 text-green-500 mb-2 group-hover:animate-pulse" />
          <span className="text-sm font-medium group-hover:text-green-400">Node.js</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-green-500 hover:scale-105 transition-all duration-300 group cursor-pointer">
          <SiExpress className="h-8 w-8 text-green-500 mb-2 group-hover:animate-pulse" />
          <span className="text-sm font-medium group-hover:text-green-400">Express</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-green-500 hover:scale-105 transition-all duration-300 group cursor-pointer">
          <SiPostgresql className="h-8 w-8 text-green-500 mb-2 group-hover:animate-pulse" />
          <span className="text-sm font-medium group-hover:text-green-400">PostgreSQL</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-green-500 hover:scale-105 transition-all duration-300 group cursor-pointer">
          <SiSequelize className="h-8 w-8 text-green-500 mb-2 group-hover:animate-pulse" />
          <span className="text-sm font-medium group-hover:text-green-400">Sequelize</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-green-500 hover:scale-105 transition-all duration-300 group cursor-pointer">
          <FaJs className="h-8 w-8 text-green-500 mb-2 group-hover:animate-pulse" />
          <span className="text-sm font-medium group-hover:text-green-400">JavaScript</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-green-500 hover:scale-105 transition-all duration-300 group cursor-pointer">
          <FaReact className="h-8 w-8 text-green-500 mb-2 group-hover:animate-pulse" />
          <span className="text-sm font-medium group-hover:text-green-400">React</span>
        </button>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-2">
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 group">
          <AcademicCapIcon className="h-5 w-5 text-green-500 mr-3 group-hover:animate-pulse" />
          <span className="group-hover:text-green-400">Fullstack Academy of Code</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 group">
          <AcademicCapIcon className="h-5 w-5 text-green-500 mr-3 group-hover:animate-pulse" />
          <span className="group-hover:text-green-400">University of California, Santa Cruz</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-2">
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 group">
          <TrophyIcon className="h-5 w-5 text-green-500 mr-3 group-hover:animate-pulse" />
          <span className="group-hover:text-green-400">AWS Cloud Practitioner</span>
        </li>
        <li className="flex items-center p-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 group">
          <TrophyIcon className="h-5 w-5 text-green-500 mr-3 group-hover:animate-pulse" />
          <span className="group-hover:text-green-400">Google Professional Cloud Developer</span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="grayscale hover:grayscale-0 hover:brightness-125 hover:contrast-110 hover:saturate-125 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:shadow-green-500/50 hover:hue-rotate-90 transition-all duration-500 ease-out transform">
          <Image 
            src="/images/projects/Recpic.png" 
            width={500} 
            height={500} 
            alt="Profile picture"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I specialize in React, Next.js, Tailwind CSS, and love turning
            designs into fast, functional websites that feel great to use. I
            bring a sharp eye for detail, a love for smooth UI animations, and a
            problem-solving mindset to every project. Whether it&apos;s building
            interfaces from scratch or collaborating across teams, I&apos;m all
            about creating things that work beautifully. Also: obsessed with
            good design, powered by caffeine, and occasionally lost in a sea of
            browser tabs.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
