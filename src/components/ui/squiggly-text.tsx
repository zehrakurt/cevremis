"use client";
import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface SquigglyTextProps {
  children: React.ReactNode;
  className?: string;
  stepDuration?: number; // duration of each frame in ms (e.g. 70)
  scale?: number | [number, number]; // scale of displacement
  baseFrequency?: string;
}

export function SquigglyText({
  children,
  className,
  stepDuration = 70,
  scale = 5,
  baseFrequency = "0.02 0.05",
}: SquigglyTextProps) {
  const id = useId().replace(/:/g, ""); // strip colons for valid HTML IDs

  const getScale = (idx: number) => {
    if (Array.isArray(scale)) {
      const [min, max] = scale;
      return min + (max - min) * (idx / 4);
    }
    return scale;
  };

  const animDuration = `${(stepDuration * 5) / 1000}s`;

  return (
    <span className={cn("relative inline-block", className)}>
      <span
        style={{
          display: "inline-block",
          animation: `squiggly-wiggle-${id} ${animDuration} infinite linear`,
        }}
      >
        {children}
      </span>
      <svg className="absolute w-0 h-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {Array.from({ length: 5 }).map((_, idx) => (
            <filter key={idx} id={`squiggly-${id}-${idx}`}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency={baseFrequency}
                numOctaves="3"
                result="noise"
                seed={idx}
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={getScale(idx)}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          ))}
        </defs>
      </svg>
      <style>{`
        @keyframes squiggly-wiggle-${id} {
          0% { filter: url(#squiggly-${id}-0); }
          20% { filter: url(#squiggly-${id}-1); }
          40% { filter: url(#squiggly-${id}-2); }
          60% { filter: url(#squiggly-${id}-3); }
          80% { filter: url(#squiggly-${id}-4); }
          100% { filter: url(#squiggly-${id}-0); }
        }
      `}</style>
    </span>
  );
}
