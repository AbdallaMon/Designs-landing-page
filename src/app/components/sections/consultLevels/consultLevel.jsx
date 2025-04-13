"use client";
import { Box } from "@mui/material";
import { ConsultLevelContent } from "./content";
import { useMultipleScrollAnimations } from "@/app/animations/useMultipleScrollAnimations";

export function ConsultLevel() {
  const animations = [
    {
      target: ".consult-level-title-wrapper h2",
      triggerId: ".consult-level-title-wrapper",
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
      target: ".consult-level-title-wrapper h3",
      triggerId: ".consult-level-title-wrapper",

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
      target: "#consult-level .collapsable-stage",
      triggerId: "#consult-level .collapsable-stage",
      multiItem: true,
      from: {
        x: 20,
        opacity: 0,
        duration: 0.3,
        ease: "sine.in",
      },
      to: {
        x: 0,
        opacity: 1,
      },
    },
  ];

  const consultLevelRef = useMultipleScrollAnimations(animations);

  return (
    <Box id="consult-level" ref={consultLevelRef}>
      <ConsultLevelContent />
    </Box>
  );
}
