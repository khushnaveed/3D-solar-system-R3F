# 3D Solar System - React Three Fiber

A beautiful, interactive 3D solar system visualization built with React Three Fiber, featuring realistic planetary orbits, animations, and stunning visual effects.

![3D Solar System](https://img.shields.io/badge/React-19.2.0-blue) ![Three.js](https://img.shields.io/badge/Three.js-0.182.0-green) ![React Three Fiber](https://img.shields.io/badge/R3F-9.5.0-orange)

## 🌟 Features

- **Interactive 3D Solar System**: Explore the solar system with smooth camera controls
- **Realistic Planetary Orbits**: Each planet orbits the sun at different speeds and distances
- **3D Sun Model**: Beautiful animated sun with GLTF model
- **Visual Effects**: 
  - Bloom post-processing for glowing effects
  - Starfield background with 5000 stars
  - Emissive materials for planets
- **Interactive Elements**:
  - Hover effects on planets
  - Planet labels that follow the camera
  - Smooth animations and transitions
- **Orbit Rings**: Visual guides showing planetary orbits

## 🪐 Planets Included

- **Mercury** - Gray, closest to the sun
- **Venus** - Orange, second planet
- **Earth** - Blue, our home planet
- **Mars** - Red, the red planet
- **Jupiter** - Yellow, largest planet
- **Saturn** - Brown, ringed planet

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd 3D-solar-system-R3F
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Project Structure

```
3D-solar-system-R3F/
├── public/
│   ├── models/
│   │   └── sun.glb          # 3D Sun model
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Sun.jsx          # Sun component with 3D model
│   │   ├── Planet.jsx       # Reusable planet component
│   │   ├── OrbitRing.jsx    # Orbit visualization rings
│   │   └── VideoInit.jsx    # Video recording/initialization
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── package.json
└── vite.config.js
```

## 🎮 Controls

- **Mouse Drag**: Rotate the camera around the solar system
- **Scroll Wheel**: Zoom in/out
- **Pan**: Click and drag to pan the view
- **Hover**: Hover over planets to see them scale up and labels enlarge

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **React Three Fiber 9.5.0** - React renderer for Three.js
- **Three.js 0.182.0** - 3D graphics library
- **@react-three/drei** - Useful helpers for R3F
- **@react-three/postprocessing** - Post-processing effects
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding More Planets

To add more planets, simply add a new `Planet` component in `App.jsx`:

```jsx
<OrbitRing radius={90} />
<Planet 
  name="Uranus" 
  radius={2.2} 
  color="cyan" 
  orbitRadius={90} 
  orbitSpeed={0.06} 
  rotationSpeed={0.08} 
  emissiveIntensity={1.1} 
/>
```

### Adjusting Planet Properties

Each planet accepts the following props:
- `name` - Planet name (string)
- `radius` - Planet size (number)
- `color` - Planet color (string)
- `orbitRadius` - Distance from sun (number)
- `orbitSpeed` - Orbital speed multiplier (number)
- `rotationSpeed` - Rotation speed multiplier (number)
- `emissiveIntensity` - Glow intensity (number)
- `showLabel` - Show/hide planet label (boolean)

### Modifying Visual Effects

Adjust the bloom effect in `App.jsx`:

```jsx
<Bloom 
  luminanceThreshold={0.2}  // Lower = more bloom
  luminanceSmoothing={0.9}   // Smoothness
  intensity={1.5}            // Bloom strength
/>
```

## 🎥 Video Recording



https://github.com/user-attachments/assets/926c4448-4bd7-4620-b7d9-5726e4d634da




## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Sun 3D model by SebastianSosnowski from Sketchfab (CC-BY-4.0)
- Built with [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- Powered by [Three.js](https://threejs.org/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ❤️ using React Three Fiber
