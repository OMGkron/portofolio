"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type ScrambledTextProps = {
  text: string;
  className?: string;
};

export default function ScrambledText({
  text,
  className = "",
}: ScrambledTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const runScramble = () => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        scrambleText: {
          text,
          chars: "0123456789",
          revealDelay: 0,
        },
      },
      {
        duration: 5,
        scrambleText: text,
      }
    );
  };

  useEffect(() => {
    runScramble();
  }, [text]);

  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={runScramble}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
