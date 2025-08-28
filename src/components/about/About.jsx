import React from 'react'
import img from '../img/hero.jpg'

const About = () => {
return (
<section className=" px-4 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
      {/* Текстовая часть */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">О нас</h2>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">Команда разработчиков</h3>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </p>
       
        <button className="px-10 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:-translate-y-1 transition-transform duration-300 shadow-md hover:shadow-lg">
          УЗНАТЬ БОЛЬШЕ
        </button>
      </div>

      {/* Галерея изображений */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-5">
        <div className="relative overflow-hidden rounded-xl h-72 group">
          <img 
            src={img} 
            alt="Процедура в салоне" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl h-72 group mt-8">
          <img 
            src={img} 
            alt="Процедура в салоне" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl h-72 group">
          <img 
            src={img} 
            alt="Процедура в салоне" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        
        <div className="relative overflow-hidden rounded-xl h-72 group mt-8">
          <img 
            src={img} 
            alt="Процедура в салоне" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About