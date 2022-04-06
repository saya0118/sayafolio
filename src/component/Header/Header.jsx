import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.header}>
        <div className={styles['nav-bar']}>
            <ul>
              <li className={styles['nav-left']}><a>Sayaka Matsuda</a></li>
              <li><a>HOME</a></li>
              <li><a>ABOUT</a></li>
              <li><a>WORKS</a></li>
              <li><a>SKILLS</a></li>
              <li><a>CONTACT</a></li>
            </ul>
        </div>
        <div className={styles['app-header']}>
          <p className={styles['greeting']}>Hi there, I'm Saya!<br/>React Developer based in Vancouver</p>
        </div>
      </div>
    )
}
