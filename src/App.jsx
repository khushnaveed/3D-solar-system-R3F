import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import Sun from "./components/Sun";
import Planet from "./components/Planet";
import { OrbitRing } from "./components/OrbitRing";

function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas shadows camera={{ position: [0, 80, 150], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.2} />

        {/* Stars */}
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade />

        {/* Controls */}
        <OrbitControls enablePan={true} enableZoom={true} />

        {/* Sun */}
        <Sun position={[0, 0, 0]} />

        {/* Planets with proper names */}
        <OrbitRing radius={15} />
        <Planet name="Mercury" radius={1.5} color="gray" orbitRadius={15} orbitSpeed={0.5} rotationSpeed={0.5} emissiveIntensity={1.2} />

        <OrbitRing radius={25} />
        <Planet name="Venus" radius={2} color="orange" orbitRadius={25} orbitSpeed={0.35} rotationSpeed={0.4} emissiveIntensity={1.5} />

        <OrbitRing radius={35} />
        <Planet name="Earth" radius={2.5} color="blue" orbitRadius={35} orbitSpeed={0.25} rotationSpeed={0.3} emissiveIntensity={1.5} />

        <OrbitRing radius={45} />
        <Planet name="Mars" radius={2} color="red" orbitRadius={45} orbitSpeed={0.2} rotationSpeed={0.25} emissiveIntensity={1.3} />

        <OrbitRing radius={60} />
        <Planet name="Jupiter" radius={3} color="yellow" orbitRadius={60} orbitSpeed={0.1} rotationSpeed={0.15} emissiveIntensity={2} />

        <OrbitRing radius={75} />
        <Planet name="Saturn" radius={2.5} color="brown" orbitRadius={75} orbitSpeed={0.08} rotationSpeed={0.1} emissiveIntensity={1.2} />

        {/* Postprocessing Bloom */}
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
