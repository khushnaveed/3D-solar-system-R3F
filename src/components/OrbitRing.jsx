// components/OrbitRing.js
import React from "react";

export function OrbitRing({ radius = 20 }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.05, radius + 0.05, 128]} />
      <meshBasicMaterial color="grey" side={2} toneMapped={false} />
    </mesh>
  );
}
