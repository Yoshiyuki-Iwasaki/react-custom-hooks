import React, { ReducerAction } from "react";
import { ButtonLayout } from "./style";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
};

export const ToggleButton: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonLayout onClick={onClick}>{children}</ButtonLayout>;
};
