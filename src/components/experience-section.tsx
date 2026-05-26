import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Cpu } from "lucide-react";

const experiences = [
  {
    company: "Liberty Mutual Insurance",
    title: "Incoming Technology Associate",
    date: "Jul 2026",
    description: "",
  },
  {
    company: "Liberty Mutual Insurance",
    title: "Software Engineer Intern",
    date: "Jun 2025 - Aug 2025",
    description:
      "Contributed to full-stack development of customer-facing applications using React, TypeScript, GraphQL, and Jest, following test-driven development principles and agile methodologies. Implemented recall functionality to re-engage customers with their insurance quotes, including edge-case handling and unit testing to ensure reliability. Enhanced the Experiments Manager app, a platform that manages user traffic across control and test groups to evaluate new features, by improving user experience and feature integrity. Resolved high-severity security vulnerabilities and verified builds through Bamboo CI pipelines and GitHub Actions. Work supported 13 internal teams and is used daily by hundreds of customers, strengthening system reliability, security, and customer engagement.",
  },
  {
    company: "CUNY Tech Prep",
    title: "Software Development Fellow",
    date: "Jul 2024 - Jul 2025",
    description:
      "Developed full-stack applications focusing on front-end and back-end technologies with React, Node.js, and JavaScript. Adopted best practices like MVC architecture yand test-driven deployment. Collaborated in teams to design, develop, and deploy apps while applying industry-standard processes.",
  },
  {
    company: "CodePath",
    title: "IOS Development Fellow",
    date: "Feb 2025 - May 2025",
    description:
      " Developed fully-functional apps using XCode and Swift. Built engaging user interfaces, then connected the UI with logic and cloud-based APIs to build complete iOS applications.",
  },
  {
    company: "Research Foundation for the City University of New York",
    title: "IT Support Intern",
    date: "Dec 2024 - Mar 2025",
    description:
      " Assessed and identified technology needs, assisted with the  set up of computer equipment, and troubleshooted hardware and software issues in collaboration with the Department of Education Help Center. Monitored equipment for timely repairs, and provided support for technology usage.",
  },
  {
    company: "CodePath",
    title: "Intermediate Cybersecurity Fellow",
    date: "Sep 2024 - Dec 2024",
    description:
      "Learned Blue Team defense concepts essential for effective security operations. Hands-on experience in endpoint and network monitoring using tools like SIEMs and HIDS to detect vulnerabilities in endpoints, as well as packet sniffing and deploying IDS/IPS systems for network defense.",
  },
  {
    company: "CodePath",
    title: "Beginner Cybersecurity Fellow",
    date: "Feb 2024 - May 202",
    description:
      " Learned security principles and techniques, ranging from system basics and access control to network exploitation and malware detection. Equipped with practical skills in tools like Linux command line, SSH, and Metasploit, along with a grasp of essential topics in access control, data security, and privacy management.",
  },
];

function ExperienceSection() {
  return (
    <div
      id="experience"
      className="flex items-center justify-center min-h-screen"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center">
        <div className="py-10 px-6 w-full">
          <h1 className="text-5xl font-bold text-center mb-10">Experiences</h1>
          <div className="grid grid-cols-1 gap-10 max-w-7xl mx-auto lg:grid-cols-2">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 min-h-[300px] shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-4 inline-block rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                  {exp.date}
                </span>
                <h3 className="mb-1 pt-4 text-lg font-semibold text-foreground">
                  {exp.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {exp.company}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default ExperienceSection;
