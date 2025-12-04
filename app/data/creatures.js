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
  // Epipelagic Zone (2 creatures)
  {
    id: 'barreleye',
    name: 'Barreleye Fish',
    scientificName: 'Macropinna microstoma',
    zone: 'epipelagic',
    depth: '600-800m',
    description: 'A bizarre fish with a transparent head filled with fluid, allowing it to see upward through its skull. Their eyes are actually inside their transparent head and can rotate to look upward or forward.',
    facts: [
      'Their eyes are actually inside their transparent head',
      'They can rotate their eyes to look upward or forward',
      'The green lenses may filter sunlight from above',
      'They were first discovered in 1939 but not properly studied until 2004'
    ],
    adaptations: 'Transparent head, rotatable eyes, upward vision',
    image: '👁️'
  },
  {
    id: 'stargazer',
    name: 'Stargazer Fish',
    scientificName: 'Uranoscopus',
    zone: 'epipelagic',
    depth: '200-500m',
    description: 'Fish that bury themselves in sand with only their eyes visible, waiting to ambush prey. Some species can deliver electric shocks.',
    facts: [
      'They bury themselves in sand with only eyes and mouth visible',
      'Some species can deliver electric shocks',
      'They have upward-facing eyes and mouth',
      'They can shoot jets of water to uncover hidden prey'
    ],
    adaptations: 'Ambush hunting, electric organs, upward-facing eyes',
    image: '⭐'
  },
  // Mesopelagic Zone (2 creatures)
  {
    id: 'hatchetfish',
    name: 'Hatchetfish',
    scientificName: 'Argyropelecus gigas',
    zone: 'mesopelagic',
    depth: '200-600m',
    description: 'Small fish with silvery bodies and bioluminescent organs that help them blend in. They use counter-illumination to hide from predators below.',
    facts: [
      'They use counter-illumination to hide from predators below',
      'Their bodies are covered in light-producing photophores',
      'They can control the intensity of their bioluminescence',
      'They migrate vertically, coming closer to surface at night to feed'
    ],
    adaptations: 'Counter-illumination, silvery body, vertical migration',
    image: '🗡️'
  },
  {
    id: 'bioluminescent-jellyfish',
    name: 'Bioluminescent Jellyfish',
    scientificName: 'Atolla wyvillei',
    zone: 'mesopelagic',
    depth: '500-1500m',
    description: 'These jellyfish create stunning light displays when threatened, emitting a circular flash pattern that acts as a "burglar alarm" to attract larger predators.',
    facts: [
      'They produce light through a chemical reaction',
      'When attacked, they create a "burglar alarm" light display',
      'The light can attract larger predators to eat their attacker',
      'They can produce blue, green, or red light'
    ],
    adaptations: 'Bioluminescent defense, transparent body, stinging tentacles',
    image: '🌊'
  },
  // Bathypelagic Zone (2 creatures)
  {
    id: 'anglerfish',
    name: 'Anglerfish',
    scientificName: 'Melanocetus johnsonii',
    zone: 'bathypelagic',
    depth: '2000-4000m',
    description: 'Females use a bioluminescent lure that dangles from their head to attract prey in the darkness. Their jaws can expand to 12 times their normal size.',
    facts: [
      'Males are much smaller and fuse to females, becoming parasitic',
      'Their jaws can expand to 12 times their normal size',
      'The bioluminescent lure contains millions of bacteria',
      'They can swallow prey up to twice their own size'
    ],
    adaptations: 'Bioluminescent lure, expandable jaws, pressure-resistant body',
    image: '🐟'
  },
  {
    id: 'vampire-squid',
    name: 'Vampire Squid',
    scientificName: 'Vampyroteuthis infernalis',
    zone: 'bathypelagic',
    depth: '600-900m',
    description: 'A living fossil that has remained unchanged for millions of years. Despite its name, it feeds on detritus, not blood. They can turn themselves inside out to avoid predators.',
    facts: [
      'Their scientific name means "vampire squid from hell"',
      'They can turn themselves inside out to avoid predators',
      'They have the largest eyes relative to body size of any animal',
      'They produce bioluminescent mucus instead of ink'
    ],
    adaptations: 'Bioluminescent defense, web-like arms, detritus feeding',
    image: '🦑'
  },
  // Abyssopelagic Zone (2 creatures)
  {
    id: 'giant-isopod',
    name: 'Giant Isopod',
    scientificName: 'Bathynomus giganteus',
    zone: 'abyssopelagic',
    depth: '170-2140m',
    description: 'Massive crustaceans that can grow up to 50cm, related to pill bugs but much larger. They can survive without food for up to 5 years.',
    facts: [
      'They can survive without food for up to 5 years',
      'They are scavengers, feeding on dead animals that sink',
      'They have 14 legs and can curl into a ball like their smaller relatives',
      'They can grow up to 50cm (20 inches) long'
    ],
    adaptations: 'Slow metabolism, scavenging behavior, pressure resistance',
    image: '🦞'
  },
  {
    id: 'giant-tube-worm',
    name: 'Giant Tube Worm',
    scientificName: 'Riftia pachyptila',
    zone: 'abyssopelagic',
    depth: '2000-3000m',
    description: 'These remarkable worms thrive near hydrothermal vents, surviving without sunlight or oxygen. Bacteria inside them convert chemicals into energy.',
    facts: [
      'They can grow up to 2.4 meters (8 feet) long',
      'They have no mouth or digestive system',
      'Bacteria inside them convert chemicals into energy',
      'They can live in water temperatures up to 80°C (176°F)'
    ],
    adaptations: 'Chemosynthetic symbiosis, heat-resistant body, rapid growth',
    image: '🪱'
  },
  // Hadalpelagic Zone (2 creatures)
  {
    id: 'deep-sea-octopus',
    name: 'Dumbo Octopus',
    scientificName: 'Grimpoteuthis',
    zone: 'hadalpelagic',
    depth: '3000-7000m',
    description: 'Named for their ear-like fins that resemble Disney\'s Dumbo, these are the deepest living octopuses. They can live at depths of up to 7000 meters.',
    facts: [
      'They can live at depths of up to 7000 meters',
      'They use their ear-like fins to swim',
      'They are the deepest living octopuses known',
      'They have a bell-shaped body and webbed arms'
    ],
    adaptations: 'Deep pressure adaptation, fin-based swimming, soft body',
    image: '🐙'
  },
  {
    id: 'sea-pig',
    name: 'Sea Pig',
    scientificName: 'Scotoplanes',
    zone: 'hadalpelagic',
    depth: '1000-6000m',
    description: 'These sea cucumbers walk on the ocean floor using water-filled tube feet. They feed on detritus and organic matter in the mud.',
    facts: [
      'They are actually a type of sea cucumber',
      'They walk on the seafloor using tube feet filled with water',
      'They feed on detritus and organic matter in the mud',
      'They can be found in large groups numbering in the hundreds'
    ],
    adaptations: 'Tube feet locomotion, detritus feeding, deep pressure tolerance',
    image: '🐷'
  }
  ,
  // Hadal Snailfish placeholder for Trenches
  {
    id: 'stalked-crinoid',
    name: 'Stalked Crinoid',
    scientificName: 'Bathymetra sp.',
    zone: 'hadalpelagic',
    depth: '6500-8000m',
    description: 'Ancient echinoderms anchored to the seafloor by a stalk, unfurling feathery arms to capture drifting particles and plankton along trench walls.',
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
