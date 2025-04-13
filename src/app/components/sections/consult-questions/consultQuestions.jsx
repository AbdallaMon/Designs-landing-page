"use client";
import { ConsultContent } from "./content";
import { useMultipleScrollAnimations } from "@/app/animations/useMultipleScrollAnimations";

export function ConsultQuestions() {
  const animations = [
    {
      target: ".consult-questions-title-wrapper h2",
      triggerId: ".consult-questions-title-wrapper",
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
      target: ".consult-questions-title-wrapper h3",
      triggerId: ".consult-questions-title-wrapper",

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
      target: "#consult-questions .collapsable-item",
      triggerId: "#consult-questions .collapsable-item",
      multiItem: true,
      from: {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      to: {
        y: 0,
        opacity: 1,
      },
      stagger: 0.15,
    },
    {
      target: "#consult-questions .action-button",
      triggerId: "#consult-questions .action-button",
      from: {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      },
      to: {
        scale: 1,
        opacity: 1,
      },
    },
  ];

  const consultRef = useMultipleScrollAnimations(animations);

  return (
    <div ref={consultRef}>
      <ConsultContent />
    </div>
  );
}
