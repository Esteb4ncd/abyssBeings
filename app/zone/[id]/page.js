'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import Hotspot from '../../components/Hotspot';
import { oceanZones, creatures } from '../../data/creatures';
import styles from './page.module.css';

export default function ZonePage() {
  const router = useRouter();
  const params = useParams();
  const [zone, setZone] = useState(null);
  const [zoneCreatures, setZoneCreatures] = useState([]);
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    const foundZone = oceanZones.find(z => z.id === params.id);
    setZone(foundZone);
    
    if (foundZone) {
      const creaturesInZone = creatures.filter(c => c.zone === foundZone.id);
      setZoneCreatures(creaturesInZone);
    }
  }, [params.id]);

  if (!zone) {
    return (
      <div className={styles.container}>
        <Navigation />
        <main className={styles.main}>
          <p>Zone not found</p>
        </main>
      </div>
    );
  }

  const hotspots = [
    { x: 20, y: 30, info: 'Pressure increases dramatically with depth' },
    { x: 60, y: 45, info: 'Temperature drops to near freezing' },
    { x: 80, y: 70, info: 'No sunlight reaches these depths' },
    { x: 40, y: 60, info: 'Creatures rely on bioluminescence' },
  ];

  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <button className={styles.backButton} onClick={() => router.push('/zones')}>
          ← Back to Zones
        </button>

        <div className={styles.zoneHeader}>
          <div className={styles.zoneIndicator} style={{ background: zone.color }}></div>
          <h1 className={styles.title}>{zone.name}</h1>
          <div className={styles.zoneMeta}>
            <span className={styles.depth}>{zone.depth}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.description}>{zone.description}</span>
          </div>
        </div>

        {/* Interactive Zone Visual */}
        <div className={styles.zoneVisual}>
          <div className={styles.zoneBackground} style={{ background: zone.color }}>
            <div className={styles.particleField}>
              {Array.from({ length: 15 }, (_, i) => (
                <div
                  key={i}
                  className={styles.particle}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
            {hotspots.map((hotspot, index) => (
              <Hotspot
                key={index}
                x={hotspot.x}
                y={hotspot.y}
                info={hotspot.info}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Zone Information */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Conditions</h3>
              <ul>
                <li>Pressure: {zone.id === 'epipelagic' ? '1 atm' : zone.id === 'mesopelagic' ? '20-100 atm' : zone.id === 'bathypelagic' ? '100-400 atm' : zone.id === 'abyssopelagic' ? '400-600 atm' : '600+ atm'}</li>
                <li>Temperature: {zone.id === 'epipelagic' ? 'Variable' : zone.id === 'mesopelagic' ? '4-10°C' : '1-4°C'}</li>
                <li>Light: {zone.id === 'epipelagic' ? 'Full sunlight' : zone.id === 'mesopelagic' ? 'Twilight' : 'Complete darkness'}</li>
                <li>Oxygen: {zone.id === 'epipelagic' ? 'High' : zone.id === 'mesopelagic' ? 'Moderate' : 'Low'}</li>
              </ul>
            </div>
            <div className={styles.infoCard}>
              <h3>Adaptations</h3>
              <p>
                Creatures in the {zone.name} have developed remarkable adaptations to survive.
                These include bioluminescence for communication and hunting, pressure-resistant
                bodies, slow metabolisms to conserve energy, and unique feeding strategies.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Biodiversity</h3>
              <p>
                Despite harsh conditions, this zone is home to a diverse array of life forms.
                Many species remain undiscovered, and new ones are found with each expedition
                into the depths.
              </p>
            </div>
          </div>
        </section>

        {/* Creatures in this Zone */}
        <section className={styles.creaturesSection}>
          <h2 className={styles.sectionTitle}>Creatures of the {zone.name}</h2>
          {zoneCreatures.length > 0 ? (
            <div className={styles.creaturesGrid}>
              {zoneCreatures.map((creature) => (
                <div
                  key={creature.id}
                  className={styles.creatureCard}
                  onClick={() => router.push(`/creature/${creature.id}`)}
                >
                  <div className={styles.creatureIcon}>{creature.image}</div>
                  <h3 className={styles.creatureName}>{creature.name}</h3>
                  <p className={styles.creatureScientific}>{creature.scientificName}</p>
                  <p className={styles.creatureDescription}>{creature.description}</p>
                  <button className={styles.learnMoreButton}>Learn More →</button>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noCreatures}>
              <p>More creatures will be added to this zone soon!</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}


