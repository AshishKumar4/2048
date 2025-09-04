import React from 'react';
import { useGameStore } from '../store/game-store';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { Tile as TileType } from '../lib/game-logic';
const TILE_COLORS: { [key: number]: string } = {
  2: 'bg-tile-2 text-gray-300',
  4: 'bg-tile-4 text-gray-200',
  8: 'bg-tile-8 text-white',
  16: 'bg-tile-16 text-white',
  32: 'bg-tile-32 text-white',
  64: 'bg-tile-64 text-white',
  128: 'bg-tile-128 text-white',
  256: 'bg-tile-256 text-white',
  512: 'bg-tile-512 text-white',
  1024: 'bg-tile-1024 text-white',
  2048: 'bg-tile-2048 text-white',
  4096: 'bg-tile-4096 text-white',
};
const TILE_SHADOW_COLORS: { [key: number]: string } = {
  2: '#262626',
  4: '#404040',
  8: '#047857',
  16: '#059669',
  32: '#1d4ed8',
  64: '#2563eb',
  128: '#9333ea',
  256: '#a855f7',
  512: '#c026d3',
  1024: '#d946ef',
  2048: '#e11d48',
  4096: '#f43f5e',
};
const Tile = ({ tile }: { tile: TileType }) => {
  const colorClass = TILE_COLORS[tile.value] || 'bg-gray-800 text-white';
  const shadowColor = TILE_SHADOW_COLORS[tile.value] || '#fff';
  const fontSize = tile.value > 1000 ? 'text-2xl' : tile.value > 100 ? 'text-3xl' : 'text-4xl';
  const isNew = tile.isNew;
  const isMerged = !!tile.mergedFrom;
  return (
    <motion.div
      layoutId={tile.id.toString()}
      initial={isNew ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
      animate={{
        opacity: 1,
        scale: isMerged ? [1, 1.2, 1] : 1,
        transition: { duration: isNew ? 0.2 : 0.1, delay: isNew ? 0.1 : 0 }
      }}
      className={cn(
        'absolute w-full h-full flex items-center justify-center font-bold select-none',
        'rounded-none', // Explicitly non-rounded as per retro theme
        colorClass,
        fontSize
      )}
      style={{
        top: `calc(${tile.row * 25}% + ${tile.row * 0.75}rem)`,
        left: `calc(${tile.col * 25}% + ${tile.col * 0.75}rem)`,
        width: 'calc(25% - 0.75rem)',
        height: 'calc(25% - 0.75rem)',
        boxShadow: `0 0 15px ${shadowColor}`,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {tile.value}
    </motion.div>
  );
};
const Gameboard = () => {
  const tiles = useGameStore((state) => state.tiles);
  return (
    <div className="relative w-full aspect-square bg-black/50 p-3 border-4 border-neon-cyan/50">
      <div className="grid grid-cols-4 grid-rows-4 gap-3 w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-full h-full bg-gray-800/50" />
        ))}
      </div>
      <div className="absolute inset-3">
        <AnimatePresence>
          {tiles.map((tile) => (
            <Tile key={tile.id} tile={tile} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Gameboard;