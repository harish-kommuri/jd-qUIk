import React from 'react';
const Button = ({ children, variant = 'primary', size = 'medium', disabled = false, onClick, className = '', ...props }) => {
    const baseClasses = "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
        ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500" };
        const sizeClasses = { small: "px-3 py-1.5 text-sm", medium: "px-4 py-2 text-base", large: "px-6 py-3 text-lg" };
        const disabledClasses = "opacity-50 cursor-not-allowed";
        const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? disabledClasses : ''} ${className}`
        
        return (<button className={classes} onClick={onClick} disabled={disabled} {...props} > {children} </button>);
};

export default Button;
