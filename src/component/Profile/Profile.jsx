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
            I'm a front-end developer who is currently pivoting my way into
            tech. My background in the hospitality industry and international
            agriculture education has given me the ability to be a diversified
            thinker, challenging and a team player. I'm a curious person who is
            never stop learning and also I can always find enjoyments there. I'm
            super looking for working in tech community and eager to improve my
            programming skills!
          </p>
          <div className={styles["profile-mobile"]}>
            <Social />
            <Button size="normal" text="Resume" href="#" />
          </div>
        </div>
      </div>
    </div>
  );
};
