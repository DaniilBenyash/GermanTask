import { FC } from "react";
import styles from "./Button.module.scss";
import { Button as ButtonUI } from "../../../../ui-kit";

type ButtonProps = {
  type: "desktop" | "mobile";
  onClick: () => void;
};

export const Button: FC<ButtonProps> = ({ type, onClick }) => {
  if (type === "desktop") {
    return (
      <div className={styles.desktop_button}>
        <ButtonUI type="default" onClick={onClick}>
          NEUER EINTRAG
        </ButtonUI>
      </div>
    );
  }
  if (type === "mobile") {
    return (
      <div className={styles.mobile_button}>
        <ButtonUI type="default_mobile" onClick={onClick}>
          +
        </ButtonUI>
      </div>
    );
  }
};
