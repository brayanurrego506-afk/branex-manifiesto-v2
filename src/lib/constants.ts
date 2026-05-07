export const COLORS = {
  void: '#060B18',
  deep: '#0F1B35',
  signal: '#00D4AA',
  neural: '#6C5CE7',
  data: '#0984E3',
  pulse: '#00CEFF',
  error: '#FF6B6B',
  warning: '#FECA57',
} as const;

export const CAMERA = {
  position: [0, 0, 18] as [number, number, number],
  fov: 52,
  near: 0.1,
  far: 200,
} as const;

export const FOG = {
  color: COLORS.void,
  near: 10,
  far: 60,
} as const;

export const BLOOM = {
  intensity: 0.9,
  luminanceThreshold: 0.12,
  luminanceSmoothing: 0.7,
} as const;

export const SCENES = [
  'preloader',
  'problem',
  'companies',
  'dimensions',
  'origin',
  'cta',
] as const;

export type SceneId = (typeof SCENES)[number];
