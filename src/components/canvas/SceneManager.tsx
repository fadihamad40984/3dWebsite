import { useStore } from '../../store/useStore';
import LaptopScene from './LaptopScene';
import TechPartsScene from './TechPartsScene';
import PipelineScene from './PipelineScene';
import CommunityScene from './CommunityScene';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { easing } from 'maath';

const SceneManager = () => {
  const currentSection = useStore((state) => state.currentSection);
  const groupRef = useRef<Group>(null);
  const laptopRef = useRef<Group>(null);
  const techRef = useRef<Group>(null);
  const pipelineRef = useRef<Group>(null);
  const communityRef = useRef<Group>(null);

  useFrame((_state, delta) => {
    const duration = 0.5;

    // Animate Laptop (Section 0)
    if (laptopRef.current) {
      const targetScale = currentSection === 0 ? 1 : 0;
      easing.damp3(laptopRef.current.scale, [targetScale, targetScale, targetScale], duration, delta);
      laptopRef.current.visible = laptopRef.current.scale.x > 0.01;
    }

    // Animate Tech Parts (Section 1)
    if (techRef.current) {
      const targetScale = currentSection === 1 ? 1 : 0;
      easing.damp3(techRef.current.scale, [targetScale, targetScale, targetScale], duration, delta);
      techRef.current.visible = techRef.current.scale.x > 0.01;
    }

    // Animate Pipeline (Section 2)
    if (pipelineRef.current) {
      const targetScale = currentSection === 2 ? 1 : 0;
      easing.damp3(pipelineRef.current.scale, [targetScale, targetScale, targetScale], duration, delta);
      pipelineRef.current.visible = pipelineRef.current.scale.x > 0.01;
    }

    // Animate Community (Section 3)
    if (communityRef.current) {
      const targetScale = currentSection === 3 ? 1 : 0;
      easing.damp3(communityRef.current.scale, [targetScale, targetScale, targetScale], duration, delta);
      communityRef.current.visible = communityRef.current.scale.x > 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={laptopRef}>
        <LaptopScene />
      </group>

      <group ref={techRef}>
        <TechPartsScene />
      </group>

      <group ref={pipelineRef}>
        <PipelineScene />
      </group>

      <group ref={communityRef}>
        <CommunityScene />
      </group>
    </group>
  );
};

export default SceneManager;
