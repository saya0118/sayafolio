import React from "react";
import styles from "./Social.module.css";
import iconGithub from "../../image/brown-github.svg";
import iconLinkedin from "../../image/brown-linkedin.svg";
import iconMail from "../../image/brown-mail.svg";

export const Social = () => {
  return (
    <div className={styles.social}>
      <ul className={styles["social-ul"]}>
        <li className={styles["social-list"]}>
          <button className={styles["social-button"]}>
            <img
              className={styles["social-img"]}
              src={iconLinkedin}
              alt="linked in"
            />
            <a className={styles["social-link"]} href="" />
          </button>
        </li>
        <li className={styles["social-list"]}>
          <a target="_blank" href="https://github.com/saya0118">
            <button className={styles["social-button"]}>
              <img
                className={styles["social-img"]}
                src={iconGithub}
                alt="github"
              />
            </button>
          </a>
        </li>
        <li className={styles["social-list"]}>
          <a target="_blank" onClick={() => window.location = 'mailto:chemi0802@gmail.com'}>
            <button className={styles["social-button"]} type="button">
              <img
                className={styles["social-img"]}
                src={iconMail}
                alt="gmail"
              />
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};
