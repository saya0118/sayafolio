import React from "react";
import styles from "./ResumeButton.module.css";
import { useColor } from "../Context/Context";

export const ResumeButton = () => {
  const darkMode = useColor();
  return (
    <div className={styles["resume-button"]}>
      <a
        className={`${styles["resume-link"]} ${
          darkMode ? styles["resume-link-dark"] : styles["resume-link-light"]
        }`}
        href="#"
      >
        <span className={styles["resume-title"]}>Resume</span>
      </a>
    </div>
  );
};
