import React, { useEffect, useRef } from "react";

export function BackgroundEffects() {
  const canvasRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const smoothPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  // Fractal noise canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Generate fractal noise using improved Perlin-like noise
    const generateNoise = (width, height, octaves = 5) => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      // Simple hash function for pseudo-random values
      const hash = (x, y) => {
        const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
        return n - Math.floor(n);
      };

      // Smooth interpolation
      const smoothstep = (t) => t * t * (3 - 2 * t);

      // 2D noise function
      const noise = (x, y) => {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const fx = x - ix;
        const fy = y - iy;

        const a = hash(ix, iy);
        const b = hash(ix + 1, iy);
        const c = hash(ix, iy + 1);
        const d = hash(ix + 1, iy + 1);

        const ux = smoothstep(fx);
        const uy = smoothstep(fy);

        return (
          a * (1 - ux) * (1 - uy) +
          b * ux * (1 - uy) +
          c * (1 - ux) * uy +
          d * ux * uy
        );
      };

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let value = 0;
          let amplitude = 1;
          let frequency = 0.015;
          let maxValue = 0;

          // Multiple octaves for fractal effect
          for (let i = 0; i < octaves; i++) {
            value += amplitude * noise(x * frequency, y * frequency);
            maxValue += amplitude;
            amplitude *= 0.5;
            frequency *= 2;
          }

          // Normalize
          value = value / maxValue;
          value = Math.max(0, Math.min(1, value));
          
          // Increase contrast for clearer visibility
          value = Math.pow(value, 0.8);
          
          const index = (y * width + x) * 4;
          const gray = Math.floor(value * 255);
          data[index] = gray;
          data[index + 1] = gray;
          data[index + 2] = gray;
          data[index + 3] = 255; // Full opacity, we'll control it with CSS
        }
      }

      return imageData;
    };

    const imageData = generateNoise(width, height);
    ctx.putImageData(imageData, 0, 0);

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      const newImageData = generateNoise(newWidth, newHeight);
      ctx.putImageData(newImageData, 0, 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosition.current.x = e.clientX;
      targetPosition.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth animation loop
    let animationFrameId;
    const animate = () => {
      const glow = cursorGlowRef.current;
      if (glow) {
        smoothPosition.current.x += (targetPosition.current.x - smoothPosition.current.x) * 0.25;
        smoothPosition.current.y += (targetPosition.current.y - smoothPosition.current.y) * 0.25;

        glow.style.transform = `translate3d(${smoothPosition.current.x}px, ${smoothPosition.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Fractal noise background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{ mixBlendMode: "overlay" }}
      />
      
      {/* Cursor glow */}
      <div
        ref={cursorGlowRef}
        className="fixed pointer-events-none z-[-1]"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "100%",
          background: "radial-gradient(circle, rgba(255, 165, 0, 0.15) 0%, rgba(255, 165, 0, 0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
          willChange: "transform",
        }}
      />
    </>
  );
}
