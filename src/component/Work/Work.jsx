import React, { useEffect, useState } from "react";
import styles from "./Work.module.css";
import { Button } from "../Button";
import { useColor } from "../Context/Context";
import imgPortfolio from "../../image/work-portfolio.svg";
import imgSayabucks from "../../image/sayabucks.svg";
import imgWellbingo from "../../image/wellbingo.svg";
import imgSearchPics from "../../image/search-pics.svg";
import imgCommingSoon from "../../image/comming-soon.png";

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
                React | Redux | SCSS | Material UI | MongoDB | Express.js
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
                  href="https://silver-malasada-4fc0ae.netlify.app/"
                />
                <Button
                  size="small"
                  text="DETAIL"
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
                TypeScript, CSS modules, and Cypress for testing. This project
                made me understanding grid and flexbox layout more and enhanced
                my 'design to code' skill. Moreover, I got used to testing on
                Cypress thanks to this project.
              </p>
              <div className={styles["link-container"]}>
                <Button
                  size="small"
                  text="LIVE"
                  href="https://funny-empanada-bbcd3a.netlify.app/"
                />
                <Button
                  size="small"
                  text="DETAIL"
                  href="https://github.com/saya0118/sayabucks"
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
                src={imgSearchPics}
                alt="search pics"
              />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                React | React Hooks | Redux | SCSS | Material UI | Unsplash API |
                Responsive Design
              </p>
              <h3 className={styles["project-title"]}>Search Pics</h3>
              <p className={styles["project-description"]}>
                This app is the first project that I used React/Redux for the
                first time. I used Redux to make the favorite function and store
                the data.
              </p>
              <div className={styles["link-container"]}>
                <Button size="small" text="LIVE" href="https://search-photos-one.vercel.app/" />
                <Button
                  size="small"
                  text="DETAIL"
                  href="https://github.com/saya0118/sayafolio"
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
                src={imgCommingSoon}
                alt="voyage note"
              />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                Node.js | React | React Hooks | Tailwind.css | Mapbox | Unsplash
                API | MongoDB | Express
              </p>
              <h3 className={styles["project-title"]}>Voyage Note</h3>
              <p className={styles["project-description"]}>
                This is a travel pinning app using unsplah API and Mapbox so that
                users can see how many countries they've been so far at a
                glance. I'm still working on creating a few more functions.
              </p>
              <div className={styles["link-container"]}>
                <Button size="small" text="LIVE" href="#" />
                <Button
                  size="small"
                  text="DETAIL"
                  href="https://github.com/saya0118/voyage-notes"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
