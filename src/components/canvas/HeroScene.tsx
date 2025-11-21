import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { Float, Torus, Octahedron } from '@react-three/drei';

const HeroScene = () => {
  const groupRef = useRef<Group>(null);
  const torusRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[2, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core Object */}
        <Octahedron args={[1.5, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#9d4edd"
            wireframe
            emissive="#9d4edd"
            emissiveIntensity={0.8}
            transparent
            opacity={0.8}
          />
        </Octahedron>

        {/* Inner Core */}
        <Octahedron args={[0.8, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#00f3ff"
            emissive="#00f3ff"
            emissiveIntensity={1}
          />
        </Octahedron>

        {/* Rotating Ring */}
        <Torus ref={torusRef} args={[2.5, 0.05, 16, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#ff0055"
            emissive="#ff0055"
            emissiveIntensity={0.5}
          />
        </Torus>
      </Float>
    </group>
  );
};

export default HeroScene;
