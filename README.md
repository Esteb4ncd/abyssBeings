# https://abyss-beings.vercel.app/


# Abyss Beings - Interactive Deep Sea Exploration

An interactive digital publication that plunges readers into the mysterious world of the deep sea, highlighting the ocean's strangest and most exotic creatures.

## 🌊 Project Overview

**Abyss Beings** is an educational and informative interactive web publication that explores the depths of the ocean through five distinct zones, featuring over 15 unique deep-sea creatures. Each page includes interactive elements, animations, and engaging content that makes learning about marine biology captivating and memorable.

## ✨ Features

### Interactive Elements
- **Clickable Hotspots**: Interactive points on zone and creature pages that reveal additional information
- **Animated Particles**: Floating particles and visual effects throughout the site
- **Facts Carousel**: Rotating facts display on creature pages with manual controls
- **Zone Filters**: Filter creatures by ocean zone on the creatures page
- **Smooth Animations**: Hover effects, transitions, and floating animations throughout

### Content Structure
- **Landing Page**: Hero section with ocean statistics and quick facts
- **Ocean Zones**: Five distinct zones from Epipelagic to Hadalpelagic
- **Zone Pages**: Detailed information about each zone with interactive visuals
- **Creatures Gallery**: Browse all 15+ featured deep-sea creatures
- **Creature Detail Pages**: Comprehensive information about each creature including:
  - Scientific names and descriptions
  - Amazing facts carousel
  - Key adaptations
  - Related creatures from the same zone

### Design Features
- **Dark Oceanic Theme**: Deep blues and cyan accents create an immersive underwater atmosphere
- **Responsive Design**: Works beautifully on desktop (1920x1080) and tablet/mobile devices
- **Modern UI/UX**: Clean, intuitive navigation with smooth transitions
- **Accessibility**: Proper semantic HTML and ARIA labels

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── components/
│   ├── Navigation.js          # Main navigation component
│   ├── Navigation.module.css
│   ├── Hotspot.js             # Interactive hotspot component
│   └── Hotspot.module.css
├── data/
│   └── creatures.js           # All creature and zone data
├── zone/
│   └── [id]/
│       ├── page.js            # Individual zone pages
│       └── page.module.css
├── zones/
│   ├── page.js                # Zones listing page
│   └── page.module.css
├── creature/
│   └── [id]/
│       ├── page.js            # Individual creature pages
│       └── page.module.css
├── creatures/
│   ├── page.js                # Creatures listing page
│   └── page.module.css
├── page.js                     # Landing page
├── page.module.css
├── layout.js                   # Root layout
└── globals.css                 # Global styles
```

## 🎨 Design Specifications

### Target Resolution
- **Primary**: Desktop 1920x1080px (landscape)
- **Responsive**: Adapts to tablet and mobile screens

### Color Palette
- **Background**: Deep navy (#000510) to black gradient
- **Primary Accent**: Cyan (#00d4ff)
- **Secondary Accent**: Light blue (#00ffff)
- **Text**: Light blue (#b0e0ff) and white (#e0f4ff)
- **Zone Colors**: Each ocean zone has its own distinct color

### Typography
- **Primary Font**: Geist Sans (via Next.js)
- **Mono Font**: Geist Mono (for scientific names and data)

## 📚 Content Overview

### Ocean Zones Covered
1. **Epipelagic Zone** (0-200m) - The sunlit zone
2. **Mesopelagic Zone** (200-1000m) - The twilight zone
3. **Bathypelagic Zone** (1000-4000m) - The midnight zone
4. **Abyssopelagic Zone** (4000-6000m) - The abyssal zone
5. **Hadalpelagic Zone** (6000m+) - The deepest trenches

### Featured Creatures (15+)
- Anglerfish
- Vampire Squid
- Giant Tube Worm
- Dragonfish
- Barreleye Fish
- Goblin Shark
- Bioluminescent Jellyfish
- Black Seadevil
- Frilled Shark
- Hatchetfish
- Giant Isopod
- Dumbo Octopus
- Fangtooth
- Sea Pig
- Stargazer Fish

## 🛠️ Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: UI library
- **CSS Modules**: Scoped styling
- **CSS Animations**: Custom keyframe animations
- **Client-Side Navigation**: Next.js App Router

## 📝 Educational Value

This project serves as an educational resource about:
- Oceanography and marine biology
- Deep-sea adaptations and evolution
- Extreme environment survival strategies
- Bioluminescence and other unique traits
- Ocean zone characteristics and conditions

## 🎯 Interactive Elements Per Page

Each content page includes at least 3 interactive elements:
- Hover effects on cards and buttons
- Clickable hotspots with information
- Animated backgrounds and particles
- Rotating facts carousel
- Filter and navigation interactions
- Smooth page transitions

## 📄 License

This project is created for educational purposes (MDIA 3106 Course Project).

## 👨‍💻 Development Notes

- All content is scientifically accurate and educational
- No dummy text - all content is real and informative
- Custom-designed UI with deep sea theme
- Optimized for performance and accessibility
- Fully responsive across devices

---

**Created for MDIA 3106 - Interactive Digital Media Course**
