import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="py-8 mt-16 border-t-2 border-green-400">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          
        </div>
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 border-2 border-green-400 flex items-center justify-center hover:bg-green-400 hover:text-black transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="#" className="w-10 h-10 border-2 border-green-400 flex items-center justify-center hover:bg-green-400 hover:text-black transition-colors">
            <TwitterIcon size={20} />
          </a>
          <a href="#" className="w-10 h-10 border-2 border-green-400 flex items-center justify-center hover:bg-green-400 hover:text-black transition-colors">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </footer>;
}