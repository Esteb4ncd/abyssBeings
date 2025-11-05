export const oceanZones = [
  {
    id: 'epipelagic',
    name: 'Epipelagic Zone',
    depth: '0-200m',
    description: 'The sunlit zone where photosynthesis occurs',
    color: '#0066FF'
  },
  {
    id: 'mesopelagic',
    name: 'Mesopelagic Zone',
    depth: '200-1000m',
    description: 'The twilight zone where light begins to fade',
    color: '#003D99'
  },
  {
    id: 'bathypelagic',
    name: 'Bathypelagic Zone',
    depth: '1000-4000m',
    description: 'The midnight zone, completely dark',
    color: '#001133'
  },
  {
    id: 'abyssopelagic',
    name: 'Abyssopelagic Zone',
    depth: '4000-6000m',
    description: 'The abyssal zone, near freezing temperatures',
    color: '#000722'
  },
  {
    id: 'hadalpelagic',
    name: 'Hadalpelagic Zone',
    depth: '6000m+',
    description: 'The deepest trenches, extreme pressure',
    color: '#000000'
  }
];

export const creatures = [
  {
    id: 'anglerfish',
    name: 'Anglerfish',
    scientificName: 'Melanocetus johnsonii',
    zone: 'bathypelagic',
    depth: '2000-4000m',
    description: 'Females use a bioluminescent lure that dangles from their head to attract prey in the darkness.',
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
    description: 'A living fossil that has remained unchanged for millions of years. Despite its name, it feeds on detritus, not blood.',
    facts: [
      'Their scientific name means "vampire squid from hell"',
      'They can turn themselves inside out to avoid predators',
      'They have the largest eyes relative to body size of any animal',
      'They produce bioluminescent mucus instead of ink'
    ],
    adaptations: 'Bioluminescent defense, web-like arms, detritus feeding',
    image: '🦑'
  },
  {
    id: 'giant-tube-worm',
    name: 'Giant Tube Worm',
    scientificName: 'Riftia pachyptila',
    zone: 'bathypelagic',
    depth: '2000-3000m',
    description: 'These remarkable worms thrive near hydrothermal vents, surviving without sunlight or oxygen.',
    facts: [
      'They can grow up to 2.4 meters (8 feet) long',
      'They have no mouth or digestive system',
      'Bacteria inside them convert chemicals into energy',
      'They can live in water temperatures up to 80°C (176°F)'
    ],
    adaptations: 'Chemosynthetic symbiosis, heat-resistant body, rapid growth',
    image: '🪱'
  },
  {
    id: 'deep-sea-dragonfish',
    name: 'Dragonfish',
    scientificName: 'Stomias boa',
    zone: 'bathypelagic',
    depth: '1000-3000m',
    description: 'Fierce predators with fang-like teeth and bioluminescent organs along their bodies.',
    facts: [
      'They can see red light, which most deep sea creatures cannot',
      'They use red bioluminescence to hunt without being detected',
      'Their teeth are so long they cannot close their mouths',
      'They can produce light from multiple organs on their body'
    ],
    adaptations: 'Red light vision, bioluminescent hunting, expandable stomach',
    image: '🐉'
  },
  {
    id: 'barreleye',
    name: 'Barreleye Fish',
    scientificName: 'Macropinna microstoma',
    zone: 'mesopelagic',
    depth: '600-800m',
    description: 'A bizarre fish with a transparent head filled with fluid, allowing it to see upward through its skull.',
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
    id: 'goblin-shark',
    name: 'Goblin Shark',
    scientificName: 'Mitsukurina owstoni',
    zone: 'bathypelagic',
    depth: '200-1300m',
    description: 'A living fossil with a distinctive protrusible jaw that can shoot out to catch prey.',
    facts: [
      'They have been called "living fossils" - unchanged for 125 million years',
      'Their jaw can extend up to 10% of their body length',
      'They are rarely seen by humans, mostly found by deep-sea trawlers',
      'Their pink color comes from blood vessels visible through translucent skin'
    ],
    adaptations: 'Protrusible jaw, electroreception, slow metabolism',
    image: '🦈'
  },
  {
    id: 'bioluminescent-jellyfish',
    name: 'Bioluminescent Jellyfish',
    scientificName: 'Atolla wyvillei',
    zone: 'bathypelagic',
    depth: '500-5000m',
    description: 'These jellyfish create stunning light displays when threatened, emitting a circular flash pattern.',
    facts: [
      'They produce light through a chemical reaction',
      'When attacked, they create a "burglar alarm" light display',
      'The light can attract larger predators to eat their attacker',
      'They can produce blue, green, or red light'
    ],
    adaptations: 'Bioluminescent defense, transparent body, stinging tentacles',
    image: '🌊'
  },
  {
    id: 'deep-sea-angler',
    name: 'Black Seadevil',
    scientificName: 'Melanocetus johnsonii',
    zone: 'bathypelagic',
    depth: '3000-4000m',
    description: 'One of the most bizarre-looking creatures, with a gaping mouth and sharp teeth.',
    facts: [
      'Females are 10 times larger than males',
      'Males become permanent parasites on females',
      'They have flexible bones allowing them to swallow huge prey',
      'Their lure can be wiggled to mimic small fish'
    ],
    adaptations: 'Bioluminescent lure, expandable stomach, pressure adaptation',
    image: '👹'
  },
  {
    id: 'frilled-shark',
    name: 'Frilled Shark',
    scientificName: 'Chlamydoselachus anguineus',
    zone: 'bathypelagic',
    depth: '500-1500m',
    description: 'A primitive shark that resembles an eel more than a modern shark.',
    facts: [
      'They have 300 trident-shaped teeth in 25 rows',
      'Their gestation period may last up to 3.5 years',
      'They are rarely seen alive in their natural habitat',
      'They can swallow prey half their own length'
    ],
    adaptations: 'Eel-like body, numerous teeth, flexible jaw',
    image: '🦈'
  },
  {
    id: 'deep-sea-hatchetfish',
    name: 'Hatchetfish',
    scientificName: 'Argyropelecus gigas',
    zone: 'mesopelagic',
    depth: '200-600m',
    description: 'Small fish with silvery bodies and bioluminescent organs that help them blend in.',
    facts: [
      'They use counter-illumination to hide from predators below',
      'Their bodies are covered in light-producing photophores',
      'They can control the intensity of their bioluminescence',
      'They migrate vertically, coming closer to surface at night'
    ],
    adaptations: 'Counter-illumination, silvery body, vertical migration',
    image: '🗡️'
  },
  {
    id: 'giant-isopod',
    name: 'Giant Isopod',
    scientificName: 'Bathynomus giganteus',
    zone: 'abyssopelagic',
    depth: '170-2140m',
    description: 'Massive crustaceans that can grow up to 50cm, related to pill bugs but much larger.',
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
    id: 'deep-sea-octopus',
    name: 'Dumbo Octopus',
    scientificName: 'Grimpoteuthis',
    zone: 'abyssopelagic',
    depth: '3000-7000m',
    description: 'Named for their ear-like fins that resemble Disney\'s Dumbo, these are the deepest living octopuses.',
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
    id: 'fangtooth',
    name: 'Fangtooth',
    scientificName: 'Anoplogaster cornuta',
    zone: 'bathypelagic',
    depth: '500-5000m',
    description: 'Despite their fearsome appearance, they are relatively small fish with the largest teeth relative to body size.',
    facts: [
      'They have the largest teeth relative to body size of any fish',
      'Despite their scary look, they only grow to about 15cm',
      'They have muscles to pull their teeth back into their mouths',
      'They migrate vertically to shallower waters at night to feed'
    ],
    adaptations: 'Large teeth, vertical migration, pressure resistance',
    image: '🦷'
  },
  {
    id: 'sea-pig',
    name: 'Sea Pig',
    scientificName: 'Scotoplanes',
    zone: 'abyssopelagic',
    depth: '1000-6000m',
    description: 'These sea cucumbers walk on the ocean floor using water-filled tube feet.',
    facts: [
      'They are actually a type of sea cucumber',
      'They walk on the seafloor using tube feet filled with water',
      'They feed on detritus and organic matter in the mud',
      'They can be found in large groups numbering in the hundreds'
    ],
    adaptations: 'Tube feet locomotion, detritus feeding, deep pressure tolerance',
    image: '🐷'
  },
  {
    id: 'stargazer',
    name: 'Stargazer Fish',
    scientificName: 'Uranoscopus',
    zone: 'mesopelagic',
    depth: '200-500m',
    description: 'Fish that bury themselves in sand with only their eyes visible, waiting to ambush prey.',
    facts: [
      'They bury themselves in sand with only eyes and mouth visible',
      'Some species can deliver electric shocks',
      'They have upward-facing eyes and mouth',
      'They can shoot jets of water to uncover hidden prey'
    ],
    adaptations: 'Ambush hunting, electric organs, upward-facing eyes',
    image: '⭐'
  }
];


