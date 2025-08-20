import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { MdEmail } from "react-icons/md";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import NavBar from "@/components/NavBar";

export default function HeroSection() {
  return (
    <>
      {/* include NavBar component */}
      <NavBar />

      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
              {/* mobile setup*/}
              <div className="flex justify-center lg:hidden pt-10">
                <Image
                  src="/Headshot.png"
                  alt="Headshot"
                  width={250}
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
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
