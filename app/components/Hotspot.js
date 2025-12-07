'use client';

import { useState } from 'react';
import styles from './Hotspot.module.css';

export default function Hotspot({ x, y, info, delay = 0 }) {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setIsActive(false);
      setIsClicked(false);
    } else {
      setIsActive(true);
      setIsClicked(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsActive(false);
    }
  };

  return (
    <div
      className={`${styles.hotspotContainer} ${isActive ? styles.paused : ''}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`
      }}
    >
      <button
        className={`${styles.hotspot} ${isActive ? styles.active : ''}`}
        onClick={handleClick}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={handleMouseLeave}
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

