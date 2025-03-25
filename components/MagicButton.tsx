"use client";

import React from "react";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
}) => {
  return (
    <button
      onClick={handleClick}
      className={`relative p-[3px] focus:outline-none inline-flex ${otherClasses}`}
    >
      {/* Vibrant purple glowing border */}
      <div className="
        absolute inset-0 rounded-lg 
        bg-[#a855f7] 
        shadow-[0_0_10px_2px_#a855f7,0_0_30px_6px_#a855f7]
      " />

      {/* Black interior */}
      <div className="
        relative 
        px-8 py-2 
        bg-black 
        rounded-[6px] 
        text-white 
        transition 
        duration-200 
        hover:bg-transparent 
        flex 
        items-center 
        gap-2
      ">
        {position === "left" && icon}
        <span>{title}</span>
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default MagicButton;

