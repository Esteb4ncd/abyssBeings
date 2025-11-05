'use client';

import Navigation from '../components/Navigation';
import styles from './page.module.css';

export default function ReferencesPage() {
  const references = [
    {
      category: 'Ocean Zones & General Information',
      sources: [
        {
          title: 'NOAA Ocean Explorer - Ocean Zones',
          url: 'https://oceanexplorer.noaa.gov',
          description: 'Comprehensive information about ocean zones, depth ranges, and characteristics.'
        },
        {
          title: 'National Geographic - Ocean Zones',
          url: 'https://www.nationalgeographic.org/encyclopedia/ocean-zone/',
          description: 'Educational resource on ocean depth zones and their environmental conditions.'
        },
        {
          title: 'MBARI - Monterey Bay Aquarium Research Institute',
          url: 'https://www.mbari.org',
          description: 'Research and information about deep-sea ecosystems and organisms.'
        }
      ]
    },
    {
      category: 'Deep-Sea Creatures',
      sources: [
        {
          title: 'Smithsonian Ocean - Deep Sea Creatures',
          url: 'https://ocean.si.edu',
          description: 'Scientific information about deep-sea species and their adaptations.'
        },
        {
          title: 'Woods Hole Oceanographic Institution',
          url: 'https://www.whoi.edu',
          description: 'Research publications and information about deep-sea biology.'
        },
        {
          title: 'Animal Diversity Web - University of Michigan',
          url: 'https://animaldiversity.org',
          description: 'Detailed species information and scientific data on marine organisms.'
        }
      ]
    },
    {
      category: 'Specific Creature Information',
      sources: [
        {
          title: 'Anglerfish (Melanocetus johnsonii)',
          url: 'https://www.nationalgeographic.com/animals/fish/facts/anglerfish',
          description: 'Information about anglerfish biology, bioluminescence, and reproductive behavior.'
        },
        {
          title: 'Vampire Squid (Vampyroteuthis infernalis)',
          url: 'https://www.mbari.org/animal/vampire-squid/',
          description: 'MBARI research on vampire squid anatomy, behavior, and ecology.'
        },
        {
          title: 'Giant Tube Worms (Riftia pachyptila)',
          url: 'https://ocean.si.edu/ocean-life/invertebrates/giant-tube-worms',
          description: 'Smithsonian information on hydrothermal vent organisms and chemosynthesis.'
        },
        {
          title: 'Barreleye Fish (Macropinna microstoma)',
          url: 'https://www.mbari.org/barreleye-fish/',
          description: 'MBARI research on barreleye fish transparent head and unique vision adaptations.'
        },
        {
          title: 'Hatchetfish Information',
          url: 'https://www.fishbase.se',
          description: 'FishBase database with scientific data on hatchetfish species and distributions.'
        },
        {
          title: 'Giant Isopod (Bathynomus giganteus)',
          url: 'https://www.nationalgeographic.com/animals/invertebrates/facts/giant-isopod',
          description: 'Information about giant isopod biology, size, and deep-sea adaptations.'
        },
        {
          title: 'Dumbo Octopus (Grimpoteuthis)',
          url: 'https://ocean.si.edu/ocean-life/invertebrates/dumbo-octopus',
          description: 'Smithsonian information on deep-sea octopus species and their habitats.'
        },
        {
          title: 'Sea Pig (Scotoplanes)',
          url: 'https://www.mbari.org/animal/sea-pig/',
          description: 'MBARI research on deep-sea sea cucumbers and their feeding behaviors.'
        }
      ]
    },
    {
      category: 'Bioluminescence & Adaptations',
      sources: [
        {
          title: 'Bioluminescence in the Deep Sea',
          url: 'https://ocean.si.edu/ocean-life/fish/bioluminescence',
          description: 'Scientific explanation of bioluminescence mechanisms and functions in deep-sea organisms.'
        },
        {
          title: 'Deep-Sea Adaptations',
          url: 'https://www.nature.com/scitable/knowledge/library/adaptations-to-life-in-the-deep-sea-23601439/',
          description: 'Nature Education article on physiological and behavioral adaptations to deep-sea environments.'
        }
      ]
    },
    {
      category: 'Scientific Databases & Journals',
      sources: [
        {
          title: 'FishBase - Global Fish Information',
          url: 'https://www.fishbase.se',
          description: 'Comprehensive database of fish species with scientific names, distributions, and biological data.'
        },
        {
          title: 'World Register of Marine Species (WoRMS)',
          url: 'https://www.marinespecies.org',
          description: 'Authoritative database of marine species names and taxonomic information.'
        },
        {
          title: 'Deep Sea Research Part I & II',
          url: 'https://www.journals.elsevier.com/deep-sea-research',
          description: 'Peer-reviewed scientific journals covering deep-sea research and discoveries.'
        }
      ]
    },
    {
      category: 'Educational Resources',
      sources: [
        {
          title: 'Ocean Portal - Smithsonian National Museum of Natural History',
          url: 'https://ocean.si.edu',
          description: 'Educational content about ocean ecosystems, creatures, and scientific research.'
        },
        {
          title: 'National Ocean Service - NOAA',
          url: 'https://oceanservice.noaa.gov',
          description: 'Government resource providing educational information about ocean science and marine life.'
        },
        {
          title: 'MarineBio Conservation Society',
          url: 'https://marinebio.org',
          description: 'Educational resources about marine biology, conservation, and ocean ecosystems.'
        }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Navigation />
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
                    >
                      {source.url} →
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

