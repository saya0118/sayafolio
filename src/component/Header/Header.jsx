import React from "react";
import styles from "./Header.module.css";
import lightLogo from "../../image/light-logo.svg";
import darkLogo from "../../image/dark-logo.svg";
import flowerGif from "../../image/flower.gif";
import techImg from "../../image/tech.svg";
import { useColor } from "../Context/Context";
import { ToggleButton } from "../ToggleButton";
import { Social } from "../Social";
import { Button } from "../Button";
import { Hamburger } from "../Hamburger";
import { SlidePage } from "../SlidePage";

export const Header = () => {
  const darkMode = useColor();
  return (
    <div className={styles.header}>
      <div className={styles["nav-bar"]}>
        <div className={styles["nav-left"]}>
          <ul className={`${styles["w-sh"]} ${styles["ul-flex"]}`}>
            <li>
              <img
                src={darkMode ? darkLogo : lightLogo}
                alt="sayaka's logo"
                className={styles.logo}
              />
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
          <div className={styles["hamburger-menu"]}>
            <Hamburger />
          </div>
          <ul className={`${styles["w-lo"]} ${styles["ul-flex"]}`}>
            <li>
              <a
                className={
                  darkMode
                    ? styles["underline-dark"]
                    : styles["underline-light"]
                }
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={
                  darkMode
                    ? styles["underline-dark"]
                    : styles["underline-light"]
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                className={
                  darkMode
                    ? styles["underline-dark"]
                    : styles["underline-light"]
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={
                  darkMode
                    ? styles["underline-dark"]
                    : styles["underline-light"]
                }
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className={
                  darkMode
                    ? styles["underline-dark"]
                    : styles["underline-light"]
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SlidePage />
      <div className={styles["greeting-container"]}>
        <div className={styles["greeting"]}>
          <h2 className={styles["greeting-title"]}>
            <span
              className={
                darkMode
                  ? styles["title-word-dark"]
                  : `${styles["title-word"]} ${styles["title-word-1"]}`
              }
            >
              Hello{" "}
            </span>
            <span
              className={
                darkMode
                  ? styles["title-word-dark"]
                  : `${styles["title-word"]} ${styles["title-word-2"]}`
              }
            >
              World!{" "}
            </span>
            <span
              className={
                darkMode
                  ? styles["title-word-dark"]
                  : `${styles["title-word"]} ${styles["title-word-3"]}`
              }
            >
              I'm{" "}
            </span>
            <span
              className={
                darkMode
                  ? styles["title-name-dark"]
                  : `${styles["title-word"]} ${styles["title-word-4"]}`
              }
            >
              Saya.
            </span>
          </h2>
          <p className={styles["greeting-description"]}>
            A Frontend Developer based in Vancouver.
          </p>
          <div className={styles["mobile-centre"]}>
            <Social />
            <Button size="normal" text="Resume" href="#" />
          </div>
          <div className={styles["gif-container"]}>
            <img
              src={darkMode ? techImg : flowerGif}
              className={darkMode ? styles["dark-img"] : styles.gif}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
