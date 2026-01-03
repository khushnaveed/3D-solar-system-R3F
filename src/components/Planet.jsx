import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function Planet({
  name = "Planet",
  radius = 2,
  color = "gray",
  orbitRadius = 20,
  orbitSpeed = 0.5,
  rotationSpeed = 0.5,
  emissiveIntensity = 1,
  showLabel = true,
  ...props
}) {
  const mesh = useRef();
  const labelRef = useRef();
  const angleRef = useRef(Math.random() * Math.PI * 2);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    // Orbit around Sun
    angleRef.current += delta * orbitSpeed;
    const x = Math.cos(angleRef.current) * orbitRadius;
    const z = Math.sin(angleRef.current) * orbitRadius;
    mesh.current.position.set(x, 0, z);

    // Rotate planet
    mesh.current.rotation.y += delta * rotationSpeed;

    // Make label follow planet and face camera
    if (labelRef.current) {
      labelRef.current.position.set(
        mesh.current.position.x,
        mesh.current.position.y + radius + 1.5,
        mesh.current.position.z
      );
      labelRef.current.lookAt(state.camera.position);
      labelRef.current.scale.setScalar(hovered ? 1.5 : 1); // label grow on hover
    }

    // Planet scale animation on hover
    const targetScale = hovered ? 1.2 : 1;
    mesh.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
  });

  return (
    <group>
      <mesh
        ref={mesh}
        {...props}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          metalness={0.3}
          roughness={0.5}
        />
      </mesh>

      {/* Planet Label */}
      {showLabel && (
        <Text
          ref={labelRef}
          fontSize={2}
          color="white"
          anchorX="center"
          anchorY="bottom"
          maxWidth={10}
        >
          {name}
        </Text>
      )}
    </group>
  );
}
