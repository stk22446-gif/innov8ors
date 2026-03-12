'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { Stars, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

// Floating Particles Component
function FloatingParticles({ count = 150 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor: factor as never, speed: speed as never, xFactor: xFactor as never, yFactor: yFactor as never, zFactor: zFactor as never, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      let t = particle.t;
      const { factor, speed, xFactor, yFactor, zFactor } = particle;
      particle.t += speed / 2;
      t = particle.t;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.15, 0]} />
      <meshStandardMaterial
        color="#ff4444"
        emissive="#ff2222"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
}

// Mouse Reactive Camera Component
function MouseCamera() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 10), 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Holographic Sphere with distortion
function HolographicSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      
      // Mouse interaction
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouse.x * 0.5, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouse.y * 0.5, 0.1);
    }
    
    if (ringRef1.current) {
      ringRef1.current.rotation.x = time * 0.5;
      ringRef1.current.rotation.y = time * 0.3;
    }
    
    if (ringRef2.current) {
      ringRef2.current.rotation.x = -time * 0.3;
      ringRef2.current.rotation.z = time * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Main Sphere */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.8, 64, 64]} />
          <MeshDistortMaterial
            color="#ff4444"
            emissive="#ff2222"
            emissiveIntensity={0.8}
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Inner Core */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#ff6666"
            emissive="#ff3333"
            emissiveIntensity={1}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* Floating Ring 1 */}
        <mesh ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.8, 0.03, 16, 100]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
        </mesh>
        
        {/* Floating Ring 2 */}
        <mesh ref={ringRef2} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[3.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#4444ff" transparent opacity={0.3} />
        </mesh>
        
        {/* Floating Ring 3 */}
        <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[3.5, 0.015, 16, 100]} />
          <meshBasicMaterial color="#ff4444" transparent opacity={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

// Animated Grid Lines
function AnimatedGrid() {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={gridRef} position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[30, 30, '#ff4444', '#222222']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
}

// Main Scene Component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff4444" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4444ff" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        color="#ff6666"
      />
      
      {/* Background Stars */}
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      {/* Main 3D Elements */}
      <HolographicSphere />
      <FloatingParticles count={100} />
      <AnimatedGrid />
      
      {/* Environment for reflections */}
      <Environment preset="night" />
      
      {/* Mouse Camera Control */}
      <MouseCamera />
      
      {/* Post Processing Effects */}
      <EffectComposer>
        <Bloom
          intensity={0.8}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
        <ChromaticAberration
          offset={[0.0008, 0.0008]}
          blendFunction={BlendFunction.NORMAL}
        />
        <Vignette
          offset={0.3}
          darkness={0.7}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </>
  );
}

// Loading Fallback
function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#ff4444" wireframe />
    </mesh>
  );
}

// Main PageScene Component
export default function PageScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* Overlay gradient for depth effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}

