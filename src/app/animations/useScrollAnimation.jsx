"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimation({
  triggerId,
  triggerStart = "top 80%",
  triggerEnd = "center center",
  toggleActions = "play none none none",
  defaults = { ease: "power2.out" },
  animations = [],
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === "undefined") return;

    // Create a new context for this component
    const ctx = gsap.context(() => {
      // Create a timeline for sequential animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerId,
          start: triggerStart,
          end: triggerEnd,
          toggleActions: toggleActions,
        },
        defaults: defaults,
      });

      // Add each animation to the timeline
      animations.forEach((animation) => {
        const { target, from, to, position } = animation;
        tl.fromTo(target, from, to, position || ">");
      });
    }, containerRef);

    return () => {
      // Clean up ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === triggerId) {
          trigger.kill();
        }
      });
      ctx.revert();
    };
  }, [
    triggerId,
    triggerStart,
    triggerEnd,
    toggleActions,
    defaults,
    animations,
  ]);

  return containerRef;
}

/**
 * Hook to create a separate scroll animation outside the main timeline
 *
 * @param {Object} options - Configuration options
 * @param {string} options.triggerId - The ID of the trigger element
 * @param {string} options.target - The target element selector
 * @param {Object} options.props - Animation properties
 * @param {Object} options.scrollTriggerOptions - Additional ScrollTrigger options
 */
export function useSingleScrollAnimation({
  triggerId,
  target,
  props,
  scrollTriggerOptions = {},
}) {
  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === "undefined") return;

    const animation = gsap.from(target, {
      ...props,
      scrollTrigger: {
        trigger: triggerId,
        start: "top 70%",
        toggleActions: "play none none none",
        ...scrollTriggerOptions,
      },
    });

    return () => {
      // Clean up animation and ScrollTrigger
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill();
      }
      animation.kill();
    };
  }, [triggerId, target, props, scrollTriggerOptions]);
}
