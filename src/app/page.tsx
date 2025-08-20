import React from "react";
import AboutMeSection from "@/components/aboutme-section";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ProjectSection from "@/components/project-section";
import ExperienceSection from "@/components/experience-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
    </div>
  );
}
