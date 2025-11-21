import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Box, Sphere, Cone } from '@react-three/drei';

const ShowcaseScene = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const items = [
    { Component: Box, args: [1, 1, 1], position: [-2, 0, 0], color: '#9d4edd' },
    { Component: Sphere, args: [0.7, 32, 32], position: [0, 0, 0], color: '#00f3ff' },
    { Component: Cone, args: [0.7, 1.5, 32], position: [2, 0, 0], color: '#ff0055' },
  ];

  return (
    <group position={[0, 0, 0]}>
      {items.map((item, index) => {
        const { Component, args, position, color } = item;
        return (
          <ShowcaseItem
            key={index}
            Component={Component}
            args={args}
            position={position}
            color={color}
            isHovered={hovered === index}
            onHover={() => setHovered(index)}
            onUnhover={() => setHovered(null)}
          />
        );
      })}
    </group>
  );
};

const ShowcaseItem = ({ Component, args, position, color, isHovered, onHover, onUnhover }: any) => {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      if (isHovered) {
        meshRef.current.scale.lerp({ x: 1.2, y: 1.2, z: 1.2 } as any, 0.1);
      } else {
        meshRef.current.scale.lerp({ x: 1, y: 1, z: 1 } as any, 0.1);
      }
    }
  });

  return (
    <Component
      ref={meshRef}
      args={args}
      position={position}
      onPointerOver={onHover}
      onPointerOut={onUnhover}
    >
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={isHovered ? 0.5 : 0.2}
      />
    </Component>
  );
};

export default ShowcaseScene;
