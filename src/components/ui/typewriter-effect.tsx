"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { SquigglyText } from "./squiggly-text";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Split each word into characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  return (
    <div className={cn("flex space-x-1 my-6 items-center", className)}>
      <motion.div
        className="overflow-hidden pb-1"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
      >
        <div
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          <SquigglyText
            stepDuration={80}
            scale={[1.2, 1.8]}
            baseFrequency="0.01 0.015"
          >
            {wordsArray.map((word, idx) => {
              return (
                <div key={`word-${idx}`} className="inline-block">
                  {word.text.map((char, index) => (
                    <span
                      key={`char-${index}`}
                      className={cn(word.className)}
                    >
                      {char}
                    </span>
                  ))}
                  &nbsp;
                </div>
              );
            })}
          </SquigglyText>
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-6 sm:h-8 md:h-10 bg-emerald-500",
          cursorClassName
        )}
      />
    </div>
  );
};
