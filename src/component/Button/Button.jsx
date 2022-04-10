import React from "react";
import styles from "./Button.module.css";
import { useColor } from "../Context/Context";

export const Button = ({text}) => {
  const darkMode = useColor();
  return (
    <div className={styles["resume-button"]}>
      <a
        className={`${styles["resume-link"]} ${
          darkMode ? styles["resume-link-dark"] : styles["resume-link-light"]
        }`}
        href="#"
      >
        <span className={styles["resume-title"]}>{text}</span>
      </a>
    </div>
  );
};
