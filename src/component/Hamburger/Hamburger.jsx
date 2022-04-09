import React, { useState } from 'react';
// import { OpenContext } from '../Context/OpenContext';
import styles from './Hamburger.module.css';

export const Hamburger = () => {
  // const open = useContext(OpenContext);
  const [open, setOpen] = useState(false);
  return (
    <div
      className={styles.navbar}
      onClick={() => setOpen(!open)}
    >
      <div
        className={`${styles.hamburger} ${open ? styles.active : ''}`}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
};