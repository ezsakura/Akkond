import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_w260ctj', 'template_cjlrj28', e.target, 'mqcCry4eHBXeVpIzs')
    .then((result) => {
      alert('Сообщение отправлено!');
      onClose();
    }, (error) => {
      alert('Произошла ошибка. Попробуйте еще раз.');
    });
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30"></div>
        
        {/* Заголовок и кнопка закрытия */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">
            Обсудим ваш проект?
          </h2>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Как к вам обращаться?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Расскажите о вашем проекте..."
                required
              ></textarea>
            </div>
          </div>

          {/* Кнопки действия */}
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:from-blue-600 hover:to-purple-700"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;