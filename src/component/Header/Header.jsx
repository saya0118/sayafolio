import React from "react";
import styles from "./Header.module.css";
import svgLogo from "../../image/light-logo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["nav-bar"]}>
        <div className={styles["nav-left"]}>
          <ul className={styles['w-sh']}>
            <li>
              <img src={svgLogo} alt="sayaka's logo" className={styles.logo} />
            </li>
            <li>
              <p className={styles.name}>Sayaka Matsuda</p>
            </li>
          </ul>
        </div>
        <div className={styles["nav-right"]}>
          <ul className={styles['w-lo']}>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["greeting-container"]}>
        <p className={styles["greeting"]}>
          Hi there, I'm Saya!
          <br />
          Frontend Developer based in Vancouver
        </p>
      </div>
    </div>
  );
};
