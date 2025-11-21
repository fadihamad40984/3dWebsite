import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, Cylinder, Torus } from '@react-three/drei';
import { Group } from 'three';

const TechPartsScene = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0, 0]}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {/* CPU Chip */}
        <Box args={[1, 0.1, 1]} position={[-1, 1, 0]}>
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
          <mesh position={[0, 0.06, 0]}>
            <boxGeometry args={[0.6, 0.02, 0.6]} />
            <meshStandardMaterial color="#9d4edd" emissive="#9d4edd" emissiveIntensity={0.5} />
          </mesh>
        </Box>

        {/* Cooling Fan */}
        <group position={[1, -0.5, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <Cylinder args={[0.8, 0.8, 0.2, 32]}>
            <meshStandardMaterial color="#111" />
          </Cylinder>
          <mesh>
            <cylinderGeometry args={[0.7, 0.7, 0.21, 8]} />
            <meshStandardMaterial color="#00f3ff" wireframe />
          </mesh>
        </group>

        {/* Data Ring */}
        <Torus args={[1.5, 0.05, 16, 100]} position={[0, 0, -1]} rotation={[0, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#ff0055" emissive="#ff0055" emissiveIntensity={0.8} />
        </Torus>
      </Float>
    </group>
  );
};

export default TechPartsScene;
