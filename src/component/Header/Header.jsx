import React from "react";
import styles from "./Header.module.css";
import svgLogo from "../../image/logo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["nav-bar"]}>
        <div className={styles["nav-left"]}>
          <ul>
            <li>
              <img src={svgLogo} alt="sayaka's logo" className={styles.logo} />
            </li>
            <li>
              <p>Sayaka Matsuda</p>
            </li>
          </ul>
        </div>
        <div className={styles["nav-right"]}>
          <ul>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
            <li>
              <a>WORKS</a>
            </li>
            <li>
              <a>SKILLS</a>
            </li>
            <li>
              <a>CONTACT</a>
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
