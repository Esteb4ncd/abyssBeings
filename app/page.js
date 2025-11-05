'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        {/* Animated background particles */}
        <div className={styles.particleContainer}>
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={styles.particle}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>Abyss Beings</span>
              <span className={styles.titleSub}>Explore the Depths</span>
            </h1>
            <p className={styles.heroDescription}>
              Journey into the mysterious world of the deep sea, where bizarre creatures
              thrive in complete darkness under crushing pressure. Discover the ocean's
              strangest and most exotic lifeforms that have adapted to survive in the
              most extreme environments on Earth.
            </p>
            <div className={styles.ctaButtons}>
              <button
                className={styles.primaryButton}
                onClick={() => router.push('/zones')}
              >
                Explore Ocean Zones
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() => router.push('/creatures')}
              >
                Meet the Creatures
              </button>
            </div>
          </div>

          {/* Interactive deep sea visual */}
          <div className={styles.deepSeaVisual}>
            <div className={styles.waterLayer}></div>
            <div className={styles.midLayer}></div>
            <div className={styles.deepLayer}></div>
            <div className={styles.creatureFloating} style={{ animationDelay: '0s' }}>
              🐟
            </div>
            <div className={styles.creatureFloating} style={{ animationDelay: '2s' }}>
              🦑
            </div>
            <div className={styles.creatureFloating} style={{ animationDelay: '4s' }}>
              🐙
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>70%</div>
            <div className={styles.statLabel}>of Earth covered by ocean</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>of ocean remains unexplored</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>6000m+</div>
            <div className={styles.statLabel}>deepest ocean trenches</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>1000+</div>
            <div className={styles.statLabel}>species discovered each year</div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className={styles.factsSection}>
          <h2 className={styles.sectionTitle}>Did You Know?</h2>
          <div className={styles.factsGrid}>
            <div className={styles.factCard}>
              <div className={styles.factIcon}>💡</div>
              <h3>Bioluminescence</h3>
              <p>
                Most deep-sea creatures produce their own light through bioluminescence,
                creating a living light show in the darkness.
              </p>
            </div>
            <div className={styles.factCard}>
              <div className={styles.factIcon}>🌡️</div>
              <h3>Extreme Conditions</h3>
              <p>
                Creatures at 6000m depth survive pressures 600 times greater than at
                sea level and temperatures near freezing.
              </p>
            </div>
            <div className={styles.factCard}>
              <div className={styles.factIcon}>👁️</div>
              <h3>Unique Adaptations</h3>
              <p>
                Many deep-sea creatures have developed transparent bodies, expandable
                jaws, and otherworldly appearances to survive.
              </p>
            </div>
            <div className={styles.factCard}>
              <div className={styles.factIcon}>🔬</div>
              <h3>Scientific Discovery</h3>
              <p>
                New species are constantly being discovered, with many having
                adaptations that challenge our understanding of life.
              </p>
            </div>
          </div>
        </section>

        {/* Ocean Layers Preview */}
        <section className={styles.layersPreview}>
          <h2 className={styles.sectionTitle}>Journey Through the Depths</h2>
          <div className={styles.layersContainer}>
            <div className={styles.layerCard} onClick={() => router.push('/zone/epipelagic')}>
              <div className={styles.layerColor} style={{ background: '#0066FF' }}></div>
              <h3>Epipelagic</h3>
              <p>0-200m • Sunlit Zone</p>
            </div>
            <div className={styles.layerCard} onClick={() => router.push('/zone/mesopelagic')}>
              <div className={styles.layerColor} style={{ background: '#003D99' }}></div>
              <h3>Mesopelagic</h3>
              <p>200-1000m • Twilight Zone</p>
            </div>
            <div className={styles.layerCard} onClick={() => router.push('/zone/bathypelagic')}>
              <div className={styles.layerColor} style={{ background: '#001133' }}></div>
              <h3>Bathypelagic</h3>
              <p>1000-4000m • Midnight Zone</p>
            </div>
            <div className={styles.layerCard} onClick={() => router.push('/zone/abyssopelagic')}>
              <div className={styles.layerColor} style={{ background: '#000722' }}></div>
              <h3>Abyssopelagic</h3>
              <p>4000-6000m • Abyssal Zone</p>
            </div>
            <div className={styles.layerCard} onClick={() => router.push('/zone/hadalpelagic')}>
              <div className={styles.layerColor} style={{ background: '#000000' }}></div>
              <h3>Hadalpelagic</h3>
              <p>6000m+ • Hadal Zone</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
