"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Discord機器人 - 即時虛擬貓咪互動",
    description: "未添加說明",
    image: "/images/projects/1.png",
    tag: ["全部", "網頁"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "北科大PBL小車重製",
    description: "未添加說明",
    image: "/images/projects/2.png",
    tag: ["全部", "網頁"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "生活科技專題 - 擊劍比賽系統",
    description: "未添加說明",
    image: "/images/projects/3.png",
    tag: ["全部", "網頁"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "科展 - 基於AI影像分析的貓咪情緒辨識",
    description: "未添加說明",
    image: "/images/projects/4.png",
    tag: ["全部", "手機"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "個人網站 - 使用Next.js搭建的個人網站",
    description: "未添加說明",
    image: "/images/projects/5.png",
    tag: ["全部", "網頁"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "(未開發)",
    description: "未添加說明",
    image: "/images/projects/6.png",
    tag: ["全部", "網頁"],
    gitUrl: "/",
    previewUrl: "/",
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
          name="網頁"
          isSelected={tag === "網頁"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="手機"
          isSelected={tag === "手機"}
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
