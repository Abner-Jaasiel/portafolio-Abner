"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
         <h1 className="text-white mb-4 text-lg text-5xl lg:text-6xl lg:leading-normal font-extrabold font-orbitron">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
 Abner Jaasiel Irias
  </span>
  <br></br> <span className="text-white mb-4 text-lg text-4xl lg:text-4xl ">
   <TypeAnimation
    sequence={[
      "Desarrollador Frontend",
      1000,
      "Desarrollador Backend",
      1000,
      "Desarrollador Multiplataforma",
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  /> 
  </span>

</h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-orbitron">
        Desarrollador FullStack
          </p>
          <div>
            <Link
              href="#projects"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Proyectos
            </Link>
          <Link href="https://es.linkedin.com/in/abner-jaasiel-irias-rodriguez-972008220" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
            Linkedin
          </Link>
          </div>


        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/perfil.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
