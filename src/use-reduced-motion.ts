import { useSyncExternalStore } from "react";

const prefersReducedMotionMediaQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

/**
 * @returns boolean value If the user has expressed their preference for reduced motion.
 */
export const useReducedMotion = (): boolean => {
  return useSyncExternalStore(
    (callback) => {
      prefersReducedMotionMediaQuery.addEventListener("change", callback);
      return () => {
        prefersReducedMotionMediaQuery.removeEventListener("change", callback);
      };
    },
    () => prefersReducedMotionMediaQuery.matches,
  );
};
