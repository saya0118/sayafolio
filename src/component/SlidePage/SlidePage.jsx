import React from "react";
import styles from "./SlidePage.module.css";
import { useHamburger } from "../Context/Context";
import { useColor } from "../Context/Context";

export const SlidePage = () => {
  const openHamburger = useHamburger();
  const darkMode = useColor();
  return (
    <div
      className={`${styles["slide-page"]} ${openHamburger ? styles.open : ""} ${
        darkMode ? styles["dark-slide-page"] : styles["light-slide-page"]
      }`}
    >
      <ul className={styles["items-ul"]}>
        <li className={styles["items-list"]}>
          <a className={styles["items-link"]}>Home</a>
        </li>
        <li className={styles["items-list"]}>
          <a className={styles["items-link"]}>About</a>
        </li>
        <li className={styles["items-list"]}>
          <a className={styles["items-link"]}>Projects</a>
        </li>
        <li className={styles["items-list"]}>
          <a className={styles["items-link"]}>Skills</a>
        </li>
        <li className={styles["items-list"]}>
          <a className={styles["items-link"]}>Contact</a>
        </li>
      </ul>
    </div>
  );
};
