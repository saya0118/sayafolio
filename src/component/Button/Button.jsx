import React from "react";
import styles from "./Button.module.css";
import { useColor } from "../Context/Context";

export const Button = ({ text, href, size }) => {
  const darkMode = useColor();
  return (
    <div className={styles["resume-button"]}>
      <a
        className={`${styles["resume-link"]} ${styles[size]} ${
          darkMode ? styles["resume-link-dark"] : styles["resume-link-light"]
        }`}
        href={href}
      >
        <span className={styles["resume-title"]}>{text}</span>
      </a>
    </div>
  );
};
