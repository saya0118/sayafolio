import React from "react";
import { useHamburger, useToggleHamburger } from "../Context/Context";
import { useColor } from "../Context/Context";
import styles from "./Hamburger.module.css";

export const Hamburger = () => {
  const darkMode = useColor();
  const openHamburger = useHamburger();
  const toggleHamburger = useToggleHamburger();
  return (
    <div className={styles.navbar} onClick={toggleHamburger}>
      <div
        className={`${styles.hamburger} ${openHamburger ? styles.active : ""}`}
      >
        <span
          className={`${styles.bar} ${
            darkMode ? styles["dark-bar"] : styles["light-bar"]
          }`}
        ></span>
        <span className={`${styles.bar} ${
            darkMode ? styles["dark-bar"] : styles["light-bar"]
          }`}></span>
        <span className={`${styles.bar} ${
            darkMode ? styles["dark-bar"] : styles["light-bar"]
          }`}></span>
      </div>
    </div>
  );
};
