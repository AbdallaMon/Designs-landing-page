"use client";
import { ConsultContent } from "./content";
import { useMultipleScrollAnimations } from "@/app/animations/useMultipleScrollAnimations";

export function Consult() {
  const animations = [
    {
      target: ".consult-title-wrapper h2",
      triggerId: ".consult-title-wrapper",
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
      target: ".consult-title-wrapper h3",
      triggerId: ".consult-title-wrapper",

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
      triggerId: ".consult-video-wrapper",
      target: ".consult-video-wrapper",
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
      target: "#consult .action-button",
      triggerId: "#consult .action-button",

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

  const consultRef = useMultipleScrollAnimations(animations);

  return (
    <div ref={consultRef}>
      <ConsultContent />
    </div>
  );
}
