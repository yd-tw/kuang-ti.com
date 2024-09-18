"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false },
);

const achievementsList = [
  {
    metric: "APCS",
    value: "4",
    postfix: "級",
  },
  {
    metric: "競賽獲獎",
    value: "10",
    postfix: "+",
  },
  {
    metric: "服務使用者",
    value: "50",
    postfix: "+",
  },
  {
    metric: "專案數量",
    value: "20",
    postfix: "+",
  },
  {
    metric: "社群追蹤數",
    value: "100",
    postfix: "+",
  },
];

export default function AchievementsSection() {
  return (
    <div className="px-4 py-8 sm:py-16 xl:gap-16 xl:px-16">
      <div className="flex flex-col items-center justify-between rounded-md px-16 py-8 sm:flex-row sm:border sm:border-[#33353F]">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="mx-4 my-4 flex flex-col items-center justify-center sm:my-0"
            >
              <h2 className="flex flex-row text-4xl font-bold text-white">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-4xl font-bold text-white"
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
              <p className="text-base text-[#ADB7BE]">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
