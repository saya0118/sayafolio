import React from "react";
import styles from "./Social.module.css";
import { useColor } from "../Context/Context";
import iconGithub from "../../image/brown-github.svg";
import iconLinkedin from "../../image/brown-linkedin.svg";
import iconMail from "../../image/brown-mail.svg";
import darkGithub from "../../image/github-dark.svg";
import darkLinkedin from "../../image/linkedin-dark.svg";
import darkMail from "../../image/mail-dark.svg";

export const Social = () => {
  const darkMode = useColor();
  const themeStyles = {
    backgroundColor: darkMode
      ? "var(--dark-bg-color)"
      : "var(--main-color-beige)",
    color: darkMode ? "white" : "var(--main-color-charcoal",
  };
  return (
    <div className={styles.social}>
      <ul className={styles["social-ul"]}>
        <li className={styles["social-list"]}>
          <a
            className={styles["social-link"]}
            href="https://www.linkedin.com/in/sayaka-matsuda-659338211/"
          />
          <button style={themeStyles} className={styles["social-button"]}>
            <img
              className={styles["social-img"]}
              src={darkMode ? darkLinkedin : iconLinkedin}
              alt="linked in"
            />
          </button>
        </li>
        <li className={styles["social-list"]}>
          <a target="_blank" href="https://github.com/saya0118">
            <button style={themeStyles} className={styles["social-button"]}>
              <img
                className={styles["social-img"]}
                src={darkMode ? darkGithub : iconGithub}
                alt="github"
              />
            </button>
          </a>
        </li>
        <li className={styles["social-list"]}>
          <a
            target="_blank"
            onClick={() => (window.location = "mailto:chemi0802@gmail.com")}
          >
            <button
              style={themeStyles}
              className={styles["social-button"]}
              type="button"
            >
              <img
                className={styles["social-img"]}
                src={darkMode ? darkMail : iconMail}
                alt="gmail"
              />
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};
