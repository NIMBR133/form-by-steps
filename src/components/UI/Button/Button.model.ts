import { ButtonHTMLAttributes, MouseEvent } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  width?: string | number;
  onClick: (e: MouseEvent) => void;
  view?: TViewButton;
}

export const ViewButton = {
  PRIMARY: "primary",
  OUTLINE: "outline",
} as const;
type TViewButton = (typeof ViewButton)[keyof typeof ViewButton];
