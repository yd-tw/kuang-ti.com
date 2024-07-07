"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Score",
    id: "score",
    content: (
      <ul className="pl-2">
        <li>APCS 大學程式設計先修檢測 - 四級</li>
        <li>CPE 大學程式能力檢定 - 兩題(全國467名)</li>
        <li>111學年度 中和高中學習成就測驗 地理科 - 第一名</li>
      </ul>
    ),
  },
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="pl-2">
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
    title: "teams",
    id: "teams",
    content: (
      <ul className="pl-2">
        <li>中和高中FRC機器人校隊 - 程式組組長</li>
        <li>中和高中機器人社 - 活動長</li>
        <li>中和高中資訊研究社 - 社員</li>
        <li>CodeCat程式貓社群 - 計畫發起人</li>
        <li>APCS新創教育團隊 - 測試組組長</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("score");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white pt-24" id="tabinfo">
      <div className="flex flex-col text-left">
        <div className="flex flex-row text-base md:text-4xl justify-center">
          <TabButton
            selectTab={() => handleTabChange("score")}
            active={tab === "score"}
          >
            {" "}
            檢定成績{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            專業技能{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("teams")}
            active={tab === "teams"}
          >
            {" "}
            團隊參與{" "}
          </TabButton>
        </div>
        <div className="mt-8 text-xl md:text-2xl text-center">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
