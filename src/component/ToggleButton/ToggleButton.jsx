import React from "react";
import styles from "./ToggleButton.module.css";
import { useColor, useToggleColor } from "../Context/Context";

export const ToggleButton = () => {
    const toggleColor = useToggleColor();
    const color = useColor();
  return (
    <div className={styles["toggle-button"]}>
      <input id="toggle" className={styles["toggle-input"]} type="checkbox" />
      <label onClick={toggleColor} htmlFor="toggle" className={styles["toggle-label"]} />
    </div>
  );
};
