const QwenDoc1 = () => {
    return (
        `   
        Title:
Building Reusable Web Components in React Using CSS Modules and Tailwind CSS

Overview:
Modern React applications benefit from component-based architecture. To ensure maintainability, scalability, and styling isolation, developers combine React components with CSS Modules for scoped styles and Tailwind CSS for rapid utility-first design.

This document explains how to create reusable, styled web components using this powerful trio.

Why This Stack?
React
Component logic, state, props, lifecycle
CSS Modules
Scoped CSS to avoid class name collisions
Tailwind CSS
Rapid UI development via utility classes

💡 Best Practice: Use Tailwind for layout, spacing, colors; use CSS Modules for complex animations or component-specific overrides. 

Folder Structure Example:

src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   └── index.js
│   ├── Card/
│   │   ├── Card.jsx
│   │   ├── Card.module.css
│   │   └── index.js
├── styles/
│   └── globals.css
└── App.jsx


Sample Component:

jsx
// src/components/Button/Button.jsx
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled }) => {
  const baseClasses = `${styles.button} cursor-pointer rounded font-medium transition duration-200`;
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        disabled && 'opacity-50 cursor-not-allowed'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

CSS Module: 
/* src/components/Button/Button.module.css */
.button {
  /* Only use CSS Modules for non-Tailwind rules */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
}

.button:active {
  transform: translateY(1px);
}
        `
    );
}