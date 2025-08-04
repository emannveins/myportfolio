import React from 'react';
export function Skills() {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'];
  const toolsSkills = ['Git', 'Webpack', 'VS Code', 'Figma', 'Jest', 'npm'];
  return <section id="skills" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-green-400 pl-4">
        MY SKILLS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-2 border-green-400 p-4">
          <h3 className="text-xl font-bold mb-4 text-center text-green-400">
            FRONTEND
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {frontendSkills.map((skill, index) => <div key={index} className="flex items-center">
                <div className="w-4 h-4 bg-green-400 mr-2"></div>
                <span>{skill}</span>
              </div>)}
          </div>
        </div>
        <div className="border-2 border-green-400 p-4">
          <h3 className="text-xl font-bold mb-4 text-center text-green-400">
            TOOLS
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {toolsSkills.map((skill, index) => <div key={index} className="flex items-center">
                <div className="w-4 h-4 bg-green-400 mr-2"></div>
                <span>{skill}</span>
              </div>)}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-green-400">SKILL LEVELS</h3>
        <div className="space-y-4">
          {[{
          name: 'Frontend Development',
          level: 90
        }, {
          name: 'UI/UX Design',
          level: 75
        }, {
          name: 'Responsive Design',
          level: 95
        }, {
          name: 'Pixel Art',
          level: 80
        }].map((skill, index) => <div key={index}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-4 bg-gray-800 border-2 border-green-400">
                <div className="h-full bg-green-400" style={{
              width: `${skill.level}%`
            }}></div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}