import React from "react";
import { Separator } from "@radix-ui/react-separator";

function SkillsSection() {
  return (
    <div id="skills" className="flex items-center justify-center min-h-screen">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
        <div className="py-10 px-6 w-full">
          <h1 className="text-5xl font-bold text-center mb-10">Skills</h1>
          <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-8 min-h-[600px]">
            {/* Vertical line */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 z-50"
              style={{ transform: "translateX(-50%)" }}
            />
            {/* Horizontal line */}
            <div
              className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 z-50"
              style={{ transform: "translateY(-50%)" }}
            />

            {/* top left box */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-start justify-start p-10 w-full min-w-[340px] max-w-[500px] mx-auto">
              <h2 className="text-2xl font-bold mb-4 self-center">
                Programming Languages
              </h2>
              <p className="text-gray-700">
                JavaScript, TypeScript, Python, HTML, CSS, C++
              </p>
            </div>
            {/* top right box */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-start justify-start p-10 w-full min-w-[340px] max-w-[500px] mx-auto">
              <h2 className="text-2xl font-bold mb-4 self-center">
                Frameworks & Libraries
              </h2>
              <p className="text-gray-700">
                React, Node.js, Express, Next.js, Vite.js, Tailwind CSS,
                GraphQL, Three.js, PyTorch, Jest, Clerk
              </p>
            </div>
            {/* bottom left box */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-start justify-start p-10 w-full min-w-[340px] max-w-[500px] mx-auto">
              <h2 className="text-2xl font-bold mb-4 self-center">Databases</h2>
              <p className="text-gray-700">Supabase, Firebase, PostgreSQL</p>
            </div>
            {/* bottom right box */}
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-start justify-start p-10 w-full min-w-[340px] max-w-[500px] mx-auto">
              <h2 className="text-2xl font-bold mb-4 self-center">Tools</h2>
              <p className="text-gray-700">
                GitHub/Git, Figma, Postman, Insomnia, Docker, Rancher Desktop,
                VSCode
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default SkillsSection;
