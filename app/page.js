'use client';

import { useEffect, useRef, useState } from 'react';
import Navigation from './components/Navigation';
import Hotspot from './components/Hotspot';
import { oceanZones, creatures } from './data/creatures';
import styles from './page.module.css';

export default function Home() {
  const [activeZone, setActiveZone] = useState('epipelagic');
  const zoneRefs = useRef({});

  useEffect(() => {
    // Create refs for each zone
    oceanZones.forEach(zone => {
      zoneRefs.current[zone.id] = document.getElementById(zone.id);
    });
  }, []);

  const scrollToZone = (zoneId) => {
    const element = document.getElementById(zoneId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveZone(zoneId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = oceanZones.length - 1; i >= 0; i--) {
        const zone = oceanZones[i];
        const element = document.getElementById(zone.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveZone(zone.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCreaturesForZone = (zoneId) => {
    return creatures.filter(c => c.zone === zoneId);
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.mainLayout}>
        {/* Left Sidebar Navigation */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <h2 className={styles.sidebarTitle}>Ocean Zones</h2>
            <nav className={styles.zoneNav}>
              {oceanZones.map((zone) => (
                <button
                  key={zone.id}
                  className={`${styles.zoneNavButton} ${activeZone === zone.id ? styles.active : ''}`}
                  onClick={() => scrollToZone(zone.id)}
                  style={{ 
                    borderLeftColor: zone.color,
                    color: activeZone === zone.id ? zone.color : '#b0e0ff'
                  }}
                >
                  <div className={styles.zoneNavInfo}>
                    <span className={styles.zoneNavName}>{zone.name}</span>
                    <span className={styles.zoneNavDepth}>{zone.depth}</span>
                  </div>
                  <div 
                    className={styles.zoneNavIndicator}
                    style={{ background: zone.color }}
                  />
                </button>
              ))}
            </nav>
            <div className={styles.sidebarFooter}>
              <a href="/references" className={styles.referencesLink}>
                References →
              </a>
            </div>
          </div>
        </aside>

        {/* Main Scrollable Content */}
        <main className={styles.mainContent}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMain}>Abyss Beings</span>
              <span className={styles.titleSub}>Explore the Depths</span>
            </h1>
            <p className={styles.heroDescription}>
              Journey into the mysterious world of the deep sea, where bizarre creatures
              thrive in complete darkness under crushing pressure. Discover the ocean's
              strangest and most exotic lifeforms that have adapted to survive in the
              most extreme environments on Earth.
            </p>
          </section>

          {/* Zone Sections */}
          {oceanZones.map((zone, zoneIndex) => {
            const zoneCreatures = getCreaturesForZone(zone.id);
            
            return (
              <section
                key={zone.id}
                id={zone.id}
                className={styles.zoneSection}
                style={{ 
                  borderTopColor: zone.color,
                  background: `linear-gradient(180deg, ${zone.color}15 0%, transparent 100%)`
                }}
              >
                <div className={styles.zoneHeader}>
                  <div 
                    className={styles.zoneIndicator}
                    style={{ background: zone.color }}
                  />
                  <h2 className={styles.zoneTitle}>{zone.name}</h2>
                  <div className={styles.zoneMeta}>
                    <span className={styles.zoneDepth}>{zone.depth}</span>
                  </div>
                </div>

                <p className={styles.zoneDescription}>{zone.description}</p>

                {/* Zone Visual with Hotspots (Placeholders) */}
                <div className={styles.zoneVisual}>
                  <div 
                    className={styles.zoneBackground}
                    style={{ background: zone.color }}
                  >
                    {/* Placeholder hotspots - user will add custom graphics later */}
                    <Hotspot x={25} y={30} info="Hotspot placeholder - custom graphics coming soon" />
                    <Hotspot x={70} y={50} info="Hotspot placeholder - custom graphics coming soon" />
                    <Hotspot x={50} y={75} info="Hotspot placeholder - custom graphics coming soon" />
                  </div>
                </div>

                {/* Creatures in this Zone */}
                <div className={styles.creaturesGrid}>
                  {zoneCreatures.map((creature) => (
                    <div key={creature.id} className={styles.creatureCard}>
                      <div className={styles.creatureIcon}>{creature.image}</div>
                      <h3 className={styles.creatureName}>{creature.name}</h3>
                      <p className={styles.creatureScientific}>{creature.scientificName}</p>
                      <p className={styles.creatureDepth}>Depth: {creature.depth}</p>
                      <p className={styles.creatureDescription}>{creature.description}</p>
                      <div className={styles.adaptations}>
                        <strong>Adaptations:</strong> {creature.adaptations}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {/* Footer */}
          <footer className={styles.footer}>
            <p>Abyss Beings - Interactive Deep Sea Exploration</p>
            <a href="/references" className={styles.footerLink}>View References</a>
          </footer>
        </main>
      </div>
    </div>
  );
}
