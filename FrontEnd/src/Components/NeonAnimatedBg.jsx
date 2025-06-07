import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const NeonAnimatedBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Grid properties
    const gridSize = 50;
    let points = [];

    // Create grid points
    const createPoints = () => {
      points = [];
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          points.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            movement: Math.random() * 2 * Math.PI
          });
        }
      }
    };
    createPoints();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      points.forEach((point, i) => {
        point.movement += 0.02;
        point.y = point.originY + Math.sin(point.movement) * 15;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(242, 242, 242, 0.5)';
        ctx.fill();

        // Connect points
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const distance = Math.hypot(point.x - p2.x, point.y - p2.y);
          
          if (distance < gridSize * 1.5) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(242, 242, 242, ${0.1 - (distance / (gridSize * 1.5)) * 0.1})`;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(circle at 50% 50%, rgba(40,40,40,0.95) 0%, rgba(0,0,0,0.98) 100%)'
      }}
    />
  );
};

export default NeonAnimatedBg;
