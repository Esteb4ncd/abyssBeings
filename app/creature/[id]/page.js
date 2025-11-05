'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import Hotspot from '../../components/Hotspot';
import { creatures, oceanZones } from '../../data/creatures';
import styles from './page.module.css';

export default function CreaturePage() {
  const router = useRouter();
  const params = useParams();
  const [creature, setCreature] = useState(null);
  const [zone, setZone] = useState(null);
  const [activeFact, setActiveFact] = useState(0);

  useEffect(() => {
    const foundCreature = creatures.find(c => c.id === params.id);
    setCreature(foundCreature);
    
    if (foundCreature) {
      const foundZone = oceanZones.find(z => z.id === foundCreature.zone);
      setZone(foundZone);
    }
  }, [params.id]);

  useEffect(() => {
    if (creature && creature.facts.length > 0) {
      const interval = setInterval(() => {
        setActiveFact((prev) => (prev + 1) % creature.facts.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [creature]);

  if (!creature) {
    return (
      <div className={styles.container}>
        <Navigation />
        <main className={styles.main}>
          <p>Creature not found</p>
        </main>
      </div>
    );
  }

  const hotspots = [
    { x: 25, y: 40, info: creature.adaptations.split(',')[0] || 'Unique adaptation' },
    { x: 70, y: 50, info: `Lives at depths of ${creature.depth}` },
    { x: 50, y: 75, info: `Found in the ${zone?.name || 'deep sea'}` },
  ];

  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <button className={styles.backButton} onClick={() => router.push('/creatures')}>
          ← Back to Creatures
        </button>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.creatureVisual}>
            <div className={styles.creatureIcon}>{creature.image}</div>
            <div className={styles.visualBackground}>
              {hotspots.map((hotspot, index) => (
                <Hotspot
                  key={index}
                  x={hotspot.x}
                  y={hotspot.y}
                  info={hotspot.info}
                  delay={index * 0.3}
                />
              ))}
            </div>
          </div>
          <div className={styles.creatureInfo}>
            <div className={styles.zoneBadge} style={{ background: zone?.color || '#0066FF' }}>
              {zone?.name || 'Deep Sea'}
            </div>
            <h1 className={styles.title}>{creature.name}</h1>
            <p className={styles.scientificName}>{creature.scientificName}</p>
            <p className={styles.description}>{creature.description}</p>
            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Depth Range:</span>
                <span className={styles.metaValue}>{creature.depth}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Zone:</span>
                <span className={styles.metaValue}>{zone?.name || 'Unknown'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Facts Carousel */}
        <section className={styles.factsSection}>
          <h2 className={styles.sectionTitle}>Amazing Facts</h2>
          <div className={styles.factsCarousel}>
            {creature.facts.map((fact, index) => (
              <div
                key={index}
                className={`${styles.factCard} ${index === activeFact ? styles.active : ''}`}
                onClick={() => setActiveFact(index)}
              >
                <div className={styles.factNumber}>{index + 1}</div>
                <p className={styles.factText}>{fact}</p>
              </div>
            ))}
          </div>
          <div className={styles.factIndicators}>
            {creature.facts.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === activeFact ? styles.active : ''}`}
                onClick={() => setActiveFact(index)}
                aria-label={`Fact ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Adaptations Section */}
        <section className={styles.adaptationsSection}>
          <h2 className={styles.sectionTitle}>Key Adaptations</h2>
          <div className={styles.adaptationsGrid}>
            {creature.adaptations.split(', ').map((adaptation, index) => (
              <div key={index} className={styles.adaptationCard}>
                <div className={styles.adaptationIcon}>
                  {index === 0 && '💡'}
                  {index === 1 && '⚙️'}
                  {index === 2 && '🛡️'}
                  {index >= 3 && '✨'}
                </div>
                <h3 className={styles.adaptationName}>{adaptation}</h3>
                <p className={styles.adaptationDescription}>
                  {adaptation.includes('Bioluminescent') && 'The ability to produce light through chemical reactions, used for communication, hunting, and defense.'}
                  {adaptation.includes('pressure') && 'Specialized body structures that can withstand extreme pressure found in the deep ocean.'}
                  {adaptation.includes('expandable') && 'Flexible jaws and stomachs that allow consuming prey much larger than themselves.'}
                  {adaptation.includes('transparent') && 'Body structures that allow light or vision to pass through, providing unique advantages.'}
                  {adaptation.includes('slow') && 'Reduced metabolic rates to conserve energy in food-scarce environments.'}
                  {!adaptation.includes('Bioluminescent') && !adaptation.includes('pressure') && !adaptation.includes('expandable') && !adaptation.includes('transparent') && !adaptation.includes('slow') && 'A remarkable evolutionary trait that enables survival in extreme deep-sea conditions.'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Creatures */}
        <section className={styles.relatedSection}>
          <h2 className={styles.sectionTitle}>Creatures from the Same Zone</h2>
          <div className={styles.relatedGrid}>
            {creatures
              .filter(c => c.zone === creature.zone && c.id !== creature.id)
              .slice(0, 3)
              .map((relatedCreature) => (
                <div
                  key={relatedCreature.id}
                  className={styles.relatedCard}
                  onClick={() => router.push(`/creature/${relatedCreature.id}`)}
                >
                  <div className={styles.relatedIcon}>{relatedCreature.image}</div>
                  <h3 className={styles.relatedName}>{relatedCreature.name}</h3>
                  <p className={styles.relatedDescription}>{relatedCreature.description.substring(0, 100)}...</p>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}


