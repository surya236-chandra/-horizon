import React from 'react';

export default function GridLayout() {
  const horizontalPositions = [12.5, 25, 37.5, 50, 62.5, 75, 87.5];
  const verticalPositions = [8.33, 16.66, 24.99, 33.32, 41.65, 49.98, 58.31, 66.64, 74.97, 83.3, 91.63];

  // Intersect coordinate points for pulsing lights
  const pulseCoordinates = [
    { top: 25, left: 33.32, delay: '0s' },
    { top: 50, left: 16.66, delay: '1.5s' },
    { top: 62.5, left: 66.64, delay: '0.8s' },
    { top: 37.5, left: 83.3, delay: '2.2s' },
    { top: 75, left: 49.98, delay: '3.1s' }
  ];

  return (
    <div 
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        pointerEvents: 'none',
        opacity: 0.15,
        overflow: 'hidden'
      }}
    >
      {horizontalPositions.map((pos, idx) => (
        <div 
          key={`h-${idx}`} 
          className="grid-line-h" 
          style={{ top: `${pos}%` }} 
        />
      ))}
      {verticalPositions.map((pos, idx) => (
        <div 
          key={`v-${idx}`} 
          className="grid-line-v" 
          style={{ left: `${pos}%` }} 
        />
      ))}

      {/* Pulsing Intersections */}
      {pulseCoordinates.map((coord, idx) => (
        <div
          key={`pulse-${idx}`}
          className="grid-pulse-dot"
          style={{
            top: `${coord.top}%`,
            left: `${coord.left}%`,
            animationDelay: coord.delay,
            transform: 'translate(-50%, -50%)' // Align center of intersection
          }}
        />
      ))}
    </div>
  );
}
