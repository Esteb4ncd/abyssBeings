'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Hotspot from './components/Hotspot';
import { oceanZones, creatures } from './data/creatures';
import styles from './page.module.css';

export default function Home() {
  // Focused zones: Midnight (bathypelagic), The Abyss (abyssopelagic), The Trenches (hadalpelagic)
  const focusedZones = [
    { id: 'bathypelagic', label: 'Midnight Zone', color: '#001133' },
    { id: 'abyssopelagic', label: 'The Abyss', color: '#000722' },
    { id: 'hadalpelagic', label: 'The Trenches', color: '#000000' },
  ];

  const [activeZone, setActiveZone] = useState(focusedZones[0].id);
  const [showSidebar, setShowSidebar] = useState(false);
  const zoneRefs = useRef({});

  useEffect(() => {
    // Create refs for each zone
    focusedZones.forEach(zone => {
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
      setShowSidebar(window.scrollY > window.innerHeight * 0.6);

      for (let i = focusedZones.length - 1; i >= 0; i--) {
        const zone = focusedZones[i];
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

  const getCreatureImagePath = (zoneId) => {
    const imageMap = {
      'bathypelagic': '/creatures/blackDragonFish.svg',
      'abyssopelagic': '/creatures/dumbooOctopus.svg',
      'hadalpelagic': '/creatures/stalkedCrinoid.svg',
    };
    return imageMap[zoneId] || null;
  };

  const getPrimaryCreatureForZone = (zoneId) => {
    if (zoneId === 'bathypelagic') {
      const dragon = creatures.find(c => c.name.toLowerCase().includes('dragon'));
      return dragon || { id: 'black-dragonfish', name: 'Black Dragonfish', scientificName: '', depth: '1000-3000m', adaptations: '', image: '🐉', description: 'Large placeholder for Black Dragonfish.' };
    }
    if (zoneId === 'abyssopelagic') {
      const dumbo = creatures.find(c => c.name.toLowerCase().includes('dumbo'));
      return dumbo || { id: 'dumbo-octopus', name: 'Dumbo Octopus', scientificName: '', depth: '3000-7000m', adaptations: '', image: '🐙', description: 'Large placeholder for Dumbo Octopus.' };
    }
    if (zoneId === 'hadalpelagic') {
      const hadalFeature =
        creatures.find(c => c.id === 'stalked-crinoid') ||
        creatures.find(c => c.name.toLowerCase().includes('crinoid')) ||
        creatures.find(c => c.zone === 'hadalpelagic');
      return hadalFeature || { id: 'stalked-crinoid', name: 'Stalked Crinoid', scientificName: '', depth: '6500-8000m', adaptations: '', image: '🌼', description: 'Large placeholder for Stalked Crinoid.' };
    }
    return null;
  };

  const zoneFacts = {
    bathypelagic: [
      'No sunlight reaches here — perpetual darkness',
      'Pressure can exceed 100–400 atm',
      'Bioluminescence is common for hunting and signaling',
    ],
    abyssopelagic: [
      'Near-freezing temperatures year-round',
      'Food is scarce; many species are scavengers',
      'Life moves slowly to conserve energy',
    ],
    hadalpelagic: [
      'Deep ocean trenches beyond 6000 m',
      'Immense pressure > 600 atm',
      'Species are highly specialized and rarely observed',
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainLayout}>
        {/* Left Sidebar Navigation */}
        <aside className={`${styles.sidebar} ${showSidebar ? '' : styles.sidebarHidden}`}>
          <div className={styles.sidebarContent}>
            <h2 className={styles.sidebarTitle}>Ocean Zones</h2>
            <nav className={styles.zoneNav}>
              {focusedZones.map((zone) => (
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
                    <span className={styles.zoneNavName}>{zone.label}</span>
                    <span className={styles.zoneNavDepth}>{(oceanZones.find(z => z.id === zone.id) || {}).depth}</span>
                  </div>
                  <div 
                    className={styles.zoneNavIndicator}
                    style={{ background: zone.color }}
                  />
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Scrollable Content */}
        <main className={`${styles.mainContent} ${showSidebar ? '' : styles.mainContentFull}`}>
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
          {focusedZones.map((zone, zoneIndex) => {
            const baseZone = oceanZones.find(z => z.id === zone.id);
            const primary = getPrimaryCreatureForZone(zone.id);
            const darkness = Math.min(0.3 + zoneIndex * 0.25, 0.85);
            return (
              <section
                key={zone.id}
                id={zone.id}
                className={styles.zoneSection}
                style={{ 
                  borderTopColor: zone.color,
                  background: `linear-gradient(180deg, rgba(0,0,0,${darkness}) 0%, transparent 100%)`
                }}
              >
                <div className={styles.zoneGrid}>
                  {/* Left: Zone info and hotspots */}
                  <div className={styles.zoneLeft}>
                    <div className={styles.zoneHeaderContainer}>
                      <div className={styles.zoneHeader}>
                        <div 
                          className={styles.zoneIndicator}
                          style={{ background: zone.color }}
                        />
                        <h2 className={styles.zoneTitle}>{zone.label}</h2>
                        <div className={styles.zoneMeta}>
                          <span className={styles.zoneDepth}>{baseZone?.depth}</span>
                        </div>
                      </div>
                      <div className={styles.zoneDescriptionDropdown}>
                        <p className={styles.zoneDescription}>{baseZone?.description}</p>
                      </div>
                    </div>
                    <div className={styles.zoneVisual}>
                      <div 
                        className={styles.zoneBackground}
                        style={{ background: zone.color }}
                      >
                        {/* Placeholder hotspots with short facts */}
                        {(zoneFacts[zone.id] || []).slice(0, 3).map((fact, i) => (
                          <Hotspot
                            key={i}
                            x={[25, 65, 45][i]}
                            y={[30, 50, 75][i]}
                            info={fact}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Single Large Creature SVG */}
                  <div className={styles.zoneRight}>
                    {primary && (
                      <div className={styles.featuredCreature}>
                        <div className={styles.featuredIcon}>
                          <Image
                            src={getCreatureImagePath(zone.id)}
                            alt={primary.name}
                            width={600}
                            height={600}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            priority
                          />
                        </div>
                        <div className={styles.featuredInfo}>
                          <h3 className={styles.featuredName}>
                            {primary.name}
                          </h3>
                          <p className={styles.featuredMeta}>{primary.scientificName || '—'}</p>
                          <p className={styles.featuredDepth}>Depth: {primary.depth}</p>
                          <p className={styles.featuredDescription}>{primary.description || 'Large placeholder graphic area — custom illustration to be added.'}</p>
                        </div>
                      </div>
                    )}
                  </div>
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
