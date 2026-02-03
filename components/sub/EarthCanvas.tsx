"use client";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const GLOBE_CONFIG = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.2, 0.6, 1] as [number, number, number],
  markerColor: [1, 1, 1] as [number, number, number],
  glowColor: [1, 1, 1] as [number, number, number],
  opacity: 0, 
  scale: 1.0,
  markers: [
    { location: [19.076, 72.8777] as [number, number], size: 0.1 },
    { location: [40.7128, -74.006] as [number, number], size: 0.1 },
    { location: [34.0522, -118.2437] as [number, number], size: 0.08 },
    { location: [48.8566, 2.3522] as [number, number], size: 0.07 },
    { location: [35.6895, 139.6917] as [number, number], size: 0.08 },
  ],
};

const EarthCanvas = () => {
  const phiRef = useRef(0);
  const theta = GLOBE_CONFIG.theta;
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const pointerMovement = useRef({ x: 0, y: 0 });
  
  // Separate motion values for X and Y rotation
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const rsX = useSpring(rX, { mass: 1, damping: 30, stiffness: 100 });
  const rsY = useSpring(rY, { mass: 1, damping: 30, stiffness: 100 });

  const setCursor = (isGrabbing: boolean) => {
    if (canvasRef.current)
      canvasRef.current.style.cursor = isGrabbing ? "grabbing" : "grab";
  };

  const handleMovement = (clientX: number, clientY: number) => {
    if (pointerInteracting.current !== null) {
      const deltaX = clientX - pointerInteracting.current.x;
      const deltaY = clientY - pointerInteracting.current.y;
      
      pointerMovement.current = { x: deltaX, y: deltaY };
      
      // Update X rotation (horizontal movement)
      rX.set(rX.get() + deltaX / 200);
      
      // Update Y rotation (vertical movement)
      rY.set(rY.get() + deltaY / 200);
      
      // Update pointer position for next frame
      pointerInteracting.current = { x: clientX, y: clientY };
    }
  };

  useEffect(() => {
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...GLOBE_CONFIG,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phiRef.current += 0.005; // auto-rotation when not interacting
        }
        
        // Apply X rotation (phi - horizontal)
        state.phi = phiRef.current + rsX.get();
        
        // Apply Y rotation (theta - vertical)
        state.theta = theta + rsY.get();
        
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rsX, rsY, theta]);

  return (
    <div className="w-full flex justify-center items-center h-full">
      <canvas
        ref={canvasRef}
        className="opacity-0 transition-opacity duration-700 ease-in-out w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
        style={{
          maxWidth: "80vw",
          maxHeight: "80vw",
          borderRadius: "50%",
          cursor: "grab",
        }}
        onPointerDown={(e) => {
          pointerInteracting.current = { x: e.clientX, y: e.clientY };
          setCursor(true);
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          setCursor(false);
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          setCursor(false);
        }}
        onMouseMove={(e) => handleMovement(e.clientX, e.clientY)}
        onTouchMove={(e) => {
          if (e.touches[0]) {
            handleMovement(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
      />
    </div>
  );
};

export default EarthCanvas;