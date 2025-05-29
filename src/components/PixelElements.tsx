
import React from 'react';

const PixelElements = () => {
  return (
    <>
      {/* Floating NFT Cards */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 animate-float" style={{animationDelay: '0s'}}>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 pixel-border transform rotate-12">
            <div className="w-full h-full flex items-center justify-center text-white font-bold">NFT</div>
          </div>
        </div>
        
        <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 pixel-border transform -rotate-6">
            <div className="w-full h-full flex items-center justify-center text-white text-xs">🎨</div>
          </div>
        </div>
        
        <div className="absolute bottom-40 left-1/4 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 pixel-border transform rotate-45">
            <div className="w-full h-full flex items-center justify-center text-white">💎</div>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-10 animate-float" style={{animationDelay: '1.5s'}}>
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 pixel-border">
            <div className="w-full h-full flex items-center justify-center text-white text-xs">⚡</div>
          </div>
        </div>
      </div>

      {/* Pixel Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </>
  );
};

export default PixelElements;
