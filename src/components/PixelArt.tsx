
import React, { useState, useEffect } from 'react';

const PixelArt = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getEyeDirection = (eyeX: number, eyeY: number) => {
    const rect = document.querySelector('.pixel-character-container')?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    
    const eyeCenterX = rect.left + eyeX;
    const eyeCenterY = rect.top + eyeY;
    
    const deltaX = mousePosition.x - eyeCenterX;
    const deltaY = mousePosition.y - eyeCenterY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 3; // Maximum eye movement
    
    return {
      x: Math.max(-maxDistance, Math.min(maxDistance, deltaX / 20)),
      y: Math.max(-maxDistance, Math.min(maxDistance, deltaY / 20))
    };
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main Character */}
      <div className="pixel-character-container">
        <div className="grid grid-cols-8 gap-1 w-64 h-64 mx-auto">
          {/* Creating a simple pixel character */}
          {Array.from({ length: 64 }, (_, i) => {
            const row = Math.floor(i / 8);
            const col = i % 8;
            
            // Define the pixel character pattern
            let pixelClass = 'bg-transparent';
            let isEye = false;
            let isLeftEye = false;
            let isRightEye = false;
            
            // Head outline
            if ((row === 1 && col >= 2 && col <= 5) ||
                (row === 2 && (col === 1 || col === 6)) ||
                (row === 3 && (col === 1 || col === 6)) ||
                (row === 4 && col >= 2 && col <= 5)) {
              pixelClass = 'bg-yellow-400';
            }
            
            // Eyes with tracking
            if (row === 2 && col === 3) {
              pixelClass = 'bg-black eyes-blink';
              isEye = true;
              isLeftEye = true;
            }
            if (row === 2 && col === 4) {
              pixelClass = 'bg-black eyes-blink';
              isEye = true;
              isRightEye = true;
            }
            
            // Body
            if ((row === 5 && col >= 3 && col <= 4) ||
                (row === 6 && col >= 2 && col <= 5) ||
                (row === 7 && col >= 2 && col <= 5)) {
              pixelClass = 'bg-blue-500';
            }

            const leftEyeDirection = getEyeDirection(col * 25 + 12, row * 25 + 12);
            const rightEyeDirection = getEyeDirection(col * 25 + 12, row * 25 + 12);
            
            return (
              <div
                key={i}
                className={`w-6 h-6 ${pixelClass} transition-all duration-300 hover:scale-110`}
                style={{
                  imageRendering: 'pixelated',
                  border: pixelClass !== 'bg-transparent' ? '1px solid rgba(0,0,0,0.2)' : 'none',
                  transform: isLeftEye 
                    ? `translate(${leftEyeDirection.x}px, ${leftEyeDirection.y}px)` 
                    : isRightEye 
                    ? `translate(${rightEyeDirection.x}px, ${rightEyeDirection.y}px)` 
                    : 'none'
                }}
              />
            );
          })}
        </div>
      </div>
      
      {/* Animated particles around the character */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelArt;
