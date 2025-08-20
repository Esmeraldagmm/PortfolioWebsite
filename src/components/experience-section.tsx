import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Cpu } from "lucide-react";

function ExperienceSection() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
        <div className="py-10 px-6 w-full">
          <h1 className="text-5xl font-bold text-center mb-10">Experiences</h1>
          <div className="relative mx-auto grid max-w-6xl min-h-[600px] divide-x divide-y border *:p-16 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center">
            <div className="space-y-3 flex flex-col h-[260px] justify-center">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <h3 className="text-sm font-bold">
                  Software Engineer Intern - Liberty Mutual Insurance
                </h3>
              </div>
              <p className="text-sm font-medium">Jun 2025 - Aug 2025</p>
              <p className="text-sm">
                Contributing to backend development for customer-facing
                applications using GraphQL, TypeScript, and Jest. Wrote unit and
                integration test-driven development and documentation.
              </p>
            </div>
            <div className="space-y-2 flex flex-col h-[260px] justify-center">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <h3 className="text-sm font-bold">
                  Software Development Fellow - CUNY Tech Prep
                </h3>
              </div>
              <p className="text-sm font-medium">Jul 2024 - Jul 2025</p>
              <p className="text-sm">
                Developed full-stack applications focusing
                on front-end and back-end technologies with React and Node.js.
                Adopted best practices like MVC architecture and
                test-driven deployment. Collaborated in teams to design,
                develop, and deploy apps while applying industry-standard processes.
              </p>
            </div>
            <div className="space-y-2 flex flex-col h-[260px] justify-center">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <h3 className="text-sm font-bold">
                  IOS Development Fellow - CodePath
                </h3>
              </div>
              <p className="text-sm font-medium">Feb 2025 - Mat 2025</p>
              <p className="text-sm">
                Developed fully-functional apps using XCode and Swift. Built
                engaging user interfaces, then connected that UI wiht logic and
                cloud-based APIs to build complete iOS applications.
              </p>
            </div>
            <div className="space-y-2 flex flex-col h-[260px] justify-center">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <h3 className="text-sm font-bold">
                  IT Support Intern - Research Foundation for the City
                  University of New York
                </h3>
              </div>
              <p className="text-sm font-medium">Dec 2024 - Mar 2025</p>
              <p className="text-sm">
                Assessed and identified technology needs, assisted with the set
                up of computer equipment, and troubleshooted hardware and
                software issues in collaboration with the Department of
                Education Help Center. Monitored equipment for timely repairs,
                and provided support for technology usage.
              </p>
            </div>
            <div className="space-y-2 flex flex-col h-[260px] justify-center">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <h3 className="text-sm font-bold">
                  Intermediate Cybersecurity Fellow - CodePath
                </h3>
              </div>
              <p className="text-sm font-medium">Sep 2024 - Dec 2024</p>
              <p className="text-sm">
                Learned Blue Team defense concepts essential for effective
                security operations. Hands-on experience in endpoint and network
                monitoring using tools like SIEMs and HIDS to detect
                vulnerabilities in endpoints, as well as packet snifffing and
                deploying IDS/IPS systems for network defense.
              </p>
            </div>
            <div className="space-y-2 flex flex-col h-[260px] justify-center">
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <h3 className="text-sm font-bold">
                  Beginner Cybersecurity Fellow - CodePath
                </h3>
              </div>
              <p className="text-sm font-medium">Feb 2024 - May 2024</p>
              <p className="text-sm">
                Learned security principles and techniques, ranging from
                system basics and access control to network exploitation and
                malware detection. Equipped with practical skills in tools like
                Linux command line, SSH, and Metasploit, along with a grasp of
                essential topics in access control, data security, and privacy
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default ExperienceSection;
