"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Discord機器人 - 即時虛擬貓咪互動",
    description: "一個基於discord.py製作的機器貓咪，串接Gemini API提供24h服務。",
    image: "/images/projects/1.png",
    tag: ["全部", "服務"],
    gitUrl: "https://github.com/yd-tw/Discord-TemplateBot",
    previewUrl: "https://github.com/yd-tw/Discord-TemplateBot",
  },
  {
    id: 2,
    title: "北科大PBL - 比賽小車重製",
    description: "改良我在北科大PBL時製作的車子，使其視覺辨識系統更加完善。",
    image: "/images/projects/2.png",
    tag: ["全部", "比賽"],
    gitUrl: "https://github.com/yd-tw/Arduino-Car",
    previewUrl: "https://github.com/yd-tw/Arduino-Car",
  },
  {
    id: 3,
    title: "生活科技專題 - 擊劍比賽系統",
    description: "一個Arduino的系統，包含無線收發、液晶顯示器、顏色感測器等多個部分。",
    image: "/images/projects/3.png",
    tag: ["全部", "專題"],
    gitUrl: "https://github.com/yd-tw/Arduino-Fencing",
    previewUrl: "https://github.com/yd-tw/Arduino-Fencing",
  },
  {
    id: 4,
    title: "科展 - 基於AI影像分析的貓咪情緒辨識",
    description: "分析提示工程對於影像辨識模型的差異，包含模態、語言、關鍵詞等提示詞差異對照。",
    image: "/images/projects/4.png",
    tag: ["全部", "比賽"],
    gitUrl: "/waitcreate",
    previewUrl: "/waitcreate",
  },
  {
    id: 5,
    title: "個人網站 - 使用Next.js搭建的個人網站",
    description: "基於React建立與部屬響應式網站，構建屬於自己的個人網頁，成果就是目前的這個網頁。",
    image: "/images/projects/5.png",
    tag: ["全部", "服務"],
    gitUrl: "https://github.com/yd-tw/KuangTi-website",
    previewUrl: "https://github.com/yd-tw/KuangTi-website",
  },
  {
    id: 6,
    title: "(手機軟體開發中...)",
    description: "敬請期待...。專案預計於6月釋出。",
    image: "/images/projects/6.png",
    tag: ["全部", "服務"],
    gitUrl: "/waitcreate",
    previewUrl: "/waitcreate",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("全部");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        我的專案
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="全部"
          isSelected={tag === "全部"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="比賽"
          isSelected={tag === "比賽"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="專題"
          isSelected={tag === "專題"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="服務"
          isSelected={tag === "服務"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
