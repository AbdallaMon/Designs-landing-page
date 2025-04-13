"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useMultipleScrollAnimations(animationConfigs = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === "undefined") return;

    // Create a new context for this component
    const ctx = gsap.context(() => {
      // Store all created animations for cleanup
      const allAnimations = [];

      // Process each animation config
      animationConfigs.forEach((config) => {
        const {
          triggerId,
          target,
          from,
          to,
          scrollTrigger = {},
          multiItem = false,
        } = config;

        if (multiItem) {
          // Get all elements matching the triggerId
          const triggerElements = document.querySelectorAll(triggerId);

          triggerElements.forEach((triggerEl, index) => {
            let targetElement;
            if (target === triggerId) {
              targetElement = triggerEl;
            } else {
              const targetElements = document.querySelectorAll(target);
              targetElement = targetElements[index] || target;
            }
            const animation = gsap.fromTo(targetElement, from, {
              ...to,
              scrollTrigger: {
                trigger: triggerEl,
                start: "top 80%",
                toggleActions: "play none none none",
                ...scrollTrigger,
              },
            });

            allAnimations.push(animation);
          });
        } else {
          // Standard single animation setup
          const animation = gsap.fromTo(target, from, {
            ...to,
            scrollTrigger: {
              trigger: triggerId,
              start: "top 80%",
              toggleActions: "play none none none",
              ...scrollTrigger,
            },
          });

          allAnimations.push(animation);
        }
      });

      return allAnimations;
    }, containerRef);

    return () => {
      // Clean up all created ScrollTrigger instances
      ctx.revert();
    };
  }, [animationConfigs]);

  return containerRef;
}
