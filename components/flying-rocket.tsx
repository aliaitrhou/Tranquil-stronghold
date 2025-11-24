"use client";

import { useEffect, useRef, useState } from "react";
import { Rocket } from "lucide-react";

interface FlyingRocketProps {
  onCatch: () => void;
}

export default function FlyingRocket({ onCatch }: FlyingRocketProps) {
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState({ x: 50, y: 40 });

  const angleRef = useRef(0);
  const directionRef = useRef(Math.random() * 360);
  const speedRef = useRef(0.35 + Math.random() * 0.15);
  const rafRef = useRef<number | null>(null);
  const loopOffsetRef = useRef(0);

  const animate = () => {
    setPosition((prev) => {
      loopOffsetRef.current += 0.015;
      const loopCurve = Math.sin(loopOffsetRef.current * 1.5) * 12;

      // Smooth rotation
      directionRef.current += Math.sin(Date.now() * 0.0015) * 0.25;

      const rad = (directionRef.current * Math.PI) / 180;

      const nx =
        prev.x + Math.cos(rad) * speedRef.current + Math.sin(loopOffsetRef.current) * 0.12;
      const ny =
        prev.y + Math.sin(rad) * speedRef.current + Math.cos(loopOffsetRef.current) * 0.12;

      let nextX = nx;
      let nextY = ny;

      // Bounce edges
      if (nx < 2 || nx > 94) {
        directionRef.current = 180 - directionRef.current + Math.random() * 5;
        nextX = Math.max(2, Math.min(nx, 94));
      }
      if (ny < 2 || ny > 88) {
        directionRef.current *= -1;
        nextY = Math.max(2, Math.min(ny, 88));
      }

      // Smooth rotation toward direction
      const targetAngle = directionRef.current;
      angleRef.current += (targetAngle - angleRef.current) * 0.05;

      return { x: nextX, y: nextY };
    });

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleCatch = () => {
    setVisible(false);
    setTimeout(() => onCatch(), 350);
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleCatch}
      className="fixed z-[100] group cursor-pointer active:scale-90 transition-transform"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <div className="relative">

        {/* Soft subtle trail glow */}
        <div className="absolute -inset-5 rounded-full bg-blue-500/10 blur-2xl opacity-50 animate-pulse"></div>
        <div className="absolute -inset-3 rounded-full bg-blue-400/10 blur-xl opacity-40 animate-pulse"></div>

        {/* Rocket shape */}
        <div
          className="relative p-4 rounded-[50%] shadow-lg bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 border border-white/20"
          style={{
            transform: `rotate(${angleRef.current}deg)`,
            transition: "transform 0.12s linear",
          }}
        >
          {/* Main Rocket Icon */}
          <Rocket className="w-10 h-10 text-white drop-shadow-md" />

          {/* Flame - polished with soft gradient */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-1">
            <div className="w-3 h-3 bg-orange-500 rounded-full blur-sm animate-ping opacity-80"></div>
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white px-5 py-1 rounded-full shadow-lg text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
          Catch Me! 🚀
        </div>
      </div>
    </button>
  );
}
