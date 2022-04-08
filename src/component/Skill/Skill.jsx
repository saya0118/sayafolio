import React from "react";
import styles from "./Skill.module.css";
import IconHtml from "../../image/html.svg";
import IconCss from "../../image/css.svg";
import IconSass from "../../image/sass.svg";
import IconJS from "../../image/js.svg";
import IconTS from "../../image/ts.svg";
import IconReact from "../../image/react.svg";
import IconGit from "../../image/git.svg";
import IconGithub from "../../image/github.svg";
import IconJquery from "../../image/jquery.svg";
import IconRedux from "../../image/redux.svg";
import IconMongodb from "../../image/mongodb.svg";
import IconNodejs from "../../image/nodejs.svg";
import IconTrello from "../../image/trello.svg";
import IconFigma from "../../image/figma.svg";
import IconTailwind from "../../image/tailwind.svg";
import IconFirebase from "../../image/firebase.svg";
import IconMysql from "../../image/mysql.svg";

export const Skill = () => {
  return (
    <div className={styles.skill}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.flex}>
        <div className={styles["skill-section"]}>
          <h2 className={styles["skill-title"]}>Languages</h2>
          <div className={styles["skill-flex"]}>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconHtml} />
              <h5 className={styles["skill-name"]}>HTML</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconCss} />
              <h5 className={styles["skill-name"]}>CSS</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconJS} />
              <h5 className={styles["skill-name"]}>JavaScript</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconTS} />
              <h5 className={styles["skill-name"]}>TypeScript</h5>
            </div>
          </div>
        </div>
        <div className={styles["skill-section"]}>
          <h2 className={styles["skill-title"]}>Flameworks/Libraries</h2>
          <div className={styles["skill-flex"]}>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconReact} />
              <h5 className={styles["skill-name"]}>React</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconRedux} />
              <h5 className={styles["skill-name"]}>Redux</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconSass} />
              <h5 className={styles["skill-name"]}>Sass</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconTailwind} />
              <h5 className={styles["skill-name"]}>Tailwind.css</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconJquery} />
              <h5 className={styles["skill-name"]}>jQuery</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconNodejs} />
              <h5 className={styles["skill-name"]}>Node.js</h5>
            </div>
          </div>
        </div>
        <div className={styles["skill-section"]}>
          <h2 className={styles["skill-title"]}>Others</h2>
          <div className={styles["skill-flex"]}>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconMongodb} />
              <h5 className={styles["skill-name"]}>MongoDB</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconMysql} />
              <h5 className={styles["skill-name"]}>MySQL</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconGit} />
              <h5 className={styles["skill-name"]}>Git</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconGithub} />
              <h5 className={styles["skill-name"]}>Github</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconFigma} />
              <h5 className={styles["skill-name"]}>Figma</h5>
            </div>
            <div className={styles["skill-item"]}>
              <img className={styles.img} src={IconTrello} />
              <h5 className={styles["skill-name"]}>Trello</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
