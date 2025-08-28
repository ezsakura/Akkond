import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Анимированный фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Текстовый контент */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Создаём инновационные 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"> веб-интерфейсы</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Превращаем ваши идеи в современные, отзывчивые и высокопроизводительные веб-приложения с безупречным пользовательским опытом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Обсудить проект
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Посмотреть работы
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">React & Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Адаптивный дизайн</span>
              </div>
            </div>
          </div>
          
          {/* Визуальный элемент */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-blue-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="text-purple-400 font-mono text-sm mb-2">// Пример кода</div>
                  <div className="text-blue-400 font-mono text-sm">{`<Button`}</div>
                  <div className="text-gray-400 font-mono text-sm ml-4">{`variant="primary"`}</div>
                  <div className="text-gray-400 font-mono text-sm ml-4">{`onClick={handleAction}`}</div>
                  <div className="text-blue-400 font-mono text-sm">{`>`}</div>
                  <div className="text-gray-200 font-mono text-sm ml-4">{`Создать проект`}</div>
                  <div className="text-blue-400 font-mono text-sm">{`</Button>`}</div>
                </div>
                
                <div className="flex justify-center">
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg">
                    Запустить демо
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;