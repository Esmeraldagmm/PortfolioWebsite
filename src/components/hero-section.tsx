import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import NavBar from "@/components/NavBar";

function HeroSection() {
  return (
    <>
      {/* include NavBar component */}
      <NavBar />
      <div className="pb-0 pt-12 md:pb-0 lg:pb-35 lg:pt-44">
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
          {/* mobile setup*/}
          <div className="flex justify-center lg:hidden pt-10">
            <Image
              src="/Headshot.png"
              alt="Headshot"
              width={300}
              height={250}
              className="rounded-full object-cover border-4 border-accent-foreground shadow-lg"
            />
          </div>
          {/* desktop setup */}
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="text-black mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
              Esmeralda Gonzalez Menera
            </h1>
            <p className="gradient-text mt-8 max-w-2xl text-pretty text-lg">
              Computer Science and Information Security student at John Jay
              College of Criminal Justice, focused on full-stack development
            </p>

            <div className="mt-12 flex flex-row items-center justify-center gap-2 lg:justify-start">
              {/* github */}
              <a
                href="https://github.com/Esmeraldagmm"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl p-2 transition duration-200 hover:bg-gray-100"
              >
                <FaGithub className="text-[3rem] text-black group-hover:text-gray-600 transition-colors duration-200" />
              </a>
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/esmeraldagm/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl p-2 transition duration-200 hover:bg-gray-100"
              >
                <FaLinkedin className="text-[3rem] text-black group-hover:text-gray-600 transition-colors duration-200" />
              </a>
              {/* email */}
              <a
                href="mailto:esmeraldamenera27@gmail.com"
                className="group rounded-xl p-2 transition duration-200 hover:bg-gray-100"
              >
                <MdEmail className="text-[3rem] text-black group-hover:text-gray-600 transition-colors duration-200" />
              </a>
            </div>
          </div>
          <div className="relative mt-12 hidden lg:flex lg:items-center lg:justify-end lg:w-1/2">
            <Image
              src="/Headshot.png"
              alt="Headshot"
              width={450}
              height={250}
              className="rounded-full object-cover border-4 border-accent-foreground shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
