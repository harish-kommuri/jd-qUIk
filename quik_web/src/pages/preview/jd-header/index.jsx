import React from 'react';

import styles from "./Comp.module.css"

const Button = ({
  variant = 'default',
  size = 'md',
  disabled = false,
  children,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-gray-800 text-white hover:bg-gray-700',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        inline-block rounded font-medium transition-colors
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${styles.button}  // Optional: Add CSS Module for specific styles
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`
        p-4 bg-white rounded shadow
        ${styles.card}  // Optional: Add CSS Module for specific styles
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const Layout = () => {
  return (
    <div className="max-w-md mx-auto my-10">
      <Card className="mb-6">
        <h2 className="text-xl font-bold mb-2">Welcome</h2>
        <p className="mb-4">This is a reusable layout using composed components.</p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card>

      <Card className="bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Features</h3>
        <ul className="list-disc pl-5">
          <li>Scoped styles with CSS Modules</li>
          <li>Utility-first design with Tailwind</li>
          <li>Reusable, composable components</li>
        </ul>
      </Card>
    </div>
  );
};

export default Layout;
