import React from "react";
import styles from "./Header.module.css";
import svgLogo from "../../image/light-logo.svg";
import flowerGif from "../../image/flower.gif";
import { ToggleButton } from "../ToggleButton";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["nav-bar"]}>
        <div className={styles["nav-left"]}>
          <ul className={styles["w-sh"]}>
            <li>
              <img src={svgLogo} alt="sayaka's logo" className={styles.logo} />
            </li>
            <li>
              <p className={styles.name}>Sayaka Matsuda</p>
            </li>
            <li>
              <ToggleButton />
            </li>
          </ul>
        </div>
        <div className={styles["nav-right"]}>
          <ul className={styles["w-lo"]}>
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
        <div className={styles["greeting"]}>
          <div className={styles["animation-container"]}>
            <h2 className={styles["greeting-title"]}>
              <span
                className={`${styles["title-word"]} ${styles["title-word-1"]}`}
              >
                Hello{" "}
              </span>
              <span
                className={`${styles["title-word"]} ${styles["title-word-2"]}`}
              >
                World!{" "}
              </span>
              <span
                className={`${styles["title-word"]} ${styles["title-word-3"]}`}
              >
                I'm{" "}
              </span>
              <span
                className={`${styles["title-word"]} ${styles["title-word-4"]}`}
              >
                Saya.
              </span>
            </h2>
          </div>
          <p className={styles["greeting-description"]}>
            A Frontend Developer based in Vancouver.
          </p>
          <img src={flowerGif} className={styles.gif} />
        </div>
      </div>
    </div>
  );
};
