import React from "react";
import styles from "./App.module.css";
import { useColor } from "../Context/Context";
import { Header } from "../Header";
import { Profile } from "../Profile";
import { Skill } from "../Skill";
import { Work } from "../Work";
import { Contact } from "../Contact";

export function App() {
  const darkMode = useColor();
  const themeStyles = {
    backgroundColor: darkMode
      ? "var(--dark-bg-color)"
      : "var(--main-color-beige)",
    color: darkMode ? "white" : "var(--main-color-charcoal)",
    fontFamily: darkMode ? "'Cairo', sans-serif" : "'Exo 2', sans-serif",
    letterSpacing: darkMode ? '1px' : '',
  };
  return (
    <div style={themeStyles} className={styles.app}>
      <Header />
      <Profile />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}
