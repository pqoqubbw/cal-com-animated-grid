'use client';

import { motion, useInView, type Variants } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';

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
      if (availableSquares.length > 0) {
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
  }, [availableSquares]);

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
          transition={{ duration: TRANSITION_DURATION }}
          stroke={STROKE_COLOR}
        />
      ))}
    </motion.svg>
  );
};

const boxVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: [0, 1.1, 1],
    transition: {
      delay: 0.8 + i * 0.1,
      duration: 0.3,
      scale: {
        times: [0, 0.7, 1],
        ease: 'easeInOut',
      },
    },
  }),
};

const mainCircleVariants: Variants = {
  hidden: { opacity: 0, rotate: 0 },
  visible: {
    opacity: 1,
    rotate: 360,
    transition: {
      rotate: {
        duration: 0.8,
        type: 'spring',
        stiffness: 45,
        delay: 0.5,
        damping: 15,
      },
      opacity: {
        delay: 0.5,
        duration: 0.4,
      },
    },
  },
};

const mainCircleRotateVariants: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      delay: 1.6,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const innerCircleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        delay: 0.4,
      },
      opacity: {
        delay: 0.4,
        duration: 0.6,
      },
    },
  },
};

const innerCirclePulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 0.95, 1],
    transition: {
      duration: 6,
      delay: 1.4,
      ease: 'easeInOut',
      times: [0, 0.33, 0.66, 1],
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const outerCircleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: {
        type: 'spring',
        damping: 12,
        stiffness: 90,
        delay: 0.5,
      },
      opacity: {
        delay: 0.5,
        duration: 0.6,
      },
    },
  },
};

const outerCirclePulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 0.95, 1.02, 1],
    transition: {
      duration: 6,
      delay: 1.5,
      ease: 'easeInOut',
      times: [0, 0.33, 0.66, 1],
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const WindowSvg = ({ isInView }: { isInView: boolean }) => {
  return (
    <svg
      className="relative z-10 -mb-4 mt-8 w-[250px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 263 175"
      fill="none"
    >
      <motion.path
        variants={boxVariants}
        animate={isInView ? 'visible' : 'hidden'}
        initial="hidden"
        fill="#fff"
        d="M5 27c0-6.627 5.373-12 12-12h229c6.627 0 12 5.373 12 12v188c0 6.627-5.373 12-12 12H17c-6.627 0-12-5.373-12-12V27Z"
      />
      <motion.path
        variants={boxVariants}
        animate={isInView ? 'visible' : 'hidden'}
        initial="hidden"
        stroke="#E5E7EB"
        d="M5.5 27c0-6.351 5.149-11.5 11.5-11.5h229c6.351 0 11.5 5.149 11.5 11.5v188c0 6.351-5.149 11.5-11.5 11.5H17c-6.351 0-11.5-5.149-11.5-11.5V27Z"
      />

      <motion.rect
        width="8"
        height="8"
        x="19"
        y="29"
        fill="#E5E7EB"
        rx="4"
        initial="hidden"
        variants={menuItemVariants}
        animate={isInView ? 'visible' : 'hidden'}
        custom={0}
      />
      <motion.rect
        width="8"
        height="8"
        x="33"
        y="29"
        fill="#E5E7EB"
        rx="4"
        initial="hidden"
        variants={menuItemVariants}
        animate={isInView ? 'visible' : 'hidden'}
        custom={1}
      />
      <motion.rect
        width="8"
        height="8"
        x="47"
        y="29"
        fill="#E5E7EB"
        rx="4"
        initial="hidden"
        variants={menuItemVariants}
        animate={isInView ? 'visible' : 'hidden'}
        custom={2}
      />

      <motion.g
        variants={outerCircleVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.g
          variants={outerCirclePulseVariants}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
        >
          <circle cx="130.5" cy="62.5" r="60.5" fill="#F9FAFB" />
          <circle cx="130.5" cy="62.5" r="60" stroke="#F3F4F6" />
        </motion.g>
      </motion.g>

      <motion.g
        variants={innerCircleVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.circle
          cx="131"
          cy="63"
          r="47.5"
          fill="#F3F4F6"
          stroke="#E5E7EB"
          opacity=".92"
          variants={innerCirclePulseVariants}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
        />
      </motion.g>

      <motion.g
        filter="url(#c)"
        initial="hidden"
        variants={mainCircleVariants}
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.g
          variants={mainCircleRotateVariants}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
        >
          <path
            className="translate-y-[2px]"
            fill="#C2C7D0"
            fillRule="evenodd"
            d="M107 53.678c0-3.853 2.079-7.407 5.437-9.297l13.334-7.5a10.665 10.665 0 0 1 10.458 0l13.334 7.5A10.666 10.666 0 0 1 155 53.678v14.643c0 3.853-2.079 7.407-5.437 9.297l-13.334 7.5a10.666 10.666 0 0 1-10.458 0l-13.333-7.5A10.667 10.667 0 0 1 107 68.321V53.678ZM121.667 61A9.333 9.333 0 0 1 131 51.667 9.333 9.333 0 0 1 140.333 61 9.333 9.333 0 0 1 131 70.333 9.333 9.333 0 0 1 121.667 61Z"
            clipRule="evenodd"
          />
        </motion.g>
      </motion.g>

      <defs>
        <filter
          id="c"
          width="60"
          height="60"
          x="105"
          y="37.512"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.8" />
          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0.226872 0 0 0 0 0.226872 0 0 0 0 0.226872 0 0 0 0.22 0" />
          <feBlend in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
      </defs>
    </svg>
  );
};

const FundamentallyConfigurable = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm"
      ref={containerRef}
    >
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Fundamentally configurable
        </h3>
        <p className="text-sm font-mono">
          Configure errors, breakpoints and loading states using a simple API.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <div className="relative flex w-full justify-center overflow-clip">
          <SquaredBackground />
          <WindowSvg isInView={isInView} />
        </div>
      </div>
    </div>
  );
};

export { FundamentallyConfigurable };
