import React from 'react'


const ExperienceSection = () => {
  const experiences = [
    {
      year: "2022 - Настоящее время",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description: "Разработка сложных веб-приложений с использованием React, TypeScript и современных инструментов разработки."
    },
    {
      year: "2020 - 2022",
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      description: "Создание пользовательских интерфейсов для корпоративных клиентов, оптимизация производительности."
    },
    {
      year: "2018 - 2020",
      title: "Junior Web Developer",
      company: "WebStudio Pro",
      description: "Верстка сайтов по макетам, разработка компонентов на JavaScript, работа с CMS системами."
    }
  ];

  const education = [
    {
      year: "2014 - 2018",
      title: "Бакалавр Компьютерных наук",
      company: "Технический университет",
      description: "Факультет информационных технологий, специализация - веб-разработка."
    },
    {
      year: "2018 - 2020",
      title: "Магистр Инженерии программного обеспечения",
      company: "Технический университет",
      description: "Углубленное изучение архитектуры программного обеспечения и методов разработки."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Опыт и <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">образование</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Мой профессиональный путь и образование, которые сформировали меня как специалиста.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-8 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:mt-2">
              Опыт работы
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:w-6 before:h-6 before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 before:rounded-full">
                  <div className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                    <span className="text-blue-400 font-medium">{exp.year}</span>
                    <h4 className="text-xl font-bold text-white mt-2">{exp.title}</h4>
                    <p className="text-purple-300 font-medium">{exp.company}</p>
                    <p className="text-gray-300 mt-3">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-8 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:mt-2">
              Образование
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:w-6 before:h-6 before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 before:rounded-full">
                  <div className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                    <span className="text-blue-400 font-medium">{edu.year}</span>
                    <h4 className="text-xl font-bold text-white mt-2">{edu.title}</h4>
                    <p className="text-purple-300 font-medium">{edu.company}</p>
                    <p className="text-gray-300 mt-3">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection