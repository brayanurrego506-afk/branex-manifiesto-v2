import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { BaseScene } from '../scenes/BaseScene';
import { CAMERA, COLORS, FOG, BLOOM } from '../lib/constants';

export function SceneCanvas() {
  return (
    <Canvas
      style={{ position: 'fixed', inset: 0, zIndex: 1 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      camera={{
        position: CAMERA.position,
        fov: CAMERA.fov,
        near: CAMERA.near,
        far: CAMERA.far,
      }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={[FOG.color, FOG.near, FOG.far]} />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 8]} intensity={3} color="#ffffff" />
        <pointLight position={[-8, 5, 5]} intensity={1.5} color={COLORS.signal} />
        <pointLight position={[0, -5, -10]} intensity={1} color={COLORS.neural} />

        <Environment preset="city" />

        <BaseScene />

        <EffectComposer>
          <Bloom
            intensity={BLOOM.intensity}
            luminanceThreshold={BLOOM.luminanceThreshold}
            luminanceSmoothing={BLOOM.luminanceSmoothing}
            mipmapBlur
          />
          <ChromaticAberration
            offset={[0.0008, 0.0008]}
            blendFunction={BlendFunction.NORMAL}
            radialModulation={false}
            modulationOffset={0}
          />
          <Vignette offset={0.25} darkness={0.65} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
