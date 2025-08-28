import React from 'react'

const SkillsSection = () => {
  const skills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 82 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Node.js", level: 75 },
    { name: "Git", level: 88 }
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
    { name: "Webpack", icon: "📦" },
    { name: "Jest", icon: "🧪" },
    { name: "Photoshop", icon: "🖼️" },
    { name: "GitHub", icon: "🐙" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Технологии и <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">навыки</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Инструменты и технологии, которые я использую для создания качественных и современных веб-приложений.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-8">Технические навыки</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-8">Инструменты</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-xl p-4 border border-gray-700 text-center hover:bg-gray-700 transition-colors">
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <div className="text-gray-300 font-medium">{tool.name}</div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-8">Дополнительные навыки</h3>
            <div className="flex flex-wrap gap-3">
              {["Английский B2", "Командная работа", "Agile/Scrum", "UI/UX дизайн", "Оптимизация SEO", "Кроссбраузерность"].map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-gray-800 bg-opacity-40 backdrop-blur-md text-gray-300 rounded-full border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection