import React from "react";
import styles from "./App.module.css";
import { Header } from "./component/Header";
import { Profile } from "./component/Profile";
import { Skill } from "./component/Skill";
import { Work } from "./component/Work";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Profile />
      <Skill />
      <Work />
    </div>
  );
}

export default App;
