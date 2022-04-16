import React, { useEffect, useState } from "react";
import styles from "./Work.module.css";
import { Button } from "../Button";
import { useColor } from "../Context/Context";
import imgPortfolio from '../../image/work-portfolio.svg'

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
    <div style={themeStyle} className={styles.work}>
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
              <img className={styles["project-image"]} src="" alt="" />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                React | Redux | SASS(SCSS) | Material UI | MongoDB | Responsive
                Design
              </p>
              <h3 className={styles["project-title"]}>WellBingo</h3>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                fugit sit fuga dignissimos. Expedita ipsa nobis et molestias id
                aspernatur? Aliquam iusto eveniet ea enim voluptatum praesentium
                reprehenderit cumque quidem.
              </p>
              <div className={styles["link-container"]}>
                <Button size="small" text="LIVE" href="#" />
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
              <img className={styles["project-image"]} src="" alt="" />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                TypeScript | React Hooks | CSS modules | Responsive Design
              </p>
              <h3 className={styles["project-title"]}>Sayabucks</h3>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                fugit sit fuga dignissimos. Expedita ipsa nobis et molestias id
                aspernatur? Aliquam iusto eveniet ea enim voluptatum praesentium
                reprehenderit cumque quidem.
              </p>
              <div className={styles["link-container"]}>
                <Button size="small" text="LIVE" href="#" />
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
              <img className={styles["project-image"]} src="" alt="" />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                TypeScript | React Hooks | Tailwind.css | Google API | Unsplash
                API
              </p>
              <h3 className={styles["project-title"]}>Voyage Notes</h3>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                fugit sit fuga dignissimos. Expedita ipsa nobis et molestias id
                aspernatur? Aliquam iusto eveniet ea enim voluptatum praesentium
                reprehenderit cumque quidem.
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
              <img className={styles["project-image"]} src={imgPortfolio} alt="" />
            </div>
            <div className={styles["project-description-box"]}>
              <p className={styles["project-language"]}>
                React | React Hooks | CSS Modules | firebase | Responsive Design
              </p>
              <h3 className={styles["project-title"]}>Sayafolio</h3>
              <p className={styles["project-description"]}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam consequuntur sunt rem a ab sequi. Architecto
                necessitatibus provident aliquid voluptatum qui. Commodi
                voluptas aut repellat. Assumenda totam sint quas dolores.
              </p>
              <div className={styles["link-container"]}>
                <Button size="small" text="LIVE" href="#" />
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
