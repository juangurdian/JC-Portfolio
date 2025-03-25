import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// Import your card-spotlight
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* CardSpotlight as the full background */}
      <div className="absolute inset-0 z-0">
        <CardSpotlight className="w-full h-full" children={undefined} />
      </div>

      {/* Hero Content - layered on top */}
      <div className="relative z-10 text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        <p className="uppercase tracking-widest text-xs text-blue-100 mb-4 glow-text">
          Dynamic Web Magic with Next.js
        </p>

        <TextGenerateEffect
          words="Transforming Concepts into Seamless User Experiences"
          className="text-[40px] md:text-5xl lg:text-6xl mb-4 glow-text"
        />

        <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl glow-text">
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
