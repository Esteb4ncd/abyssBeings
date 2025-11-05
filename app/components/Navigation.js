'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/zones', label: 'Ocean Zones' },
    { path: '/creatures', label: 'All Creatures' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <button 
          className={styles.logo}
          onClick={() => router.push('/')}
        >
          Abyss Beings
        </button>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`${styles.navLink} ${pathname === item.path ? styles.active : ''}`}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}


