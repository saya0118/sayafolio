import React from "react";
import ProfileImage from "../../image/profile.png";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles["title-container"]}>
        <h1 className={styles["title"]}>Who is Saya?</h1>
      </div>
      <div className={styles.container}>
        <p>
          Hi! I'm Saya.
          <br />
          I'm a React developer based in Vancouver. I was born in Seoul, South
          Korea and grown up in Tokyo, Japan. Challenging and creating new
          things have been my favorite since my childhood. Therefore, I've tried
          to learn Ukulele, piano and also I've traveled 15 countries by myself
          when I was in university.
          <br />I learned agriculture development in the university and I was
          supposed to go to the graduated college in the UK after graduated.
          However, I had to change my plan due to these days situation. Here's
          what I thought then. "Well, I've been interested in creating a website
          but it's a bit difficult to change my career until now. Is it good
          timing to change my career and jump into the unknown world?" That's
          how I started to get in the world of programming.
        </p>
        <div className={styles.image}>
          <img src={ProfileImage} className={styles["profile-image"]} alt="profile image"/>
        </div>
      </div>
    </div>
  );
};
