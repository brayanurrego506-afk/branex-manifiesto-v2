# Branex Manifiesto

> Donde los datos se convierten en decisiones.

Experiencia web inmersiva 3D inspirada en sitios de vanguardia (igloo.inc) — el manifiesto de **Branex S.A.S**, empresa colombiana de inteligencia de datos e IA con sede en Medellín.

## Stack

- **Framework:** Vite + React 19 + TypeScript estricto
- **Estilos:** Tailwind CSS 3 + Geist (Google Fonts)
- **3D:** `@react-three/fiber` + `@react-three/drei` + `@react-three/postprocessing`
- **Animación:** GSAP + ScrollTrigger + framer-motion
- **Scroll suave:** `lenis`
- **Estado:** Zustand
- **Deploy target:** Vercel

## Paleta

| Token  | Hex       | Uso                         |
| ------ | --------- | --------------------------- |
| void   | `#060B18` | Fondo siempre               |
| deep   | `#0F1B35` | Superficies                 |
| signal | `#00D4AA` | Verde Branex (protagonista) |
| neural | `#6C5CE7` | Púrpura IA                  |
| data   | `#0984E3` | Azul datos                  |
| pulse  | `#00CEFF` | Cyan eléctrico              |

## Construcción por fases

El proyecto se construye **una fase a la vez** con verificación visual en navegador entre cada una:

1. **Boilerplate** — Canvas R3F fijo + HUD HTML + bloom + niebla
2. **Preloader** — partículas que forman la "B" de Branex
3. **Escena 1 — El problema** — café, flor, barril (texto izquierda, 3D derecha)
4. **Escena 2 — Ciudad de luz** — 30 edificios, suelo reflectivo, cámara 3/4
5. **Scroll** — Lenis + GSAP conecta las escenas
6. **Escena Medellín** — imagen real con paralaje 3D y data nodes
7. **Toque igloo** — materiales de vidrio (transmission/thickness/ior)

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:5173`.

## Estructura

```
src/
├── App.tsx               Orquestador
├── components/
│   ├── SceneCanvas.tsx   Canvas R3F (fondo fijo)
│   ├── HTMLContent.tsx   HUD + textos
│   └── Loader.tsx        Preloader (Fase 2)
├── scenes/
│   └── BaseScene.tsx     Escena vacía base
├── store/
│   └── useBranexStore.ts Zustand store
└── lib/
    └── constants.ts      Colores, cámara, timings
```
