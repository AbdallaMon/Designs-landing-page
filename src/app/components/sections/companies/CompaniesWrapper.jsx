"use client";
import { useScrollAnimation } from "@/app/animations/useScrollAnimation";
import { CompaniesContent } from "./content";

export function CompaniesWrapper({ companiesData }) {
  const animations = [
    {
      target: ".companies-title-wrapper h2",
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
      target: ".companies-title-wrapper h3",
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
      target: ".company-card",
      from: {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      to: {
        scale: 1,
        opacity: 1,
      },
      staggerChildren: 0.2, // Add a stagger effect for cards
    },
    {
      target: ".company-logo",
      from: {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      to: {
        y: 0,
        opacity: 1,
      },
    },
    {
      target: ".company-text",
      from: {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      to: {
        opacity: 1,
      },
    },
    {
      target: ".company-button",
      from: {
        y: 15,
        opacity: 0,
        duration: 0.8,
        ease: "power1.out",
      },
      to: {
        y: 0,
        opacity: 1,
      },
    },
  ];

  const companiesRef = useScrollAnimation({
    triggerId: "#companies",
    triggerStart: "top 80%",
    triggerEnd: "center center",
    defaults: { ease: "power2.out" },
    animations: animations,
  });

  return (
    <div ref={companiesRef}>
      <CompaniesContent companies={companiesData} />
    </div>
  );
}
