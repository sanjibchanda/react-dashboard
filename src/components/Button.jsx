// components/ui/Button.jsx
import React from "react";

const Button = ({
  children,
  variant = "default",
  size = "base",
  className = "",
  ...props
}) => {
  const baseStyles = "rounded px-5 py-2 font-medium transition duration-200";

  const variantStyles = {
    default: "bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  const defaultClass =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  return (
    <button className={defaultClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
