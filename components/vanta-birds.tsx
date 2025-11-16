"use client";
import { useEffect, useRef, useState } from "react";


export default function VantaBirds() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let mounted = true;
    let timeoutId: NodeJS.Timeout;

    const loadVanta = async () => {
      if (!vantaRef.current || !mounted) return;

      try {
        // Load THREE.js from CDN if not already loaded
        if (!(window as any).THREE) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // Load Vanta Birds from CDN
        if (!(window as any).VANTA) {
          await new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        if (!mounted || !vantaRef.current) return;

        // Small delay to ensure everything is initialized
        await new Promise(resolve => setTimeout(resolve, 100));

        if (!mounted || !vantaRef.current) return;

        // Destroy any existing effect
        if (effectRef.current) {
          effectRef.current.destroy();
          effectRef.current = null;
        }

        const VANTA = (window as any).VANTA;

        if (!VANTA || !VANTA.BIRDS) {
          console.error("VANTA.BIRDS not loaded");
          return;
        }

        // Initialize Vanta Birds
        effectRef.current = VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          maxHeight: 400.0,
          maxWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundAlpha: 0.0,
          wingSpan: 50.0,
          separation: 50.0,
          alignment: 77.0,
          cohesion: 26.0,
          quantity: 2.0,
          color1: 0x000000,
          color2: 0x000000,
        });

        // // Fade in main content
        // timeoutId = setTimeout(() => {
        //   if (!mounted) return;
        //   const main = document.querySelector("main") as HTMLElement | null;
        //   if (main) {
        //     main.style.transition = "opacity 1s ease, filter 1s ease";
        //     main.style.opacity = "1";
        //     main.style.filter = "blur(0px)";
        //   }
        // }, 1000);
      } catch (error) {
        console.error("Failed to load Vanta:", error);
      }
    };

    loadVanta();

    return () => {
      mounted = false;
      // clearTimeout(timeoutId);
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch (e) {
          console.error("Error destroying Vanta:", e);
        }
        effectRef.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return <div className="absolute top-0 left-0 right-0 bottom-0 w-[300px] h-[300px]" />;
  }

  return <div ref={vantaRef} id="vanta" className={`absolute top-0 right-0   w-[300px] h-[400px] rounded-s-4xl`} />;
}
