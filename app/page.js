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
  const [activeCreature, setActiveCreature] = useState(null);
  const zoneRefs = useRef({});
  const scrollTimeoutRef = useRef(null);

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
      const shouldShow = window.scrollY > window.innerHeight * 0.6;
      setShowSidebar(shouldShow);

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // If sidebar should be visible, show it
      if (shouldShow) {
        // Set timeout to hide after 4 seconds of no scrolling
        scrollTimeoutRef.current = setTimeout(() => {
          setShowSidebar(false);
        }, 4000);
      }

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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
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
      'Temperatures hover near freezing (2-4°C)',
      'Creatures have large eyes to detect bioluminescent prey',
      'Many species can produce their own light',
    ],
    abyssopelagic: [
      'Near-freezing temperatures year-round',
      'Food is scarce; many species are scavengers',
      'Life moves slowly to conserve energy',
      'Pressure reaches 400-600 atmospheres',
      'Most creatures are small and slow-moving',
      'Detritus from above provides primary food source',
    ],
    hadalpelagic: [
      'Deep ocean trenches beyond 6000 m',
      'Immense pressure > 600 atm',
      'Species are highly specialized and rarely observed',
      'Named after Hades, Greek god of the underworld',
      'Only the most extreme-adapted organisms survive',
      'Many species remain undiscovered by science',
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainLayout}>
        {/* Left Sidebar Navigation */}
        <aside className={`${styles.sidebar} ${showSidebar ? '' : styles.sidebarHidden}`}>
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
                title={zone.label}
              >
                <span className={styles.zoneNavName}>{zone.label}</span>
              </button>
            ))}
          </nav>
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
                {/* Hotspots that roam the entire zone */}
                <div className={styles.zoneHotspotsContainer}>
                  {(zoneFacts[zone.id] || []).map((fact, i) => {
                    const positions = [
                      [15, 20], [75, 25], [45, 40], [85, 55], [25, 65], [65, 80]
                    ];
                    const pos = positions[i] || [50, 50];
                    return (
                      <Hotspot
                        key={i}
                        x={pos[0]}
                        y={pos[1]}
                        info={fact}
                        delay={i * 0.3}
                      />
                    );
                  })}
                </div>
                
                <div className={styles.zoneGrid}>
                  {/* Left: Zone info */}
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
                      />
                    </div>
                  </div>

                  {/* Right: Single Large Creature SVG */}
                  <div className={styles.zoneRight}>
                    {primary && (
                      <div 
                        className={`${styles.featuredCreature} ${activeCreature === zone.id ? styles.active : ''}`}
                        onMouseEnter={() => setActiveCreature(zone.id)}
                        onMouseLeave={() => setActiveCreature(null)}
                        onClick={() => setActiveCreature(activeCreature === zone.id ? null : zone.id)}
                      >
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
