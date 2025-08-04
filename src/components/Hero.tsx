import React from 'react';
export function Hero() {
  return <section id="home" className="py-16 border-4 border-green-400 mb-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-green-400">HELLO</span> WORLD!
            </h1>
            <h2 className="text-3xl font-bold">
              I'M <span className="text-green-400">PIXEL DEVELOPER</span>
            </h2>
          </div>
          <p className="mb-8 text-gray-300">
            Crafting pixel-perfect web experiences with a retro twist. Frontend
            developer specializing in creative, 8-bit inspired interfaces.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="px-6 py-3 bg-green-400 text-black font-bold hover:bg-green-300 transition-colors">
              CONTACT ME
            </a>
            <a href="#projects" className="px-6 py-3 border-2 border-green-400 text-green-400 font-bold hover:bg-green-400 hover:text-black transition-colors">
              MY WORK
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-48 h-48 bg-green-400 relative">
            {/* Pixel art avatar - simple representation */}
            <div className="absolute inset-2 bg-black"></div>
            <div className="absolute top-8 left-8 w-8 h-8 bg-green-400"></div>
            <div className="absolute top-8 right-8 w-8 h-8 bg-green-400"></div>
            <div className="absolute bottom-12 left-12 right-12 h-4 bg-green-400"></div>
          </div>
        </div>
      </div>
    </section>;
}