export const oceanZones = [
  {
    id: 'epipelagic',
    name: 'Epipelagic Zone',
    depth: '0-200m',
    description: 'The sunlit zone where photosynthesis occurs. This is the warmest and most light-filled layer of the ocean, home to the majority of marine life including coral reefs, most fish species, and marine mammals. Sunlight penetrates fully, allowing for abundant plant growth and active ecosystems.',
    color: '#0066FF'
  },
  {
    id: 'mesopelagic',
    name: 'Mesopelagic Zone',
    depth: '200-1000m',
    description: 'The twilight zone where light begins to fade dramatically. This transition layer marks the boundary between the sunlit world above and the eternal darkness below. Many creatures here perform daily vertical migrations, rising to feed at night and descending during the day to avoid predators.',
    color: '#003D99'
  },
  {
    id: 'bathypelagic',
    name: 'Bathypelagic Zone',
    depth: '1000-4000m',
    description: 'The midnight zone, completely dark and under extreme pressure. Sunlight cannot penetrate these depths, creating a world of perpetual darkness. Temperatures hover near freezing, and pressure can reach 400 times that at sea level. Life here is sparse but extraordinary, with creatures adapted to darkness and extreme conditions.',
    color: '#001133'
  },
  {
    id: 'abyssopelagic',
    name: 'Abyssopelagic Zone',
    depth: '4000-6000m',
    description: 'The abyssal zone, where the ocean floor begins. This is one of the most extreme environments on Earth, with near-freezing temperatures, crushing pressure, and complete darkness. Most life here is slow-moving and adapted to scavenging, feeding on detritus that drifts down from above.',
    color: '#000722'
  },
  {
    id: 'hadalpelagic',
    name: 'Hadalpelagic Zone',
    depth: '6000m+',
    description: 'The deepest trenches on Earth, named after Hades, the Greek god of the underworld. These are the most extreme environments on the planet, with pressures exceeding 600 atmospheres and temperatures just above freezing. Only the most specialized organisms can survive here, many of which remain undiscovered.',
    color: '#000000'
  }
];

export const creatures = [
  // Bathypelagic Zone
  {
    id: 'black-dragonfish',
    name: 'Black Dragonfish',
    scientificName: 'Idiacanthus atlanticus',
    zone: 'bathypelagic',
    depth: '1000-3000m',
    description: 'Deep-sea predators with fang-like teeth and an enormous jaw that can open to more than 100 degrees, allowing them to consume prey much larger than themselves. They use bioluminescent photophores to attract prey in the darkness.',
    facts: [
      'They can open their jaw to more than 100 degrees',
      'They have bioluminescent organs called photophores',
      'They are apex predators despite their small size (15-26 cm)',
      'They can consume prey much larger than themselves'
    ],
    adaptations: 'Bioluminescent photophores, expandable jaw, fang-like teeth, pressure-resistant body',
    image: '🐉'
  },
  // Abyssopelagic Zone
  {
    id: 'dumbo-octopus',
    name: 'Dumbo Octopus',
    scientificName: 'Grimpoteuthis',
    zone: 'abyssopelagic',
    depth: '3000-7000m',
    description: 'Named for their ear-like fins that resemble Disney\'s Dumbo, these are the deepest living octopuses. They can live at depths of up to 7000 meters, making them the deepest-living of all known octopuses.',
    facts: [
      'They can live at depths of up to 7000 meters',
      'They use their ear-like fins to swim',
      'They are the deepest living octopuses known',
      'They have a bell-shaped body and webbed arms'
    ],
    adaptations: 'Deep pressure adaptation, fin-based swimming, soft body, slow metabolism',
    image: '🐙'
  },
  // Hadalpelagic Zone
  {
    id: 'stalked-crinoid',
    name: 'Stalked Crinoid',
    scientificName: 'Bathymetra sp.',
    zone: 'hadalpelagic',
    depth: '6500-8000m',
    description: 'Ancient echinoderms anchored to the seafloor by a stalk, unfurling feathery arms to capture drifting particles and plankton along trench walls. They are relatives of sea stars and sea urchins.',
    facts: [
      'They are relatives of sea stars and sea urchins',
      'Flexible stalks let them sway into passing currents',
      'Mucus-covered tube feet trap food on each arm',
      'Some species can let go of their stalk and crawl to new sites'
    ],
    adaptations: 'Stalk anchoring, filter-feeding arms, slow metabolism',
    image: '🌼'
  }
];
