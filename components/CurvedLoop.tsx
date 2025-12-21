import { useRef, useEffect, useState, useMemo, useId, FC, PointerEvent } from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  direction?: "left" | "right";
  interactive?: boolean;
}

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = "",
  speed = 1,
  className,
  direction = "left",
  interactive = true
}) => {
  const text = useMemo(() => marqueeText + "\u00A0", [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const [spacing, setSpacing] = useState(0);
  const uid = useId();
  const pathId = `line-${uid}`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);

  const totalText =
    spacing > 0
      ? Array(Math.ceil(1800 / spacing) + 2)
          .fill(text)
          .join("")
      : text;

  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [text, className]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    textPathRef.current.setAttribute("startOffset", `-${spacing}px`);
  }, [spacing]);

  useEffect(() => {
    if (!spacing || !textPathRef.current) return;
    let frame: number;

    const step = () => {
      if (!dragRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const current = parseFloat(
          textPathRef.current!.getAttribute("startOffset") || "0"
        );
        let next = current + delta;
        if (next <= -spacing) next += spacing;
        if (next > 0) next -= spacing;
        textPathRef.current!.setAttribute("startOffset", `${next}px`);
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed]);

  const onPointerDown = (e: PointerEvent) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const current = parseFloat(
      textPathRef.current.getAttribute("startOffset") || "0"
    );
    let next = current + dx;
    if (next <= -spacing) next += spacing;
    if (next > 0) next -= spacing;
    textPathRef.current.setAttribute("startOffset", `${next}px`);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  return (
    <div
      className="py-16 flex items-center justify-center w-full"
      style={{ cursor: interactive ? "grab" : "auto" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className={`w-full overflow-visible select-none ${
          className ?? ""
        }`}
        viewBox="0 0 1440 80"
      >
        <text
          ref={measureRef}
          style={{ visibility: "hidden", pointerEvents: "none" }}
        >
          {text}
        </text>

        <defs>
          <path
            id={pathId}
            d="M0 40 L1440 40"
            fill="none"
          />
        </defs>

        <text
          className="fill-white text-8xl md:text-8xl font-semibold uppercase flex justify-center items-center"
        >
          <textPath ref={textPathRef} href={`#${pathId}`}>
            {totalText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CurvedLoop;
