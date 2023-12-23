import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className=" px-4 py-2  bg-cyan-700 flex items-center space-x-2 rounded-md text-white "
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
