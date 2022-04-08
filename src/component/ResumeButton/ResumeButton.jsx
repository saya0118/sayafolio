import React from "react";
import styles from "./ResumeButton.module.css";

export const ResumeButton = () => {
  return (
    <div className={styles["resume-button"]}>
      <a className={styles['resume-link']} href="#">
        <span className={styles['resume-title']}>Resume</span>
      </a>
    </div>
  );
};
