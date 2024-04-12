import { FC, ReactNode } from "react";
import styles from "./Form.module.scss";

type FormProps = {
  onSubmit: () => void;
  children: ReactNode;
};
export const Form: FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
