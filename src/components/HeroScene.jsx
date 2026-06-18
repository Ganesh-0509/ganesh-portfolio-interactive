import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, RoundedBox, Sparkles } from '@react-three/drei'

// ─────────────────────────────────────────────────────────────────────────────
// HeroScene — a soft, warm WebGL backdrop for the hero. Floating scrapbook-y
// shapes in the cream/coral/sage/mustard palette drift gently and lean toward
// the cursor. Deliberately low-poly + low-DPR so it stays buttery on laptops.
// ─────────────────────────────────────────────────────────────────────────────

const PALETTE = {
  coral: '#ee5a40',
  coralSoft: '#f5836e',
  sage: '#a6b178',
  mustard: '#f4c64f',
  sky: '#8fb0d0',
  cream: '#fdf8f0',
}

// A squishy, organic blob (distorted icosahedron).
function Blob({ position, color, scale = 1, speed = 1.4, distort = 0.4 }) {
  return (
    <Float speed={speed} rotationIntensity={0.8} floatIntensity={1.6}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={distort}
          roughness={0.35}
          metalness={0.05}
          clearcoat={0.6}
          clearcoatRoughness={0.4}
        />
      </mesh>
    </Float>
  )
}

function Ring({ position, color, scale = 1, speed = 1 }) {
  return (
    <Float speed={speed} rotationIntensity={1.4} floatIntensity={1.2}>
      <mesh position={position} scale={scale} rotation={[0.6, 0.2, 0]}>
        <torusGeometry args={[1, 0.34, 24, 64]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
      </mesh>
    </Float>
  )
}

function Capsule({ position, color, scale = 1, speed = 1.1, rotation = [0, 0, 0] }) {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1.4}>
      <RoundedBox args={[1.1, 1.1, 1.1]} radius={0.34} smoothness={5} position={position} scale={scale} rotation={rotation}>
        <meshStandardMaterial color={color} roughness={0.45} metalness={0.08} />
      </RoundedBox>
    </Float>
  )
}

// Lerp the whole group toward the pointer for a parallax-with-depth feel.
function ParallaxRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    if (!group.current) return
    const damp = Math.min(1, delta * 2.2)
    group.current.rotation.y += (state.pointer.x * 0.3 - group.current.rotation.y) * damp
    group.current.rotation.x += (-state.pointer.y * 0.2 - group.current.rotation.x) * damp
    group.current.position.x += (state.pointer.x * 0.4 - group.current.position.x) * damp
  })
  return <group ref={group}>{children}</group>
}

export default function HeroScene() {
  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      aria-hidden="true"
    >
      {/* warm key + cool fill so the shapes read as cozy, not plastic */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color={PALETTE.cream} />
      <pointLight position={[-5, -2, 3]} intensity={40} color={PALETTE.coral} distance={18} />
      <pointLight position={[5, 3, -2]} intensity={22} color={PALETTE.mustard} distance={16} />

      <Suspense fallback={null}>
        <ParallaxRig>
          {/* Bold shapes cluster on the right, around the polaroid (no body text there) */}
          <Blob position={[2.8, 0.5, -0.3]} color={PALETTE.coral} scale={1.45} distort={0.45} speed={1.3} />
          <Ring position={[3.1, 2.0, -1.4]} color={PALETTE.mustard} scale={0.62} speed={1.2} />
          <Capsule position={[3.6, -1.7, -0.6]} color={PALETTE.sky} scale={0.72} rotation={[0.4, 0.6, 0.2]} />
          {/* Small, deep accents in the far corners — peripheral, never over the text */}
          <Blob position={[-3.9, -2.4, -3]} color={PALETTE.sage} scale={0.85} distort={0.55} speed={1.7} />
          <Blob position={[-3.6, 2.1, -3]} color={PALETTE.coralSoft} scale={0.5} distort={0.6} speed={2} />

          {/* warm floating dust */}
          <Sparkles count={40} scale={[12, 7, 6]} size={3} speed={0.32} opacity={0.5} color={PALETTE.mustard} />
          <Sparkles count={24} scale={[10, 6, 5]} size={2} speed={0.2} opacity={0.45} color={PALETTE.coralSoft} />
        </ParallaxRig>
      </Suspense>
    </Canvas>
  )
}
