import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

function ProjectSection() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
        <div className="py-10 px-6 w-full">
          <h1 className="text-5xl font-bold text-center mb-10">Projects</h1>
          {/* projects */}
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {[
                {
                  header: "Vera",
                  image: "/vera.png",
                  main: "A web app where users can upload or take photos of makeup products to receive a personalized ingredient analysis based on their skin type.",
                  sub: "React, TypeScript, Next.js, Tailwind CSS, Supabase",
                  link: "GitHub",
                },
                {
                  header: "VitalView",
                  image: "/vitalview.webp",
                  main: "A web app that enhances lung cancer detection by allowing users to upload CT scans for analysis. The AI model identifies cancerous regions and presents and interactive 3D model of the scan, making it easier for patients to understand the results.",
                  sub: "React, JavaScript, Next.js, Tailwind CSS, Three.js, PyTorch, OpenAI",
                  link: "https://github.com/Esmeraldagmm/vitalview",
                },
                {
                  header: "Aspire",
                  image: "/aspire.webp",
                  main: "Social habit-tracker featuring AI-driven coaching providing personalized insights tailored to unique habits, community support to encourage users to stay motivated on their growth journeys, and engaging heatmaps to visualize progress.",
                  sub: "React, Express.js, JavaScript, Tailwind CSS, PostgreSQL, Prisma, Supabase, OpenAI",
                  link: "https://github.com/JNikolo/Aspire",
                },
              ].map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-2/3 lg:basis-1/2 flex justify-center"
                >
                  <div className="p-4 w-full flex justify-center">
                    <Card className="w-full max-w-2xl min-h-[700px] flex flex-col justify-between">
                      <CardContent className="flex flex-col items-center w-full h-full p-12 flex-1">
                        <h2 className="text-2xl font-bold mb-4 text-center">
                          {item.header}
                        </h2>
                        <img
                          src={item.image}
                          alt={item.header}
                          className="w-40 h-40 object-cover rounded-xl mb-4"
                        />
                        <p className="text-lg text-center mb-2">{item.main}</p>
                        <p className="text-sm text-center text-gray-400 mb-6">
                          {item.sub}
                        </p>
                        <div className="flex-grow" />
                        <div className="flex flex-col items-center justify-end gap-2 w-full pb-10">
                          <Button
                            asChild
                            size="lg"
                            className="px-5 text-base w-full"
                          >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
