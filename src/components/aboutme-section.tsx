import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function AboutMeSection() {
  return (
    <div id="about" className="pb-10 pt-10 md:pb-10 lg:pb-10 lg:pt-10">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
        {/* Desktop: collage of images */}
        <div className="ml-10 relative mt-12 hidden lg:flex lg:w-1/2 lg:h-[600px]">
          <div className="absolute top-0 left-0 z-10">
            <Image
              src="/Washington.JPG"
              alt="Washington"
              width={500}
              height={300}
              className="shadow-lg rounded-xl"
            />
          </div>
          <div className="absolute top-50 left-35 z-40">
            <Image
              src="/Coffee.png"
              alt="Coffee"
              width={220}
              height={280}
              className="shadow-lg rounded-xl"
            />
          </div>
          <div className="absolute top-70 left-[-10px] z-30">
            <Image
              src="/NYC.png"
              alt="NYC"
              width={180}
              height={240}
              className="shadow-lg rounded-xl"
            />
          </div>
          <div className="absolute top-[300px] left-[340px] z-40">
            <Image
              src="/Outdoors.png"
              alt="Outdoors"
              width={180}
              height={240}
              className="shadow-lg rounded-xl"
            />
          </div>
          <div className="absolute top-[-50px] left-[-50px] z-40">
            <Image
              src="/Flowers.png"
              alt="Flowers"
              width={220}
              height={240}
              className="shadow-lg rounded-xl"
            />
          </div>
        </div>
        {/* Mobile: single image on top */}
        <div className="flex justify-center lg:hidden pt-10">
          <Image
            src="/Washington.JPG"
            alt="Washington"
            width={350}
            height={180}
            className="shadow-lg rounded-xl"
          />
        </div>
        {/* about */}
        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
          <h1 className="text-black mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
            About Me
          </h1>
          <p className="gradient-text mt-8 max-w-2xl text-pretty text-lg">
            Hi, my name is Esmeralda! I'm a rising senior majoring in Computer
            Science and Information Security. I have experience in full-stack
            development and aspire to be a Software Engineer. I also have an
            interest in the legal field and a desire to help my community, which
            led me to become a Spanish legal interpreter and translator.
          </p>
          <p className="gradient-text mt-8 max-w-2xl text-pretty text-lg">
            I love sunsets! They are one of my favorite things to photograph and
            they inspire me to appreciate the beauty in everyday moments. I also
            enjoy spending time outdoors and exloring new cafes whenever I get
            the chance.
          </p>
          {/* resume */}
          <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start pb-10">
            <Button asChild size="lg" className="px-5 text-base">
              <a
                href="https://drive.google.com/file/d/1DD3lrw5DpNGKqNlmZwPpYpnAOk6UedrG/view?usp=sharing"
                target="_blank"
                className="block"
              >
                <span className="text-nowrap">View Resume</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default AboutMeSection;
