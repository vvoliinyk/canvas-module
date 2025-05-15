import React, { useEffect, useRef } from 'react';
import { Canvas, Rect } from 'fabric';

export const CanvasDiagram: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<Canvas>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricRef.current = new Canvas(canvasRef.current, {
        backgroundColor: '#f5f5f5',
        width: 800,
        height: 600,
      });

      // Додай базовий прямокутник
      const rect = new Rect({
        left: 100,
        top: 100,
        fill: 'lightblue',
        width: 100,
        height: 60,
        hasControls: true,
        hasBorders: true,
      });

      fabricRef.current.add(rect);
    }

    return () => {
      fabricRef.current?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};
