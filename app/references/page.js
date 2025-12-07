'use client';
import Image from 'next/image';
import styles from './page.module.css';

export default function ReferencesPage() {
  const formatUrl = (raw) => {
    try {
      const u = new URL(raw);
      // Keep hostname and first path segment if present
      const seg = u.pathname.split('/').filter(Boolean)[0];
      return seg ? `${u.hostname}/${seg}` : u.hostname;
    } catch (e) {
      return raw;
    }
  };
  const references = [
    {
      category: 'Ocean Zones',
      sources: [
        {
          title: 'Midnight Zone — Woods Hole Oceanographic Institution',
          url: 'https://www.whoi.edu/ocean-learning-hub/ocean-topics/how-the-ocean-works/ocean-zones/midnight-zone/',
          description: 'Comprehensive information about the bathypelagic (midnight) zone, including depth, pressure, temperature, and life forms.'
        },
        {
          title: 'Abyssal Zone — Woods Hole Oceanographic Institution',
          url: 'https://www.whoi.edu/ocean-learning-hub/ocean-topics/how-the-ocean-works/ocean-zones/abyssal-zone/',
          description: 'Detailed overview of the abyssopelagic zone, its characteristics, importance, and ongoing research.'
        },
        {
          title: 'Ocean Trench — National Geographic Education',
          url: 'https://education.nationalgeographic.org/resource/ocean-trench/',
          description: 'Educational resource about ocean trenches and the hadalpelagic zone, the deepest parts of the ocean.'
        }
      ]
    },
    {
      category: 'Deep Sea Creatures',
      sources: [
        {
          title: 'Black Dragonfish (Idiacanthus atlanticus) — Australian Museum',
          url: 'https://australian.museum/learn/animals/fishes/black-dragonfish-idiacanthus-atlanticus-brauer-1906/',
          description: 'Scientific information about the Black Dragonfish, including identification, habitat, distribution, feeding behavior, and adaptations.'
        },
        {
          title: 'What is a Dumbo Octopus? — Natural History Museum',
          url: 'https://www.nhm.ac.uk/discover/what-is-a-dumbo-octopus.html',
          description: 'Comprehensive guide to Dumbo octopuses (Grimpoteuthis), their unique characteristics, habitat, and behavior in the deep sea.'
        },
        {
          title: 'Stalked Crinoid — U.S. Geological Survey',
          url: 'https://www.usgs.gov/media/images/stalked-crinoid',
          description: 'Information and imagery about stalked crinoids, ancient echinoderms found in the deepest ocean trenches.'
        }
      ]
    },
    {
      category: 'General Ocean Science Resources',
      sources: [
        {
          title: 'Woods Hole Oceanographic Institution — Ocean Learning Hub',
          url: 'https://www.whoi.edu/ocean-learning-hub/',
          description: 'Educational resources about ocean zones, marine life, and oceanographic research.'
        },
        {
          title: 'National Geographic Education — Ocean Resources',
          url: 'https://education.nationalgeographic.org/',
          description: 'Educational materials about oceanography, marine ecosystems, and deep-sea exploration.'
        },
        {
          title: 'Australian Museum — Marine Life',
          url: 'https://australian.museum/learn/animals/',
          description: 'Scientific information about marine animals, including deep-sea species and their adaptations.'
        },
        {
          title: 'Natural History Museum — Discover',
          url: 'https://www.nhm.ac.uk/discover/',
          description: 'Educational content about natural history, including deep-sea creatures and ocean ecosystems.'
        },
        {
          title: 'U.S. Geological Survey — Ocean Science',
          url: 'https://www.usgs.gov/',
          description: 'Government resource providing scientific information about marine geology and deep-sea ecosystems.'
        }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src="/logo02.svg"
              alt="Abyss Beings Logo"
              width={300}
              height={434}
              className={styles.headerLogo}
              priority
            />
          </div>
          <h1 className={styles.title}>References</h1>
          <p className={styles.subtitle}>
            Scientific sources and references used to ensure accuracy of information
            presented in this project.
          </p>
        </div>

        <div className={styles.referencesContent}>
          {references.map((section, sectionIndex) => (
            <section key={sectionIndex} className={styles.referenceSection}>
              <h2 className={styles.categoryTitle}>{section.category}</h2>
              <div className={styles.sourcesList}>
                {section.sources.map((source, sourceIndex) => (
                  <div key={sourceIndex} className={styles.sourceCard}>
                    <h3 className={styles.sourceTitle}>{source.title}</h3>
                    <p className={styles.sourceDescription}>{source.description}</p>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.sourceLink}
                      title={source.url}
                    >
                      {formatUrl(source.url)} →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className={styles.note}>
          <p>
            <strong>Note:</strong> All information presented in this project has been
            cross-referenced with multiple scientific sources to ensure accuracy.
            The deep-sea environment continues to be explored, and new discoveries
            are made regularly. For the most current scientific information,
            please refer to the latest peer-reviewed research publications.
          </p>
        </div>
      </main>
    </div>
  );
}


