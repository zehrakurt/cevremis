"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  className,
  containerClassName,
  as: Tag = "button",
  duration = 1,
  hovered = false,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  containerClassName?: string;
  duration?: number;
  hovered?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(hovered);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [isHovered, duration]);

  const mapDirectionToCorner: Record<Direction, string> = {
    TOP: "radial-gradient(20% 50% at 50% 0%, #20ba59 0%, rgba(32, 186, 89, 0) 100%)",
    LEFT: "radial-gradient(50% 20% at 0% 50%, #20ba59 0%, rgba(32, 186, 89, 0) 100%)",
    BOTTOM: "radial-gradient(20% 50% at 50% 100%, #d4af37 0%, rgba(212, 175, 55, 0) 100%)",
    RIGHT: "radial-gradient(50% 20% at 100% 50%, #d4af37 0%, rgba(212, 175, 55, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 75% at 50% 50%, #20ba59 0%, rgba(32, 186, 89, 0) 100%)";

  return (
    <Tag
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex rounded-full content-center bg-[#01351f]/10 transition duration-500 items-center justify-center gap-10 overflow-visible p-[1.5px] w-fit",
        containerClassName
      )}
      {...props}
    >
      <div className={cn("w-auto text-white z-10 px-6 py-3 rounded-[inherit] bg-[#01351f] flex items-center justify-center gap-2", className)}>
        {children}
      </div>
      <motion.div
        className="absolute inset-0 rounded-[inherit] z-0 overflow-hidden"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: mapDirectionToCorner[direction] }}
        animate={{
          background: isHovered
            ? [mapDirectionToCorner[direction], highlight]
            : mapDirectionToCorner[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="absolute inset-[1.5px] bg-[#01351f] z-1 rounded-[inherit]" />
    </Tag>
  );
}
