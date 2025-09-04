import React, { useEffect } from 'react';
import { useGameStore } from './store/game-store';
import Gameboard from './components/Gameboard';
import { Button } from './components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './components/ui/dialog';
import { useSwipeable } from 'react-swipeable';
import { useHotkeys } from 'react-hotkeys-hook';
import { motion, AnimatePresence } from 'framer-motion';
export function App() {
  const newGame = useGameStore((state) => state.newGame);
  const move = useGameStore((state) => state.move);
  const score = useGameStore((state) => state.score);
  const bestScore = useGameStore((state) => state.bestScore);
  const status = useGameStore((state) => state.status);
  useEffect(() => {
    newGame();
  }, [newGame]);
  useHotkeys('up, w', () => move('up'), { preventDefault: true });
  useHotkeys('down, s', () => move('down'), { preventDefault: true });
  useHotkeys('left, a', () => move('left'), { preventDefault: true });
  useHotkeys('right, d', () => move('right'), { preventDefault: true });
  const handlers = useSwipeable({
    onSwipedUp: () => move('up'),
    onSwipedDown: () => move('down'),
    onSwipedLeft: () => move('left'),
    onSwipedRight: () => move('right'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  const isGameOver = status === 'lost';
  const hasWon = status === 'won';
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 text-neon-cyan" {...handlers}>
      <main className="w-full max-w-md mx-auto flex flex-col items-center">
        <header className="flex justify-between items-center w-full mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-neon-magenta animate-neon-glow">
            2048
          </h1>
          <div className="flex space-x-2 text-center">
            <ScoreCard label="Score" value={score} />
            <ScoreCard label="Best" value={bestScore} />
          </div>
        </header>
        <Gameboard />
        <footer className="w-full flex flex-col items-center mt-8">
          <Button
            onClick={newGame}
            className="px-6 py-3 rounded-none border-2 border-dashed border-neon-lime text-neon-lime bg-transparent hover:bg-neon-lime/10 hover:shadow-[0_0_15px_#39FF14] transition-all duration-300"
          >
            New Game
          </Button>
          <p className="mt-8 text-sm text-neon-cyan/60">
            Use arrow keys or swipe to play.
          </p>
          <p className="mt-2 text-xs text-neon-cyan/40">
            Built with ❤️ at Cloudflare
          </p>
        </footer>
      </main>
      <AnimatePresence>
        {(isGameOver || hasWon) && (
          <Dialog open={isGameOver || hasWon} onOpenChange={(open) => !open && newGame()}>
            <DialogContent className="font-mono bg-[#1a1a1a]/80 backdrop-blur-sm border-neon-magenta text-neon-cyan rounded-none">
              <DialogHeader>
                <DialogTitle className="text-3xl text-center text-neon-magenta animate-neon-glow">
                  {hasWon ? 'You Win!' : 'Game Over'}
                </DialogTitle>
                <DialogDescription className="text-center text-neon-cyan/80 pt-4">
                  {hasWon ? `You reached the 2048 tile! Your score is ${score}.` : `Your final score is ${score}.`}
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center pt-4">
                <Button
                  onClick={newGame}
                  className="px-6 py-3 rounded-none border-2 border-dashed border-neon-lime text-neon-lime bg-transparent hover:bg-neon-lime/10 hover:shadow-[0_0_15px_#39FF14] transition-all duration-300"
                >
                  Play Again
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}
const ScoreCard = ({ label, value }: { label: string; value: number }) => (
  <div className="bg-black/50 p-3 min-w-[80px] border-2 border-neon-cyan/50">
    <div className="text-xs uppercase text-neon-cyan/70">{label}</div>
    <div className="text-2xl font-bold text-white">{value}</div>
  </div>
);