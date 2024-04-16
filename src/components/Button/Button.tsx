import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren, ComponentProps } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

interface ButtonProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "default_mobile";
}

export const Button: FC<ButtonProps> = ({ variant = "default", className, ...props }) => {
  const combinedClassName = cn(styles.button, styles[`button_${variant}`], className);
  return (
    <button {...props} className={combinedClassName} />
  );
};
