export type Tile = {
  id: number;
  value: number;
  row: number;
  col: number;
  mergedFrom?: [Tile, Tile] | null;
  previousPosition?: { row: number; col: number };
  isNew?: boolean;
};
export type Grid = (Tile | null)[][];
const GRID_SIZE = 4;
let tileIdCounter = 1;
export const createTile = (row: number, col: number, value: number, isNew = false): Tile => ({
  id: tileIdCounter++,
  row,
  col,
  value,
  isNew,
});
const getEmptyCells = (grid: Grid): { row: number; col: number }[] => {
  const emptyCells: { row: number; col: number }[] = [];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (grid[r][c] === null) {
        emptyCells.push({ row: r, col: c });
      }
    }
  }
  return emptyCells;
};
export const addRandomTile = (grid: Grid): Grid => {
  const newGrid = grid.map(row => [...row]);
  const emptyCells = getEmptyCells(newGrid);
  if (emptyCells.length === 0) return newGrid;
  const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  const value = Math.random() < 0.9 ? 2 : 4;
  newGrid[row][col] = createTile(row, col, value, true);
  return newGrid;
};
export const initGrid = (): Grid => {
  let grid: Grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
  grid = addRandomTile(grid);
  grid = addRandomTile(grid);
  return grid;
};
const prepareTiles = (grid: Grid): Grid => {
  return grid.map(row =>
    row.map(tile => {
      if (!tile) return null;
      return { ...tile, mergedFrom: null, previousPosition: { row: tile.row, col: tile.col }, isNew: false };
    })
  );
};
const moveTile = (tile: Tile | null, grid: Grid, row: number, col: number): void => {
  if (!tile) return;
  grid[tile.row][tile.col] = null;
  tile.previousPosition = { row: tile.row, col: tile.col };
  tile.row = row;
  tile.col = col;
  grid[row][col] = tile;
};
export const move = (
  grid: Grid,
  direction: 'up' | 'down' | 'left' | 'right'
): { newGrid: Grid; score: number; moved: boolean } => {
  const newGrid = prepareTiles(grid);
  let score = 0;
  let moved = false;
  const isVertical = direction === 'up' || direction === 'down';
  const dir = direction === 'up' || direction === 'left' ? 1 : -1;
  for (let i = 0; i < GRID_SIZE; i++) {
    const line: (Tile | null)[] = [];
    for (let j = 0; j < GRID_SIZE; j++) {
      line.push(isVertical ? newGrid[j][i] : newGrid[i][j]);
    }
    const filteredLine = line.filter(tile => tile !== null) as Tile[];
    if (dir === -1) filteredLine.reverse();
    for (let k = 0; k < filteredLine.length - 1; k++) {
      if (filteredLine[k].value === filteredLine[k + 1].value) {
        const merged = createTile(
          filteredLine[k].row,
          filteredLine[k].col,
          filteredLine[k].value * 2
        );
        merged.mergedFrom = [filteredLine[k], filteredLine[k + 1]];
        score += merged.value;
        filteredLine[k] = merged;
        filteredLine.splice(k + 1, 1);
      }
    }
    if (dir === -1) filteredLine.reverse();
    for (let j = 0; j < GRID_SIZE; j++) {
      const targetIndex = dir === 1 ? j : GRID_SIZE - 1 - j;
      const currentTile = isVertical ? newGrid[targetIndex][i] : newGrid[i][targetIndex];
      const newLineTile = filteredLine[j] || null;
      if (currentTile !== newLineTile) {
        moved = true;
        if (isVertical) {
          moveTile(newLineTile, newGrid, targetIndex, i);
        } else {
          moveTile(newLineTile, newGrid, i, targetIndex);
        }
      }
    }
  }
  return { newGrid, score, moved };
};
export const getTilesFromGrid = (grid: Grid): Tile[] => {
  return grid.flat().filter((tile): tile is Tile => tile !== null);
};
export const hasWon = (grid: Grid): boolean => {
  return getTilesFromGrid(grid).some(tile => tile.value === 2048);
};
export const isGameOver = (grid: Grid): boolean => {
  if (getEmptyCells(grid).length > 0) return false;
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const tile = grid[r][c];
      if (tile) {
        if (c < GRID_SIZE - 1 && tile.value === grid[r][c + 1]?.value) return false;
        if (r < GRID_SIZE - 1 && tile.value === grid[r + 1][c]?.value) return false;
      }
    }
  }
  return true;
};