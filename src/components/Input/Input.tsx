import { DetailedHTMLProps, forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...props }, ref) => (
    <div className={styles.container}>
      <input
        placeholder={placeholder}
        ref={ref}
        className={styles.input}
        {...props}
      />
      <label className={styles.label}>{placeholder}</label>
    </div>
  ),
);
