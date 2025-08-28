import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция для закрытия мобильного меню при клике на ссылку
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center z-10">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">{'{ }'}</span>
              </div>
              <span className="text-white font-bold text-xl">
                Front<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Dev</span>
              </span>
            </a>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Главная</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">Услуги</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors font-medium">Мои работы</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">Опыт и образование</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">Контакты</a>
          </nav>

          {/* Кнопка связи для десктопа */}
          <div className="hidden lg:block">
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:from-blue-600 hover:to-purple-700"
            >
              Связаться
            </a>
          </div>

          {/* Мобильное меню - кнопка гамбургер */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none z-10"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Мобильное меню (раскрывающееся) */}
        <div className={`lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
            <a 
              href="#" 
              className="text-2xl text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={handleNavClick}
            >
              Главная
            </a>
            <a 
              href="#services" 
              className="text-2xl text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={handleNavClick}
            >
              Услуги
            </a>
            <a 
              href="#portfolio" 
              className="text-2xl text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={handleNavClick}
            >
              Портфолио
            </a>
            <a 
              href="#about" 
              className="text-2xl text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={handleNavClick}
            >
              Обо мне
            </a>
            <a 
              href="#contact" 
              className="text-2xl text-gray-300 hover:text-white transition-colors font-medium py-2"
              onClick={handleNavClick}
            >
              Контакты
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg text-center mt-6 text-xl"
              onClick={handleNavClick}
            >
              Обсудить проект
            </a>
          </div>
          
          {/* Кнопка закрытия в мобильном меню */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white p-2"
            aria-label="Закрыть меню"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;