import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="py-4 mb-8">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold tracking-wider">
          <span className="text-white">M</span>
          <span className="text-white">Y</span>
          <span> </span>
          <span className="text-white">P</span>
          <span className="text-white">O</span>
          <span className="text-white">R</span>
          <span className="text-white">T</span>
          <span className="text-white">F</span>
          <span className="text-white">O</span>
          <span className="text-white">L</span>
          <span className="text-white">I</span>
          <span className="text-white">O</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => <li key={item} className="hover:text-green-400 transition-colors">
                <a href={`#${item.toLowerCase()}`} className="px-1 py-1 border-b-2 border-transparent hover:border-green-400">
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden p-2 border-2 border-green-400 text-green-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-3">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => <li key={item} className="hover:text-green-400 transition-colors border-2 border-green-400 p-2">
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block">
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>}
    </header>;
}