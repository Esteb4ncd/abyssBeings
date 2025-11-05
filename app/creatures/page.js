'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { creatures, oceanZones } from '../data/creatures';
import styles from './page.module.css';

export default function CreaturesPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('all');

  const filteredCreatures = filter === 'all' 
    ? creatures 
    : creatures.filter(c => c.zone === filter);

  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Deep Sea Creatures</h1>
          <p className={styles.subtitle}>
            Discover the bizarre and fascinating creatures that call the deep ocean home.
            Each has unique adaptations that allow them to survive in extreme conditions.
          </p>
        </div>

        {/* Filter Section */}
        <div className={styles.filterSection}>
          <button
            className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Creatures
          </button>
          {oceanZones.map((zone) => (
            <button
              key={zone.id}
              className={`${styles.filterButton} ${filter === zone.id ? styles.active : ''}`}
              onClick={() => setFilter(zone.id)}
            >
              {zone.name}
            </button>
          ))}
        </div>

        {/* Creatures Grid */}
        <div className={styles.creaturesGrid}>
          {filteredCreatures.map((creature, index) => {
            const zone = oceanZones.find(z => z.id === creature.zone);
            return (
              <div
                key={creature.id}
                className={styles.creatureCard}
                onClick={() => router.push(`/creature/${creature.id}`)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={styles.creatureHeader}>
                  <div className={styles.creatureIcon}>{creature.image}</div>
                  <div
                    className={styles.zoneBadge}
                    style={{ background: zone?.color || '#0066FF' }}
                  >
                    {zone?.name.split(' ')[0]}
                  </div>
                </div>
                <div className={styles.creatureContent}>
                  <h2 className={styles.creatureName}>{creature.name}</h2>
                  <p className={styles.creatureScientific}>{creature.scientificName}</p>
                  <p className={styles.creatureDepth}>Depth: {creature.depth}</p>
                  <p className={styles.creatureDescription}>{creature.description}</p>
                  <div className={styles.adaptations}>
                    <strong>Key Adaptations:</strong> {creature.adaptations}
                  </div>
                  <button className={styles.exploreButton}>
                    Explore Creature →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{creatures.length}</div>
            <div className={styles.statLabel}>Creatures Featured</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>{new Set(creatures.map(c => c.zone)).size}</div>
            <div className={styles.statLabel}>Ocean Zones Covered</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Real Scientific Data</div>
          </div>
        </section>
      </main>
    </div>
  );
}


