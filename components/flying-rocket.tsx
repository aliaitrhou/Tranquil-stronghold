"use client"

import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

interface FlyingRocketProps {
  onCatch: () => void;
}

export default function FlyingRocket({ onCatch }: FlyingRocketProps) {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [visible, setVisible] = useState(true);
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newX = prev.x + direction.x * 0.5;
        let newY = prev.y + direction.y * 0.3;
        let newDirX = direction.x;
        let newDirY = direction.y;

        // Bounce off edges
        if (newX >= 90 || newX <= 5) {
          newDirX = -direction.x;
          newX = newX >= 90 ? 90 : 5;
        }
        if (newY >= 85 || newY <= 5) {
          newDirY = -direction.y;
          newY = newY >= 85 ? 85 : 5;
        }

        setDirection({ x: newDirX, y: newDirY });
        return { x: newX, y: newY };
      });
    }, 30);

    return () => clearInterval(interval);
  }, [direction]);

  const handleClick = () => {
    setVisible(false);
    setTimeout(() => {
      onCatch();
    }, 300);
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed z-50 transition-all duration-300 hover:scale-110 group cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animation: "bounce 2s infinite",
      }}
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all"></div>
        <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-full shadow-xl border-2 border-white group-hover:shadow-2xl transition-all">
          <Rocket className="w-8 h-8 text-white" style={{ transform: `rotate(${direction.x > 0 ? 45 : -45}deg)` }} />
        </div>
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-lg text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Catch me! 🎮
        </div>
      </div>
    </button>
  );
}
