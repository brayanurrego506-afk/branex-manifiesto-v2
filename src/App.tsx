import { SceneCanvas } from './components/SceneCanvas';
import { HTMLContent } from './components/HTMLContent';

export default function App() {
  return (
    <div style={{ background: '#060B18', minHeight: '700vh' }}>
      {/* 3D Canvas — fondo fijo, siempre detrás */}
      <SceneCanvas />

      {/* HTML Content — flota encima */}
      <HTMLContent />
    </div>
  );
}
