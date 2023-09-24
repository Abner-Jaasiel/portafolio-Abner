"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AIRemove",
    description: "Maintenance software (C# .NET)",
    image: "/images/projects/1.png",
    tag: ["All", "Windows"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/Projects/AIRemove/",
  },

  {
    id: 2,
    title: "LostFiles",
    description: "Deleted Files Recovery (C# .NET)",
    image: "/images/projects/3.png",
    tag: ["All", "Windows"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/Projects/lostfiles/",
  },
  {
    id: 3,
    title: "Koffeets",
    description: "Koffeets app (Dart, Flutter)",
    image: "/images/projects/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/Projects/koffeets/",
  },
  {
    id: 4,
    title: "PictureFace",
    description: "Face recognition software (C# .NET)",
    image: "/images/projects/4.png",
    tag: ["All", "Windows"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/Projects/pictureface/",
  },
  {
    id: 5,
    title: "Ancikle website",
    description: "Ancikle.com (HTML, CSS, Javascript)",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/",
  },
  {
    id: 6,
    title: "AIRemove website",
    description: "Airemove.ancikle.com (HTML, Bootstrap, Javascript)",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://airemove.ancikle.com/",
  },
  {
    id: 7,
    title: "LostFiles website",
    description: "lostfiles.ancikle.com (HTML, Bootstrap, Javascript) - dev",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://lostfiles.ancikle.com/",
  },

  {
    id: 8,
    title: "DogeBrowser",
    description: "Internet browser (C# .NET)",
    image: "/images/projects/2.png",
    tag: ["All", "Windows"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/Projects/dogebrowser/",
  },
  {
    id: 9,
    title: "HackMode",
    description: "HackMode app (Lua) - deprecated",
    image: "/images/projects/9.png",
    tag: ["All", "Windows"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "CleanNeutron",
    description: "Maintenance software (Lua) - deprecated",
    image: "/images/projects/10.png",
    tag: ["All", "Windows"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/Projects/cleanneutron/",
  },


  {
    id: 11,
    title: "Help education website",
    description: "Ancikle.com/examples/helpeducation-web (HTML, CSS) - deprecated",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/examples/helpeducation-web/",
  },
  {
    id: 12,
    title: "Real estate website",
    description: "Ancikle.com/examples/realestate-web (HTML, CSS, Javascript) - dev",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ancikle.com/examples/realestate-web/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
        Proyectos
      </h2>
      <div className="text-white flex flex-row lg:justify-center lg:items-center  py-6 overflow-y-auto max-h-[600px] m">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Windows"
          isSelected={tag === "Windows"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 items-center justify-center">
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
