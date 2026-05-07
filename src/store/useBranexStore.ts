import { create } from 'zustand';
import type { SceneId } from '../lib/constants';

type MouseState = { x: number; y: number };

type BranexState = {
  currentScene: SceneId;
  preloaderDone: boolean;
  mouse: MouseState;
  setScene: (scene: SceneId) => void;
  setPreloaderDone: (done: boolean) => void;
  setMouse: (mouse: MouseState) => void;
};

export const useBranexStore = create<BranexState>((set) => ({
  currentScene: 'preloader',
  preloaderDone: false,
  mouse: { x: 0, y: 0 },
  setScene: (currentScene) => set({ currentScene }),
  setPreloaderDone: (preloaderDone) => set({ preloaderDone }),
  setMouse: (mouse) => set({ mouse }),
}));
