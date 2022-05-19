import React from "react";
import ProfileImage from "../../image/profile.png";
import styles from "./Profile.module.css";
import { Social } from "../Social";
import { Button } from "../Button";
import { useColor } from "../Context/Context";

export const Profile = () => {
  const darkMode = useColor();
  return (
    <div className={styles.profile} id="about">
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src={ProfileImage}
            className={
              darkMode ? styles["profile-dark"] : styles["profile-light"]
            }
            alt="profile image"
          />
        </div>
        <div className={styles["profile-text"]}>
          <h1
            className={`${styles["title"]} ${
              darkMode ? styles["title-name-dark"] : ""
            }`}
          >
            About me
          </h1>
          <p className={styles["profile-description"]}>
            Hi! I'm Saya.
            <br />
            I'm a <b>React developer</b> who has an appetite for continuously
            growth and impact. I always take the harder way because I believe
            that the right decisions are usually the harder ones, but at the same
            time I can always find enjoyments and excitements in any difficult
            situation. I'm super excited about working in a team and making a
            huge impact on society together!
          </p>
          <div className={styles["profile-mobile"]}>
            <Social />
            <Button
              size="normal"
              text="Resume"
              href="https://docs.google.com/document/d/e/2PACX-1vR0ijGuENX1qqQK0O4ZPrUL8hN8DfbnOXkVTT6AXU43XiL8P0f98KBg_KDaiVsD_LyqmlbnBN8o9pHH/pub"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
