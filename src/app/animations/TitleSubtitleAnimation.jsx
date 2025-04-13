"use client";

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export function TitleSubtitleAnimation({ children, elementClassName }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = document.querySelector(elementClassName);
    console.log(element, "element");
    if (!element) return;

    // Create a context for this specific instance
    const ctx = gsap.context(() => {
      // Create a GSAP timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animation for the title
      tl.fromTo(
        element.querySelector("h2"),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }
      );

      // Animation for the subtitle
      tl.fromTo(
        element.querySelector("h3"),
        {
          opacity: 0,
          x: 30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2, // delay the subtitle animation slightly after the title
        }
      );
    }, element);

    // Cleanup
    return () => {
      ctx.revert();
      // Find and kill ScrollTrigger instances related to this specific element
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, []);

  return <>{children}</>;
}
