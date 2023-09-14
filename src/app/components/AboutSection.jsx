"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Información",
    id: "workgroup",
    content: (
      <ul className="list-disc pl-2">
         <li>Abner Jaasiel Irias Rodriguez</li>
         <li>Programador</li>
         <li>abner@ancikle.com - abnerjaasiel0@gmail.com</li>
         <li>Estoy viviendo en Honduras</li>
         <li>+504 9342-1492</li>
         <li>Disponible para oportunidades laborales</li>
        
      </ul>
    ),
  },
  {
    title: "Tecnologías",
    id: "Tecnologías",
    content: (
      <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>Dart</li>
          <li>Python</li>
          <li>C#</li>
         <li>React JS</li>
         <li>Flutter</li>
         <li>HTML</li>
         <li>CSS</li>
         <li>Tailwind</li>
         <li>Bootstrap</li>
         <li>Node JS</li> 
        <li>Express</li>
         <li>...</li>
      </ul>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("workgroup");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  const [expanded, setExpanded] = useState(false);
  const fullText = `Como Desarrollador FullStack, desde temprana edad he estado involucrado en el desarrollo de software para Windows, lo que me ha proporcionado una valiosa experiencia en el desarrollo de software. Comencé mi trayectoria como principiante utilizando un lenguaje llamado LUA, aunque posteriormente tomé la decisión de utilizar C#, con el cual desarrollé algunos programas destacados como AIRemove y LostFiles, entre otros.

  En la actualidad, mi enfoque se centra en el desarrollo web, y cuento con al menos 4 años de experiencia como desarrollador web freelance. He trabajado con tecnologías como React JS y Tailwind CSS en el front-end. En cuanto al backend, aunque soy relativamente nuevo en esta área, he demostrado una capacidad excepcional para aprender rápidamente y enfrentar desafíos, ofreciendo soluciones efectivas.

  Además, me destaco por mi capacidad para adquirir nuevos conocimientos de manera ágil y por ser una persona comprometida y responsable en el cumplimiento de mis obligaciones.`;

  const initialLines = fullText.split('\n').slice(0, 8).join('\n');
  const remainingLines = fullText.split('\n').slice(8).join('\n');

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };




  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="Description" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
       
        <h2 className="text-4xl font-bold text-white mb-4">Acerca de Abner Irias</h2>
      <p className={`text-base lg:text-lg ${expanded ? '' : 'line-clamp-6'}`}>
        {expanded ? fullText : initialLines}
      </p>
      {!expanded && (
        <button
          onClick={toggleExpanded}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Ver más...
        </button>
      )}
      {expanded && (
        <button
          onClick={toggleExpanded}
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Ver menos...
        </button>
      )}
 
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("workgroup")}
              active={tab === "workgroup"}
            >
              {" "}
              Información{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Tecnologías")}
              active={tab === "Tecnologías"}
            >
              {" "}
              Tecnologías{" "}
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
