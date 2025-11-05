'use client';

import { useState } from 'react';
import styles from './Hotspot.module.css';

export default function Hotspot({ x, y, info, delay = 0 }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={styles.hotspotContainer}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`
      }}
    >
      <button
        className={`${styles.hotspot} ${isActive ? styles.active : ''}`}
        onClick={() => setIsActive(!isActive)}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        aria-label="Interactive hotspot"
      >
        <span className={styles.pulse}></span>
        <span className={styles.dot}></span>
      </button>
      {isActive && (
        <div className={styles.infoBox}>
          <p>{info}</p>
        </div>
      )}
    </div>
  );
}

