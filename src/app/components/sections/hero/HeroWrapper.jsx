"use client";
import { HeroContent } from "./content";
import { useScrollAnimation } from "@/app/animations/useScrollAnimation";

export default function HeroWrapper({ heroData }) {
  const animations = [
    {
      target: ".hero-title-wrapper h2",

      from: {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      },
      to: {
        opacity: 1,
        y: 0,
      },
    },
    {
      target: ".hero-title-wrapper h3",

      from: {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out",
      },
      to: {
        opacity: 1,
        x: 0,
      },
    },
    {
      target: ".hero-video-container",
      from: {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      },
      to: {
        scale: 1,
        opacity: 1,
      },
    },
    {
      target: ".hero-button",
      from: {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      },
      to: {
        y: 0,
        opacity: 1,
      },
    },
  ];

  const heroRef = useScrollAnimation({
    triggerId: "#hero",
    triggerStart: "top 80%",
    triggerEnd: "center center",
    defaults: { ease: "power2.out" },
    animations: animations,
  });

  return (
    <div ref={heroRef}>
      <HeroContent heroData={heroData} />
    </div>
  );
}
