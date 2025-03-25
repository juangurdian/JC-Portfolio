"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { useEffect } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "@/utils/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#34046B",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Attach a global mousemove listener so the effect follows the mouse anywhere
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Here we use window coordinates;
      // you can adjust this logic to make it relative to a container if needed.
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      {...props}
    >
      {/* The motion.div is always visible (opacity 100) and updates its mask based on mouseX and mouseY */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-100 transition duration-300"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {/* Always render the canvas reveal effect */}
        <CanvasRevealEffect
          animationSpeed={5}
          containerClassName="bg-transparent absolute inset-0 pointer-events-none"
          colors={[
            [59, 130, 246],
            [139, 92, 246],
          ]}
          dotSize={3}
        />
      </motion.div>
      {children}
    </div>
  );
};
