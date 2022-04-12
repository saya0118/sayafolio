import React, { useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import { useColor } from "../Context/Context";
import { Social } from "../Social";
import { db } from "./firebase";
import contactGif from "../../image/contact.gif";
import imgMoon from "../../image/moon.svg";
import { Button } from "../Button";

export const Contact = () => {
  const darkMode = useColor();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been sent to Saya!");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");

    sendMail();
  };

  const sendMail = () => {
    axios.post("https://us-central1-sayafolio.cloudfunctions.net/sendEmail", {
      name: "saya",
      email: "abc",
      message: "hello",
    });
  };

  return (
    <div className={styles.contact}>
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
          <a className={styles["contact-info"]}>chemi0802@gmail.com</a>
          <h2 className={styles["contact-title"]}>Phone</h2>
          <p className={styles["contact-info"]}>+1 7788725098</p>
          <Social />
          <Button text="Resume" size="normal" href="#" />
        </div>
        <div
          className={`${styles["contact-form"]} ${styles["contact-flex-inner"]}`}
        >
          <form
            className={styles["contact-form-container"]}
            onSubmit={handleSubmit}
          >
            <input
              className={styles["contact-input"]}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles["contact-input"]}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={`${styles["contact-input"]} ${styles["contact-message"]}`}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
