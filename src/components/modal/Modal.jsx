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

  // Notification component
  const Notification = ({ message, type, onClose }) => {
    return (
      <div
        className={`
          fixed top-6 right-6 z-[1100] 
          px-6 py-4 rounded-lg shadow-lg 
          text-white font-medium
          transition-all duration-500
          ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}
          animate-slideIn
        `}
        style={{ minWidth: '220px' }}
      >
        <div className="flex items-center justify-between gap-4">
          <span>{message}</span>
          <button
            className="ml-4 text-white text-lg font-bold hover:text-gray-200 transition"
            onClick={onClose}
            aria-label="Закрыть уведомление"
            type="button"
          >
            &times;
          </button>
        </div>
      </div>
    );
  };

  // Tailwind animation (add to your global CSS if not present)
  // .animate-slideIn {
  //   animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  // }
  // @keyframes slideInRight {
  //   0% { transform: translateX(120%); opacity: 0; }
  //   100% { transform: translateX(0); opacity: 1; }
  // }

  // Notification state and helpers
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(n => ({ ...n, show: false }));
    }, 3000);
  };

  const closeNotification = () => {
    setNotification(n => ({ ...n, show: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_w260ctj', 'template_cjlrj28', e.target, 'mqcCry4eHBXeVpIzs')
    .then(
      result => {
        showNotification('Сообщение отправлено!', 'success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          onClose();
        }, 1200);
      },
      error => {
        showNotification('Произошла ошибка. Попробуйте еще раз.', 'error');
      }
    );
};

  if (!isOpen) return null;

  return (
  <div
    className="fixed inset-0 w-screen h-screen bg-black/50 flex items-center justify-center z-[1000] animate-fadeIn"
    onClick={onClose}
  >
    {/* Notification */}
    {notification.show && (
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={closeNotification}
      />
    )}

    <div
      className="relative bg-white rounded-2xl shadow-2xl px-8 pt-9 pb-7 min-w-[340px] max-w-[90vw] min-h-[320px] animate-modalPop"
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-4.5 right-4.5 bg-transparent border-none text-[1.7rem] cursor-pointer text-gray-400 hover:text-gray-900 transition-colors"
        onClick={onClose}
        aria-label="Закрыть"
        type="button"
      >
        &times;
      </button>
      <h2 className="mb-4 font-bold text-[1.5rem] text-center text-gray-800 tracking-wide">
        Отправить сообщение
      </h2>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="font-medium mb-1">
          Имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-3 border border-gray-200 rounded-md text-base bg-gray-50 focus:border-indigo-500 focus:outline-none transition"
        />
        <label htmlFor="email" className="font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Ваш email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-3 border border-gray-200 rounded-md text-base bg-gray-50 focus:border-indigo-500 focus:outline-none transition"
        />
        <label htmlFor="message" className="font-medium mb-1">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Ваше сообщение"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mb-4 border border-gray-200 rounded-md text-base bg-gray-50 focus:border-indigo-500 focus:outline-none transition resize-none"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-md py-2 font-semibold text-lg w-full transition hover:from-cyan-400 hover:to-indigo-500"
        >
          Отправить
        </button>
      </form>
    </div>
    {/* Animations for fadeIn and modalPop */}
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
  
export default Modal;