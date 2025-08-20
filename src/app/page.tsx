import React from "react";
import AboutMeSection from "@/components/aboutme-section";
import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection /> 
    </div>
  );
}
