import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string; // Adding color as a prop
  width?: string; // Adding width as a prop
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  width,
  ...props
}) => {
  const buttonColor =
    color === "red"
      ? "bg-red-700"
      : color === "gray"
      ? "bg-gray-700"
      : "bg-cyan-700"; // Setting the button color based on the prop or default
  const buttonWidth = width || "auto"; // Using the provided width or defaulting to 'auto'

  return (
    <button
      className={`px-4 py-2 flex w-${buttonWidth} justify-center whitespace-nowrap items-center space-x-2 rounded-md text-white ${buttonColor}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

// import React, { ButtonHTMLAttributes } from "react";

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   color?: string; // Adding color as a prop
// };

// const Button: React.FC<ButtonProps> = ({ children, color, ...props }) => {
//   const buttonColor = color === "red" ? `bg-red-700` : "bg-cyan-700"; // Setting the button color based on the prop or default

//   return (
//     <button
//       className={`px-4 py-2 flex  w-full justify-center whitespace-nowrap items-center space-x-2 rounded-md text-white ${buttonColor}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
