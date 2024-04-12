import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface ButtonProps extends PropsWithChildren {
  type?: "default" | "primary" | "secondary" | "default_mobile";
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ type = "default", onClick, children, disabled }) => {
  const className = cn(styles.button, {
    [styles.button_default]: type === "default",
    [styles.button_default_mobile]: type === "default_mobile",
    [styles.button_primary]: type === "primary",
    [styles.button_secondary]: type === "secondary",
  });
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
