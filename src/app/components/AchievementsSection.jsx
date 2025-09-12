"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users Reached",
    value: "100k",
  },
  {
    metric: "Hackathons",
    value: "3",
  },
  {
    metric: "Learning Journeys",
    value: "2 Years",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-gray-200 dark:sm:border-[#33353F] sm:border-2 rounded-2xl py-8 px-16 flex flex-col sm:flex-row items-center justify-between transition-all duration-300 bg-gray-50 dark:bg-transparent shadow-lg dark:shadow-none">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-gray-900 dark:text-white text-4xl font-bold flex flex-row transition-colors duration-300">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-gray-900 dark:text-white text-4xl font-bold transition-colors duration-300"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-gray-600 dark:text-[#ADB7BE] text-base transition-colors duration-300 font-medium">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
