"use client";
import { AboutContent } from "./content";
import { useMultipleScrollAnimations } from "@/app/animations/useMultipleScrollAnimations";

export function AboutWrapper({ aboutData }) {
  const animations = [
    {
      target: ".about-image",
      triggerId: ".about-image",
      from: {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      to: {
        opacity: 1,
        scale: 1,
      },
    },
    {
      target: ".about-title",
      triggerId: ".about-title-wrapper",
      from: {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: "power3.out",
      },
      to: {
        opacity: 1,
        x: 0,
      },
    },
    {
      target: ".about-link",
      triggerId: ".about-link",
      from: {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: "power3.out",
      },
      to: {
        opacity: 1,
        x: 0,
      },
    },
    {
      target: ".about-content",
      triggerId: ".about-content",
      from: {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "circ.out",
      },
      to: {
        opacity: 1,
        y: 0,
      },
    },
  ];

  const aboutRef = useMultipleScrollAnimations(animations);

  return (
    <div ref={aboutRef}>
      <AboutContent about={aboutData} />
    </div>
  );
}
