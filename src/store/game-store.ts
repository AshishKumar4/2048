import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  Tile,
  Grid,
  initGrid,
  move as moveLogic,
  addRandomTile,
  hasWon as checkWin,
  isGameOver as checkGameOver,
  getTilesFromGrid,
} from '../lib/game-logic';
type GameStatus = 'playing' | 'won' | 'lost';
interface GameState {
  grid: Grid;
  tiles: Tile[];
  score: number;
  bestScore: number;
  status: GameStatus;
  move: (direction: 'up' | 'down' | 'left' | 'right') => void;
  newGame: () => void;
}
export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      grid: [],
      tiles: [],
      score: 0,
      bestScore: 0,
      status: 'playing',
      newGame: () => {
        const initialGrid = initGrid();
        set({
          grid: initialGrid,
          tiles: getTilesFromGrid(initialGrid),
          score: 0,
          status: 'playing',
        });
      },
      move: (direction) => {
        const { grid, score, bestScore, status } = get();
        if (status !== 'playing') return;
        const { newGrid, score: scoreIncrease, moved } = moveLogic(grid, direction);
        if (!moved) return;
        const gridWithNewTile = addRandomTile(newGrid);
        const newTiles = getTilesFromGrid(gridWithNewTile);
        const newScore = score + scoreIncrease;
        const newBestScore = Math.max(bestScore, newScore);
        let newStatus: GameStatus = 'playing';
        if (checkWin(gridWithNewTile)) {
          newStatus = 'won';
        } else if (checkGameOver(gridWithNewTile)) {
          newStatus = 'lost';
        }
        set({
          grid: gridWithNewTile,
          tiles: newTiles,
          score: newScore,
          bestScore: newBestScore,
          status: newStatus,
        });
      },
    }),
    {
      name: 'pixel-shift-2048-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ bestScore: state.bestScore }),
    }
  )
);