import { FC } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  email: string;
  onClick: () => void;
};
export const Card: FC<CardProps> = ({ title, email, onClick }) => {
  return (
    <button className={styles.card} onClick={onClick}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{email}</p>
    </button>
  );
};
