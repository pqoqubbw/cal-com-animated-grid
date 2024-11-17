'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

const GRID_WIDTH = 17;
const GRID_HEIGHT = 7;
const TOTAL_SQUARES = GRID_WIDTH * GRID_HEIGHT;
const SQUARE_SIZE = 23;
const ANIMATION_INTERVAL = 200;
const TRANSITION_DURATION = 0.5;

const LIGHT_COLOR = '#FFFFFF';
const DARK_COLOR = '#F3F4F6';
const STROKE_COLOR = '#E5E7EB';

const INITIAL_DARK_SQUARES = [
  58, 81, 150, 196, 242, 311, 12, 35, 380, 104, 150, 196, 242, 311, 357,
];

const ANIMATABLE_SQUARES = [
  // top 3 rows
  ...Array.from({ length: GRID_WIDTH * 3 }, (_, i) => i),
  // left 3 columns
  ...Array.from({ length: GRID_HEIGHT - 3 }, (_, i) => (i + 3) * GRID_WIDTH),
  ...Array.from(
    { length: GRID_HEIGHT - 3 },
    (_, i) => (i + 3) * GRID_WIDTH + 1
  ),
  ...Array.from(
    { length: GRID_HEIGHT - 3 },
    (_, i) => (i + 3) * GRID_WIDTH + 2
  ),
  // right 3 columns
  ...Array.from(
    { length: GRID_HEIGHT - 3 },
    (_, i) => (i + 4) * GRID_WIDTH - 3
  ),
  ...Array.from(
    { length: GRID_HEIGHT - 3 },
    (_, i) => (i + 4) * GRID_WIDTH - 2
  ),
  ...Array.from(
    { length: GRID_HEIGHT - 3 },
    (_, i) => (i + 4) * GRID_WIDTH - 1
  ),
];

const SquaredBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  const [animatedSquares, setAnimatedSquares] = useState<Set<number>>(
    () => new Set(INITIAL_DARK_SQUARES)
  );

  const getNeighbors = (square: number): number[] => {
    const row = Math.floor(square / GRID_WIDTH);
    const col = square % GRID_WIDTH;
    return [
      (row - 1) * GRID_WIDTH + col - 1,
      (row - 1) * GRID_WIDTH + col,
      (row - 1) * GRID_WIDTH + col + 1,
      row * GRID_WIDTH + col - 1,
      row * GRID_WIDTH + col + 1,
      (row + 1) * GRID_WIDTH + col - 1,
      (row + 1) * GRID_WIDTH + col,
      (row + 1) * GRID_WIDTH + col + 1,
    ].filter(
      (s) => s >= 0 && s < TOTAL_SQUARES && ANIMATABLE_SQUARES.includes(s)
    );
  };

  const availableSquares = useMemo(() => {
    return ANIMATABLE_SQUARES.filter(
      (square) =>
        !getNeighbors(square).some((neighbor) => animatedSquares.has(neighbor))
    );
  }, [animatedSquares]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (availableSquares.length > 0 && !prefersReducedMotion) {
        const randomSquare =
          availableSquares[Math.floor(Math.random() * availableSquares.length)];
        setAnimatedSquares((prev) => {
          const next = new Set(prev);
          if (next.has(randomSquare)) {
            next.delete(randomSquare);
          } else {
            next.add(randomSquare);
          }
          return next;
        });
      }
    }, ANIMATION_INTERVAL);

    return () => clearInterval(interval);
  }, [availableSquares, prefersReducedMotion]);

  return (
    <motion.svg
      className="radial-fadeout absolute left-0 w-full"
      preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 392 178"
      width="392"
      height="178"
      fill="none"
    >
      {Array.from({ length: TOTAL_SQUARES }).map((_, index) => (
        <motion.path
          key={index}
          d={`M${(index % GRID_WIDTH) * SQUARE_SIZE - 10.5} ${
            Math.floor(index / GRID_WIDTH) * SQUARE_SIZE + 0.5
          }h${SQUARE_SIZE}v${SQUARE_SIZE}h-${SQUARE_SIZE}z`}
          initial={{
            fill: INITIAL_DARK_SQUARES.includes(index)
              ? DARK_COLOR
              : LIGHT_COLOR,
          }}
          animate={
            ANIMATABLE_SQUARES.includes(index)
              ? {
                  fill: animatedSquares.has(index) ? DARK_COLOR : LIGHT_COLOR,
                }
              : {}
          }
          transition={
            prefersReducedMotion ? undefined : { duration: TRANSITION_DURATION }
          }
          stroke={STROKE_COLOR}
        />
      ))}
    </motion.svg>
  );
};

export { SquaredBackground };
