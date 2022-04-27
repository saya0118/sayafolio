import React, { useEffect, useState } from "react";
import styles from "./Work.module.css";
import { Button } from "../Button";
import { useColor } from "../Context/Context";
import imgPortfolio from "../../image/work-portfolio.svg";
import imgSayabucks from "../../image/sayabucks.svg";
import imgWellbingo from "../../image/wellbingo.svg";

export const Work = () => {
  const darkMode = useColor();

  const [isVisible, setIsVisible] = useState(false);
  const themeStyle = {
    backgroundColor: darkMode
      ? "var(--dark-bg-color)"
      : "var(--main-color-mocha)",
  };
  const toggleVisibility = () => {
    window.scrollY > -50 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div style={themeStyle} className={styles.work} id="works">
      <div className={styles["work-container"]}>
        <div className={styles["section-title"]}>
          <h1
            className={`${styles["title"]} ${
              darkMode ? styles["title-name-dark"] : ""
            }`}
          >
            Works
          </h1>
        </div>
        <ul className={styles["project-ul"]}>
          <li
            className={`${styles["project-list"]} ${
              isVisible ? styles["animate-odd"] : ""
            } `}
          >
            <div className={styles["project-img-box"]}>
              <img
                className={styles["project-image"]}
                src={imgWellbingo}
                alt="wellbingo app"
              />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                React | Redux | SASS(SCSS) | Material UI | MongoDB | Express.js
                | Responsive Design
              </p>
              <h3 className={styles["project-title"]}>WellBingo</h3>
              <p className={styles["project-description"]}>
                I built a full stack MERN app which is combined a bingo game
                with a CRUD app. This app helps users to encourage to make a
                habit of daily tasks and keep their wellness in their minds.
              </p>
              <div className={styles["link-container"]}>
                <Button
                  size="small"
                  text="LIVE"
                  href="https://6260e8180645b6053b64c9ca--silver-malasada-4fc0ae.netlify.app/"
                />
                <Button
                  size="small"
                  text="CODE"
                  href="https://github.com/saya0118/WellBingo"
                />
              </div>
            </div>
          </li>
          <li
            className={`${styles["project-list"]} ${
              isVisible ? styles["animate-even"] : ""
            } `}
          >
            <div className={styles["project-img-box"]}>
              <img
                className={styles["project-image"]}
                src={imgSayabucks}
                alt="sayabucks"
              />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                TypeScript | React Hooks | CSS modules | Cypress | Responsive
                Design
              </p>
              <h3 className={styles["project-title"]}>Sayabucks</h3>
              <p className={styles["project-description"]}>
                I recreated the Starbucks landing page from scratch using React,
                TypeScript, CSS modules, and cypress for testing. This project made me
                understanding grid and flexbox layout more. Moreover, I
                got used to testing on Cypress because of it.
              </p>
              <div className={styles["link-container"]}>
                <Button
                  size="small"
                  text="LIVE"
                  href="https://6262f94941a7c221a24dce7b--funny-empanada-bbcd3a.netlify.app/"
                />
                <Button
                  size="small"
                  text="CODE"
                  href="https://github.com/saya0118/sayabucks"
                />
              </div>
            </div>
          </li>
          <li
            className={`${styles["project-list"]} ${
              isVisible ? styles["animate-odd"] : ""
            } `}
          >
            <div className={styles["project-img-box"]}>
              <img
                className={styles["project-image"]}
                src={imgPortfolio}
                alt="voyage note"
              />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                TypeScript | React Hooks | Tailwind.css | Google API | Unsplash
                API
              </p>
              <h3 className={styles["project-title"]}>Voyage Note</h3>
              <p className={styles["project-description"]}>
                This is a travel app using unsplah API and google API so that
                users can see how many countries they've been so far at a
                glance. I'm still working on creating a few more functions.
              </p>
              <div className={styles["link-container"]}>
                <Button size="small" text="LIVE" href="#" />
                <Button
                  size="small"
                  text="CODE"
                  href="https://github.com/saya0118/voyage-notes"
                />
              </div>
            </div>
          </li>
          <li
            className={`${styles["project-list"]} ${
              isVisible ? styles["animate-even"] : ""
            } `}
          >
            <div className={styles["project-img-box"]}>
              <img
                className={styles["project-image"]}
                src={imgPortfolio}
                alt="saya's portfolio"
              />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                React | React Hooks | CSS Modules | Firebase | Nodemailer |
                Responsive Design
              </p>
              <h3 className={styles["project-title"]}>Sayafolio</h3>
              <p className={styles["project-description"]}>
                This portfolio website has a day/night mode which shows my
                favorite motto, "Balance work and private life". I tried to use
                both of ways of Firebase and Nodemailer fot the contact form as
                a practice.
              </p>
              <div className={styles["link-container"]}>
                <Button
                  size="small"
                  text="CODE"
                  href="https://github.com/saya0118/sayafolio"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
