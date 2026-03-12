'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import FloatingParticles from './FloatingParticles';
import HolographicSphere from './HolographicSphere';

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ff4444" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4444ff" />
          
          {/* Starfield background */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          
          {/* Main holographic sphere */}
          <HolographicSphere />
          
          {/* Floating particles */}
          <FloatingParticles count={200} />
          
          {/* Environment for reflections */}
          <Environment preset="night" />
          
          {/* Post-processing effects */}
          <EffectComposer>
            <Bloom
              intensity={0.5}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              blendFunction={BlendFunction.ADD}
            />
            <ChromaticAberration
              offset={[0.0005, 0.0005]}
              blendFunction={BlendFunction.NORMAL}
            />
            <Vignette
              offset={0.3}
              darkness={0.6}
              blendFunction={BlendFunction.NORMAL}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

