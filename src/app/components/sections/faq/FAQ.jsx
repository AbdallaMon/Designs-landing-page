"use client";
import { useMultipleScrollAnimations } from "@/app/animations/useMultipleScrollAnimations";
import { FaqContent } from "./content";

export function Faq() {
  const animations = [
    {
      target: ".faq-title-wrapper h2",
      triggerId: ".faq-title-wrapper",
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
      target: ".faq-title-wrapper h3",
      triggerId: ".faq-title-wrapper",

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
      target: "#faq .collapsable-item",
      triggerId: "#faq .collapsable-item",
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
      target: "#faq .action-button",
      triggerId: "#faq .action-button",
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

  const faqRef = useMultipleScrollAnimations(animations);

  return (
    <div ref={faqRef}>
      <FaqContent />
    </div>
  );
}
