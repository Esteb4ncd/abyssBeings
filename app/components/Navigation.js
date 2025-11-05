'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <button 
          className={styles.logo}
          onClick={() => {
            if (pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              router.push('/');
            }
          }}
        >
          Abyss Beings
        </button>
        <div className={styles.navLinks}>
          <button
            className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
            onClick={() => {
              if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                router.push('/');
              }
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </nav>
  );
}
