'use client';

import { useState } from 'react';
import styles from './Hotspot.module.css';

export default function Hotspot({ x, y, info, delay = 0 }) {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isClicked) {
      setIsActive(false);
      setIsClicked(false);
    } else {
      setIsActive(true);
      setIsClicked(true);
    }
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsActive(false);
    }
  };

  // Determine info box position based on hotspot location
  const getInfoBoxPosition = () => {
    // If hotspot is in upper half, show info box below
    // If hotspot is in lower half, show info box above
    return y < 50 ? 'bottom' : 'top';
  };

  const infoBoxPosition = getInfoBoxPosition();

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`Fun fact: ${info}`}
        type="button"
      >
        <span className={styles.pulse}></span>
        <span className={styles.dot}></span>
      </button>
      {isActive && (
        <div className={`${styles.infoBox} ${styles[infoBoxPosition]}`}>
          <p>{info}</p>
        </div>
      )}
    </div>
  );
}

