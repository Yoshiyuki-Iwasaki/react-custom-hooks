import React, { ReducerAction } from "react";
import { ButtonLayout } from "./style";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
};

export default Button;
