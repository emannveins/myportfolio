import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Projects() {
  const projects = [{
    title: 'Retro Game Hub',
    description: 'A collection of 8-bit style browser games built with JavaScript and Canvas API.',
    tags: ['JavaScript', 'HTML5 Canvas', 'CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500&h=300'
  }, {
    title: 'Pixel Weather App',
    description: 'Weather forecast application with pixel art animations for different weather conditions.',
    tags: ['React', 'Weather API', 'Animation'],
    imageUrl: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=500&h=300'
  }, {
    title: '8-Bit Portfolio',
    description: 'A retro-styled portfolio template for developers with customizable themes.',
    tags: ['TypeScript', 'React', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=500&h=300'
  }];
  return <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-green-400 pl-4">
        MY PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => <div key={index} className="border-2 border-green-400 overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-green-400">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="text-xs px-2 py-1 bg-green-400 text-black">
                    {tag}
                  </span>)}
              </div>
              <div className="flex space-x-3">
                <a href="#" className="flex items-center text-sm hover:text-green-400">
                  <GithubIcon size={16} className="mr-1" /> Code
                </a>
                <a href="#" className="flex items-center text-sm hover:text-green-400">
                  <ExternalLinkIcon size={16} className="mr-1" /> Demo
                </a>
              </div>
            </div>
          </div>)}
      </div>
    </section>;
}