"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function ScrambledText({ text, className = "" }) {
  const ref = useRef(null);

  const runScramble = () => {
    gsap.fromTo(
      ref.current,
      { scrambleText: { text: text, chars: "0123456789", revealDelay: 0 } },
      { duration: 5, scrambleText: text }
    );
  };

  useEffect(() => {
    runScramble();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={runScramble}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
