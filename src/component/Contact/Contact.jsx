import React, { useEffect, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { useColor } from "../Context/Context";
import { Social } from "../Social";
import { db } from "./firebase";
import contactGif from "../../image/contact.gif";
import imgMoon from "../../image/moon.svg";
import { Button } from "../Button";

export const Contact = () => {
  const test = collection(db, "contacts");
  const darkMode = useColor();

  const form = useRef();

  useEffect(() => {
    getDocs(test).then((data) => {});
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.contact} id="contact">
      <h1
        className={`${styles["title"]} ${
          darkMode ? styles["title-name-dark"] : ""
        }`}
      >
        Say Hello
      </h1>
      <div className={styles["contact-flex"]}>
        <div className={styles["contact-flex-inner"]}>
          <img
            src={darkMode ? imgMoon : contactGif}
            className={darkMode ? styles["dark-img"] : styles["contact-gif"]}
          />
        </div>
        <div
          className={`${styles["contact-detail"]} ${styles["contact-flex-inner"]}`}
        >
          <h2 className={styles["contact-title"]}>Mail</h2>
          <a
            className={styles["contact-address"]}
            onClick={() => (window.location = "mailto:chemi0802@gmail.com")}
          >
            chemi0802@gmail.com
          </a>
          <h2 className={styles["contact-title"]}>Phone</h2>
          <p className={styles["contact-info"]}>+1 6722005098</p>
          <Social />
          <Button
            text="Resume"
            size="normal"
            href="https://docs.google.com/document/d/e/2PACX-1vR0ijGuENX1qqQK0O4ZPrUL8hN8DfbnOXkVTT6AXU43XiL8P0f98KBg_KDaiVsD_LyqmlbnBN8o9pHH/pub"
          />
        </div>
        <div
          className={`${styles["contact-form"]} ${styles["contact-flex-inner"]}`}
        >
          <form
            ref={form}
            className={styles["contact-form-container"]}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="user_name"
              className={styles["contact-input"]}
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className={styles["contact-input"]}
              placeholder="Email"
            />
            <textarea
              name="message"
              className={`${styles["contact-input"]} ${styles["contact-message"]}`}
              placeholder="Message"
            />
            <button className={styles["contact-button"]} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
      Designed and developed by Sayaka Matsuda 2022
    </div>
  );
};
