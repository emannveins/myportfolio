import React from 'react';
import { CodeIcon, UserIcon, CoffeeIcon } from 'lucide-react';
export function About() {
  return <section id="about" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-green-400 pl-4">
        ABOUT ME
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-green-400 p-4 hover:bg-green-400 hover:text-black transition-colors group">
          <div className="flex justify-center mb-4">
            <UserIcon size={40} className="group-hover:text-black text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">WHO I AM</h3>
          <p className="text-center">
            A passionate backend developer with a love for cybersecurity and
            modern technologies.
          </p>
        </div>
        <div className="border-2 border-green-400 p-4 hover:bg-green-400 hover:text-black transition-colors group">
          <div className="flex justify-center mb-4">
            <CodeIcon size={40} className="group-hover:text-black text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">WHAT I DO</h3>
          <p className="text-center">
            I build functional, softwares and applications with a
            focus on user experience.
          </p>
        </div>
        <div className="border-2 border-green-400 p-4 hover:bg-green-400 hover:text-black transition-colors group">
          <div className="flex justify-center mb-4">
            <CoffeeIcon size={40} className="group-hover:text-black text-green-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">HOBBIES</h3>
          <p className="text-center">
            When not coding, I enjoy gaming, etichal hacking, and exploring new technologies.
          </p>
        </div>
      </div>
      <div className="mt-8 p-6 border-2 border-green-400">
        <p className="mb-4">
          I'm a backend developer with 2+ years of experience building softwares and security systems.
          My journey began with a fascination for the early days
          of the internet and video games, which influences my 
          approach to modern software development.
        </p>
        <p>
          I believe in clean code, accessible designs, and the perfect balance
          between minimal charm and contemporary functionality. For me every project
          is an opportunity to create something both beautiful and functional.
        </p>
      </div>
    </section>;
}