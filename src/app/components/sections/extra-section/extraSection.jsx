"use client";
import { useMultipleScrollAnimations } from "@/app/animations/useMultipleScrollAnimations";
import { ExtraSectionContent } from "./content";

export function ExtraSection() {
  const animations = [
    {
      target: ".extra-section-card", // Target all cards
      triggerId: ".extra-section-card",
      from: {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15, // Stagger each card animation
      },
      to: {
        opacity: 1,
        y: 0,
      },
    },
  ];

  const sectionRef = useMultipleScrollAnimations(animations);

  return (
    <div ref={sectionRef}>
      <ExtraSectionContent />
    </div>
  );
}
