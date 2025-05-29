
import React from 'react';

const NFTShowcase = () => {
  const nftCards = [
    { id: 1, emoji: '🚀', color: 'from-blue-500 to-purple-600', rarity: 'Legendary' },
    { id: 2, emoji: '⚡', color: 'from-yellow-400 to-orange-500', rarity: 'Epic' },
    { id: 3, emoji: '🎯', color: 'from-green-400 to-teal-500', rarity: 'Rare' },
    { id: 4, emoji: '🔥', color: 'from-red-500 to-pink-600', rarity: 'Mythic' },
    { id: 5, emoji: '💎', color: 'from-indigo-500 to-purple-700', rarity: 'Ultra' },
    { id: 6, emoji: '🌟', color: 'from-cyan-400 to-blue-500', rarity: 'Common' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold pixel-text text-gradient mb-4">
            Pixel Collection
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of creative digital assets and NFT-inspired designs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {nftCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`
                w-full aspect-square bg-gradient-to-br ${card.color} 
                pixel-border transform transition-all duration-300 
                group-hover:scale-110 group-hover:rotate-3 
                cursor-pointer relative overflow-hidden
              `}>
                {/* NFT Content */}
                <div className="absolute inset-2 bg-black/20 pixel-border flex flex-col items-center justify-center">
                  <div className="text-4xl mb-2">{card.emoji}</div>
                  <div className="text-xs text-white font-bold pixel-text">
                    #{card.id.toString().padStart(3, '0')}
                  </div>
                </div>
                
                {/* Rarity Badge */}
                <div className="absolute top-1 right-1 bg-black/70 text-white text-xs px-2 py-1 pixel-border">
                  {card.rarity}
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTShowcase;
