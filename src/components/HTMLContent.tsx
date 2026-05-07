import { useEffect } from 'react';
import { useBranexStore } from '../store/useBranexStore';

export function HTMLContent() {
  const setMouse = useBranexStore((s) => s.setMouse);
  const currentScene = useBranexStore((s) => s.currentScene);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [setMouse]);

  return (
    <div className="relative z-[2] pointer-events-none">
      {/* HUD — esquinas */}
      <header className="fixed top-0 left-0 right-0 px-6 py-5 flex justify-between items-start z-[3] pointer-events-none select-none">
        <div className="flex flex-col gap-1 pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.5em] text-signal/80">
            BRANEX
          </span>
          <span className="font-mono text-[9px] tracking-[0.35em] text-white/35">
            // SISTEMA_ONLINE
          </span>
        </div>

        <div className="flex flex-col items-end gap-1 pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/55 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            LIVE
          </span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/30">
            06°15&apos;N · 75°34&apos;W · MEDELLÍN
          </span>
        </div>
      </header>

      <footer className="fixed bottom-0 left-0 right-0 px-6 py-5 flex justify-between items-end z-[3] pointer-events-none select-none">
        <div className="flex flex-col gap-1 pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.5em] text-signal/80">
            // CAPÍTULO_00
          </span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/35 uppercase">
            FASE: {currentScene}
          </span>
        </div>

        <div className="flex flex-col items-end gap-1 pointer-events-auto">
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/55">
            v2.0.0 — MANIFIESTO
          </span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/30">
            DONDE LOS DATOS SE CONVIERTEN EN DECISIONES
          </span>
        </div>
      </footer>

      {/* Anchors para ScrollTrigger en fases futuras */}
      <div id="scene-1" className="h-screen" />
      <div id="scene-2" className="h-screen" />
      <div id="scene-3" className="h-screen" />
      <div id="scene-4" className="h-screen" />
      <div id="scene-5" className="h-screen" />
      <div id="scene-6" className="h-screen" />
      <div id="scene-7" className="h-screen" />
    </div>
  );
}
