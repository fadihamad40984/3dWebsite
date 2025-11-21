import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Tube, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const PipelineScene = () => {
  // Create a curve for the tube
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-4, -2, 0),
    new THREE.Vector3(-2, 1, 1),
    new THREE.Vector3(0, -1, -1),
    new THREE.Vector3(2, 2, 0),
    new THREE.Vector3(4, 0, 0),
  ]);

  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = (state.clock.getElapsedTime() * 0.2) % 1;
    if (sphereRef.current) {
      const pos = curve.getPointAt(t);
      sphereRef.current.position.copy(pos);
    }
  });

  return (
    <group position={[0, 0, -2]}>
      <Tube args={[curve, 64, 0.2, 8, false]}>
        <meshStandardMaterial
          color="#1a1a1a"
          transparent
          opacity={0.6}
          wireframe
        />
      </Tube>

      <Sphere ref={sphereRef} args={[0.3, 16, 16]}>
        <meshStandardMaterial
          color="#00f3ff"
          emissive="#00f3ff"
          emissiveIntensity={1}
        />
      </Sphere>
    </group>
  );
};

export default PipelineScene;
