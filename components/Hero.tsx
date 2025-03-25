"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Full-screen CardSpotlight background */}
      <CardSpotlight className="absolute inset-0 w-full h-full z-0" children={undefined} />

      {/* Optional grid & radial gradient background overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]"
      >
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero content – centered on top */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] p-4">
        <p className="uppercase tracking-widest text-xs text-blue-100 mb-4">
          Dynamic Web Magic with Next.js
        </p>

        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-[40px] md:text-5xl lg:text-6xl mb-4"
        />

        <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
        </p>

        <a href="#about">
          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
