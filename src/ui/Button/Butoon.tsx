import React from "react";
import type { IconType } from "react-icons";
import "./style.css";

// 1. Defina a interface para as props
interface ButtonProps {
  children: React.ReactNode;
  icon?: IconType;
  onClick?: () => void;
}

// 2. Aplique a interface ao seu componente
const Button = ({ children, icon: Icon, onClick }: ButtonProps) => {
  return (
    <button className="btn-geral" onClick={onClick}>
      {children}
      {Icon && <Icon className="btn-icon" />}
    </button>
  );
};

export default Button;
