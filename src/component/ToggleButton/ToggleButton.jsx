import React from 'react';
import styles from './ToggleButton.module.css';

export const ToggleButton = () => {
    return (
        <div className={styles['toggle-button']}>
            <input id="toggle" className={styles['toggle-input']} type="checkbox"/>
            <label for="toggle" className={styles['toggle-label']}/>
        </div>
    )
}
