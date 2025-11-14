import React, { useState, useRef, useEffect } from "react";

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const projects = [
    {
      title: "Корпоративный сайт",
      category: "Веб-разработка",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Интернет-магазин",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Мобильное приложение",
      category: "React Native",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Панель управления",
      category: "Dashboard",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Блог платформа",
      category: "Content Management",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Лендинг страница",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  // Модальное окно
  const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
      if (isOpen) {
        closeTimeoutRef.current = setTimeout(() => {
          onClose();
        }, 2000);
      }
      return () => {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
        }
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fadeIn"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl shadow-2xl px-8 py-7 min-w-[300px] max-w-[90vw] animate-modalPop relative"
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-900 transition-colors"
            onClick={onClose}
            aria-label="Закрыть"
            type="button"
          >
            &times;
          </button>
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Данный раздел еще в разработке</h2>
            <p className="text-gray-600">Пожалуйста, зайдите позже!</p>
          </div>
        </div>
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s;
            }
            @keyframes modalPop {
              0% { transform: scale(0.8); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
            .animate-modalPop {
              animation: modalPop 0.35s cubic-bezier(.68,-0.55,.27,1.55);
            }
          `}
        </style>
      </div>
    );
  };

  const handleShowAllClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Мои <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">работы</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Посмотрите примеры моих проектов, где я применял современные технологии и подходы к разработке.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300">{project.category}</p>
                <button className="mt-4 px-4 py-2 bg-white text-gray-900 font-medium rounded-lg self-start">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            onClick={handleShowAllClick}
          >
            Смотреть все работы
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default PortfolioSection