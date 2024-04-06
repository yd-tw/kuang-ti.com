"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Arduino程式設計</li>
        <li>FRC程式設計</li>
        <li>PID控制器設計</li>
        <li>AI影像分析</li>
        <li>競賽程式</li>
        <li>演算法分析</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>漳和國中</li>
        <li>中和高中</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>FRC</li>
        <li>程式貓</li>
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">關於我</h2>
          <p className="text-base lg:text-lg">
            從一接觸到程式開始，就十分喜愛這種自動化，虛實整合的魅力。相較於其他
            傳統領域，資訊科學是一門入門門檻較低的領域，也是最有發展潛力的領域。
            從國小我就開始自學，漸漸也確定了自己對這個領域的喜愛。
          </p>
          <p className="text-base lg:text-lg">
            相較於演算法等，我更加喜歡做前端、服務的類型。目前所有製作的內容都有發佈，像是
            discord的機器人、手機APP等。也期許在未來大學資工系的學習中，能夠更充實自己的
            程式設計基礎，並回頭來優化這些服務。
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              技能{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              教育{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              證書{" "}
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
