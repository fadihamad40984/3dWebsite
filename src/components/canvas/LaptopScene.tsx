import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Float, RoundedBox, Html } from '@react-three/drei';

const LaptopScene = () => {
  const groupRef = useRef<Group>(null);
  const isOpen = true;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  // Dimensions based on MacBook Pro 16" approx ratios
  // Width: 3.5, Depth: 2.4, Thickness: 0.15

  const metalMaterial = (
    <meshStandardMaterial
      color="#c0c0c0"
      metalness={1}
      roughness={0.2}
      envMapIntensity={1.5}
    />
  );

  const darkMetalMaterial = (
    <meshStandardMaterial
      color="#4a4a4a"
      metalness={0.8}
      roughness={0.4}
    />
  );

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} rotation={[0.2, -0.2, 0]}>
      <spotLight position={[5, 10, 5]} angle={0.5} penumbra={1} intensity={2} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={1} color="#00f3ff" />
      <Float rotationIntensity={0.4} floatIntensity={0.4}>

        {/* === BASE CHASSIS === */}
        <group position={[0, 0, 0]}>
          {/* Main Body */}
          <RoundedBox args={[3.5, 0.15, 2.4]} radius={0.05} smoothness={4}>
            {metalMaterial}
          </RoundedBox>

          {/* Rubber Feet */}
          <mesh position={[-1.5, -0.08, 1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <mesh position={[1.5, -0.08, 1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <mesh position={[-1.5, -0.08, -1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <mesh position={[1.5, -0.08, -1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 16]} />
            <meshStandardMaterial color="#111" />
          </mesh>

          {/* Keyboard Well */}
          <mesh position={[0, 0.08, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[3.2, 1.3]} />
            {darkMetalMaterial}
          </mesh>

          {/* Keys (Simplified Rows) */}
          <group position={[0, 0.09, -0.2]}>
            {/* We can use a texture or simple geometry for keys. Using geometry for 3D feel */}
            {Array.from({ length: 5 }).map((_, row) => (
              <group key={row} position={[0, 0, (row - 2) * 0.25]}>
                {Array.from({ length: 12 }).map((_, col) => (
                  <RoundedBox key={col} args={[0.24, 0.02, 0.22]} radius={0.02} smoothness={2} position={[(col - 5.5) * 0.27, 0, 0]}>
                    <meshStandardMaterial color="#111" roughness={0.7} />
                  </RoundedBox>
                ))}
              </group>
            ))}
          </group>

          {/* Trackpad */}
          <RoundedBox args={[1.2, 0.02, 0.8]} radius={0.02} smoothness={2} position={[0, 0.08, 0.8]}>
            <meshStandardMaterial color="#666" metalness={0.5} roughness={0.3} />
          </RoundedBox>

          {/* Hinge Cylinder */}
          <mesh position={[0, 0.05, -1.2]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.08, 0.08, 3, 32]} />
            <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>

        {/* === SCREEN ASSEMBLY === */}
        {/* Pivot point at the back */}
        <group position={[0, 0.1, -1.2]} rotation={[isOpen ? -0.4 : -Math.PI / 2, 0, 0]}>
          {/* Screen Frame/Back */}
          <group position={[0, 1.1, 0]}>
            <RoundedBox args={[3.5, 2.3, 0.1]} radius={0.05} smoothness={4}>
              {metalMaterial}
            </RoundedBox>

            {/* Screen Bezel */}
            <mesh position={[0, 0, 0.051]}>
              <planeGeometry args={[3.4, 2.2]} />
              <meshStandardMaterial color="#000" roughness={0.2} />
            </mesh>

            {/* Screen Display (Emissive + HTML) */}
            <mesh position={[0, 0.1, 0.052]}>
              <planeGeometry args={[3.3, 2]} />
              <meshBasicMaterial color="#000" />
              <Html
                transform
                wrapperClass="htmlScreen"
                distanceFactor={1.5}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                style={{
                  width: '1024px',
                  height: '640px',
                  background: '#030014',
                  borderRadius: '0px',
                  overflow: 'hidden',
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-10 bg-gradient-to-br from-nebula-bg to-[#1a1a2e] relative">
                  {/* Screen Content */}
                  <div className="absolute top-0 left-0 w-full h-8 bg-gray-900 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="text-7xl font-bold font-orbitron mb-2 text-nebula-secondary animate-pulse tracking-widest">
                    NEBULA
                  </div>
                  <div className="text-xl text-nebula-accent font-mono tracking-[0.5em] mb-12">
                    OPERATING SYSTEM
                  </div>

                  <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                    <div className="bg-white/5 p-4 rounded border border-white/10 backdrop-blur-sm">
                      <div className="h-2 w-20 bg-nebula-primary mb-2 rounded"></div>
                      <div className="h-1 w-full bg-gray-700 rounded mb-1"></div>
                      <div className="h-1 w-2/3 bg-gray-700 rounded"></div>
                    </div>
                    <div className="bg-white/5 p-4 rounded border border-white/10 backdrop-blur-sm">
                      <div className="h-2 w-20 bg-nebula-secondary mb-2 rounded"></div>
                      <div className="h-1 w-full bg-gray-700 rounded mb-1"></div>
                      <div className="h-1 w-2/3 bg-gray-700 rounded"></div>
                    </div>
                  </div>

                  {/* Code Stream Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-nebula-bg to-transparent opacity-50"></div>
                </div>
              </Html>
            </mesh>

            {/* Webcam */}
            <mesh position={[0, 1.05, 0.052]}>
              <circleGeometry args={[0.02, 16]} />
              <meshStandardMaterial color="#111" />
            </mesh>
          </group>
        </group>

      </Float>
    </group>
  );
};

export default LaptopScene;
