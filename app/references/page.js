'use client';
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
      category: 'Midnight Zone (Bathypelagic)',
      sources: [
        {
          title: 'Bathypelagic (Midnight Zone) Overview — NOAA',
          url: 'https://oceanexplorer.noaa.gov',
          description: 'Depth, pressure, temperature, and light conditions of the midnight zone.'
        },
        {
          title: 'Black Dragonfish (Stomiidae) — Smithsonian Ocean',
          url: 'https://ocean.si.edu',
          description: 'General information on dragonfish family, red bioluminescence, and hunting behavior.'
        },
        {
          title: 'Deep-sea fish adaptations — Nature Education',
          url: 'https://www.nature.com/scitable/knowledge/library/adaptations-to-life-in-the-deep-sea-23601439/',
          description: 'Physiological adaptations for darkness, pressure, and low energy environments.'
        }
      ]
    },
    {
      category: 'The Abyss (Abyssopelagic)',
      sources: [
        {
          title: 'Abyssopelagic Zone basics — National Geographic',
          url: 'https://www.nationalgeographic.org/encyclopedia/ocean-zone/',
          description: 'Environmental conditions, ecology, and energy sources at abyssal depths.'
        },
        {
          title: 'Dumbo Octopus (Grimpoteuthis) — Smithsonian Ocean',
          url: 'https://ocean.si.edu/ocean-life/invertebrates/dumbo-octopus',
          description: 'Species overview, depth range, morphology, and behavior.'
        },
        {
          title: 'Hydrothermal vents & abyssal ecosystems — WHOI',
          url: 'https://www.whoi.edu',
          description: 'Ecosystem functioning, vent communities, and food webs in the abyss.'
        }
      ]
    },
    {
      category: 'The Trenches (Hadalpelagic)',
      sources: [
        {
          title: 'Hadal Zone overview — MBARI',
          url: 'https://www.mbari.org',
          description: 'Characteristics of hadal trenches and research methods (landers/cameras).'
        },
        {
          title: 'Hadal Snailfish (Pseudoliparis swirei) — Journal & press summaries',
          url: 'https://www.journals.elsevier.com/deep-sea-research',
          description: 'Discoveries of deepest-living fish, physiology, and pressure adaptations.'
        },
        {
          title: 'WoRMS / FishBase — Taxonomy & distributions',
          url: 'https://www.fishbase.se',
          description: 'Authoritative species records and scientific naming for hadal fauna.'
        }
      ]
    },
    {
      category: 'General & Educational',
      sources: [
        {
          title: 'Smithsonian Ocean Portal',
          url: 'https://ocean.si.edu',
          description: 'Educational content about ocean ecosystems, creatures, and research.'
        },
        {
          title: 'NOAA Ocean Service',
          url: 'https://oceanservice.noaa.gov',
          description: 'Government resource on ocean science and marine life.'
        },
        {
          title: 'MBARI — Monterey Bay Aquarium Research Institute',
          url: 'https://www.mbari.org',
          description: 'Research updates, species spotlights, and deep-sea exploration.'
        }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
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

