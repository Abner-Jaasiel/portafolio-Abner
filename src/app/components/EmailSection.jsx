import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";




const EmailSection = () => {
  
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
        Conectemos
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          La bandeja de entrada está siempre abierta. Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible para responderte!
        </p>
        <div className="socials flex flex-row gap-2 p-5 items-center">
          <p className="text-[#ADB7BE] mb-4 max-w-md text-center mt-2">Abner Jaasiel Irias</p>
          <Link href="https://github.com/Abner-Jaasiel">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://es.linkedin.com/in/abner-jaasiel-irias-rodriguez-972008220">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
       
        
      </div>
      <div className="z-10">
        <form className="flex flex-col" action="https://formsubmit.co/abnerjaasiel0@gmail.com" method="POST">
      
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>   
           <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Tu email
            </label>
            <input
              id="message"
              type="email" name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Name@google.com"
            />
          </div>
          
          <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium mb-7"
            >
              Mi email: abnerjaasiel0@gmail.com
            </label>
            
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
