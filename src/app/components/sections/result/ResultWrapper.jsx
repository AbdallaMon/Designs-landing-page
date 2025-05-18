"use client";
import { useMultipleScrollAnimations } from "@/app/animations/useMultipleScrollAnimations";
import { ResultsContent } from "./content";

export function ResultWrapper({ resultData }) {
  const animations = [
    {
      target: ".result-title-wrapper h2",
      triggerId: ".result-title-wrapper",
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
      target: ".result-title-wrapper h3",
      triggerId: ".result-title-wrapper",

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
      target: "#results .result-card",
      triggerId: "#results .result-card",
      multiItem: true,
      from: {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      to: {
        x: 0,
        opacity: 1,
      },
    },
    {
      target: "#results .action-button",
      triggerId: "#results .action-button",
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
  const resultRef = useMultipleScrollAnimations(animations);

  return (
    <div ref={resultRef}>
      <ResultsContent resultData={resultData} />
    </div>
  );
}
