import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Cpu } from "lucide-react";

function ExperienceSection() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
        <div className="py-10 px-6 w-full">
          <h1 className="text-5xl font-bold text-center mb-10">Experiences</h1>
          <div className="relative mx-auto max-w-5xl">
            <ol className="border-l-4 border-black">
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-5 justify-center items-center w-10 h-10 bg-black rounded-full ring-4 ring-white">
                  <Cpu className="text-white size-5" />
                </span>
                <h3 className="font-semibold text-xl">
                  Software Engineer Intern - Liberty Mutual Insurance
                </h3>
                <span className="block text-base text-gray-500 mb-2">
                  Jun 2025 - Aug 2025
                </span>
                <p className="text-base text-gray-700">
                  Contributed to full-stack development of customer-facing applications using React, TypeScript, GraphQL, and Jest, following test-driven deployment principles
                  and agile methodologies. Implemented recall functionality to re-engage customers with their insurance quotes, including edge-case handling and unit testing
                  to ensure reliability. Enhanced the Experiments Manager app, a platform that manages
                  user traffic across control and test groups to evaluate new features, by improving user experience and feature integrity. 
                  Resolved high-severity security vulnerabilities and verified builds through Bamboo CI pipelines and GitHub Actions. Work supported
                  13 internal teams and is used daily by hundreds of customers, strengthening system reliability, security, and customer engagement.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-5 justify-center items-center w-10 h-10 bg-black rounded-full ring-4 ring-white">
                  <Cpu className="text-white size-5" />
                </span>
                <h3 className="font-semibold text-xl">
                  Software Development Fellow - CUNY Tech Prep
                </h3>
                <span className="block text-base text-gray-500 mb-2">
                  Jul 2024 - Jul 2025
                </span>
                <p className="text-base text-gray-700">
                  Developed full-stack applications focusing on front-end and
                  back-end technologies with React, Node.js, and JavaScript.
                  Adopted best practices like MVC architecture and test-driven
                  deployment. Collaborated in teams to design, develop, and
                  deploy apps while applying industry-standard processes.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-5 justify-center items-center w-10 h-10 bg-black rounded-full ring-4 ring-white">
                  <Cpu className="text-white size-5" />
                </span>
                <h3 className="font-semibold text-xl">
                  IOS Development Fellow - CodePath
                </h3>
                <span className="block text-base text-gray-500 mb-2">
                  Feb 2025 - May 2025
                </span>
                <p className="text-base text-gray-700">
                  Developed fully-functional apps using XCode and Swift. Built
                  engaging user interfaces, then connected the UI with logic
                  and cloud-based APIs to build complete iOS applications.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-5 justify-center items-center w-10 h-10 bg-black rounded-full ring-4 ring-white">
                  <Cpu className="text-white size-5" />
                </span>
                <h3 className="font-semibold text-xl">
                  IT Support Intern - Research Foundation for the City
                  University of New York
                </h3>
                <span className="block text-base text-gray-500 mb-2">
                  Dec 2024 - Mar 2025
                </span>
                <p className="text-base text-gray-700">
                  Assessed and identified technology needs, assisted with the
                  set up of computer equipment, and troubleshooted hardware and
                  software issues in collaboration with the Department of
                  Education Help Center. Monitored equipment for timely repairs,
                  and provided support for technology usage.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-5 justify-center items-center w-10 h-10 bg-black rounded-full ring-4 ring-white">
                  <Cpu className="text-white size-5" />
                </span>
                <h3 className="font-semibold text-xl">
                  Intermediate Cybersecurity Fellow - CodePath
                </h3>
                <span className="block text-base text-gray-500 mb-2">
                  Sep 2024 - Dec 2024
                </span>
                <p className="text-base text-gray-700">
                  Learned Blue Team defense concepts essential for effective
                  security operations. Hands-on experience in endpoint and
                  network monitoring using tools like SIEMs and HIDS to detect
                  vulnerabilities in endpoints, as well as packet sniffing and
                  deploying IDS/IPS systems for network defense.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-5 justify-center items-center w-10 h-10 bg-black rounded-full ring-4 ring-white">
                  <Cpu className="text-white size-5" />
                </span>
                <h3 className="font-semibold text-xl">
                  Beginner Cybersecurity Fellow - CodePath
                </h3>
                <span className="block text-base text-gray-500 mb-2">
                  Feb 2024 - May 2024
                </span>
                <p className="text-base text-gray-700">
                  Learned security principles and techniques, ranging from
                  system basics and access control to network exploitation and
                  malware detection. Equipped with practical skills in tools
                  like Linux command line, SSH, and Metasploit, along with a
                  grasp of essential topics in access control, data security,
                  and privacy management.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default ExperienceSection;
