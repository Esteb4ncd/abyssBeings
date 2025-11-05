'use client';

import { useRouter } from 'next/navigation';
import Navigation from '../components/Navigation';
import { oceanZones } from '../data/creatures';
import styles from './page.module.css';

export default function ZonesPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Ocean Zones</h1>
          <p className={styles.subtitle}>
            Explore the different layers of the ocean, each with unique conditions
            and incredible creatures adapted to survive there.
          </p>
        </div>

        <div className={styles.zonesGrid}>
          {oceanZones.map((zone, index) => (
            <div
              key={zone.id}
              className={styles.zoneCard}
              onClick={() => router.push(`/zone/${zone.id}`)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={styles.zoneColorBar}
                style={{ background: zone.color }}
              ></div>
              <div className={styles.zoneContent}>
                <h2 className={styles.zoneName}>{zone.name}</h2>
                <div className={styles.zoneDepth}>{zone.depth}</div>
                <p className={styles.zoneDescription}>{zone.description}</p>
                <div className={styles.zoneIcon}>
                  {index === 0 && '☀️'}
                  {index === 1 && '🌅'}
                  {index === 2 && '🌑'}
                  {index === 3 && '❄️'}
                  {index === 4 && '⚫'}
                </div>
                <button className={styles.exploreButton}>
                  Explore Zone →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive depth visualization */}
        <div className={styles.depthVisualization}>
          <h2 className={styles.sectionTitle}>Depth Comparison</h2>
          <div className={styles.depthChart}>
            {oceanZones.map((zone, index) => (
              <div
                key={zone.id}
                className={styles.depthBar}
                style={{
                  background: `linear-gradient(180deg, ${zone.color} 0%, ${zone.color}dd 100%)`,
                  height: `${100 / oceanZones.length}%`,
                  animationDelay: `${index * 0.2}s`,
                }}
                onClick={() => router.push(`/zone/${zone.id}`)}
              >
                <div className={styles.depthLabel}>
                  <span>{zone.name}</span>
                  <span>{zone.depth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


