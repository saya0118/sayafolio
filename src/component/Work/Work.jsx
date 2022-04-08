import React, { useEffect, useState } from "react";
import styles from "./Work.module.css";

export const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > -50 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.work}>
      <div className={styles['work-container']}>
        <div className={styles["section-title"]}>
          <h1 className={styles["title"]}>WORKS</h1>
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
                React/Redux/SASS(SCSS)/Material UI/MongoDB
              </p>
              <h3 className={styles["project-title"]}>WellBingo</h3>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                fugit sit fuga dignissimos. Expedita ipsa nobis et molestias id
                aspernatur? Aliquam iusto eveniet ea enim voluptatum praesentium
                reprehenderit cumque quidem.
              </p>
              <div>
                <a href="" className={styles["project-link"]}>
                  LIVE
                </a>
                <a href="" className={styles["project-link"]}>
                  CODE
                </a>
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
                TypeScript/React Hooks/CSS modules
              </p>
              <h3 className={styles["project-title"]}>Sayabucks</h3>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                fugit sit fuga dignissimos. Expedita ipsa nobis et molestias id
                aspernatur? Aliquam iusto eveniet ea enim voluptatum praesentium
                reprehenderit cumque quidem.
              </p>
              <div>
                <a href="" className={styles["project-link"]}>
                  LIVE
                </a>
                <a href="" className={styles["project-link"]}>
                  CODE
                </a>
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
                TypeScript/React Hooks/Tailwind.css/Google API/Unsplash API
              </p>
              <h3 className={styles["project-title"]}>Voyage Notes</h3>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                fugit sit fuga dignissimos. Expedita ipsa nobis et molestias id
                aspernatur? Aliquam iusto eveniet ea enim voluptatum praesentium
                reprehenderit cumque quidem.
              </p>
              <div>
                <a href="" className={styles["project-link"]}>
                  LIVE
                </a>
                <a href="" className={styles["project-link"]}>
                  CODE
                </a>
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
                React/React Hooks/CSS Modules/firebase
              </p>
              <h3 className={styles["project-title"]}>Sayafolio</h3>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                fugit sit fuga dignissimos. Expedita ipsa nobis et molestias id
                aspernatur? Aliquam iusto eveniet ea enim voluptatum praesentium
                reprehenderit cumque quidem.
              </p>
              <div>
                <a href="" className={styles["project-link"]}>
                  LIVE
                </a>
                <a href="" className={styles["project-link"]}>
                  CODE
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
