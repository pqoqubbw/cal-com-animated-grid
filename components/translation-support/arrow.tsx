'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Fragment } from 'react';

const arrowLineVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const BottomArrow = ({ isInView }: { isInView: boolean }) => {
  const path = 'M134.5 105.5H46a6 6 0 0 1-6-6V80';
  const width = 140;
  const height = 110;

  const prefersReducedMotion = useReducedMotion();

  if (!isInView) return null;

  if (prefersReducedMotion) {
    return <path d={path} stroke="#E5E7EB" strokeWidth="1" />;
  }

  return (
    <svg width={width} height={height} viewBox="0 0 140 110" fill="none">
      <motion.path
        d={path}
        stroke="#E5E7EB"
        strokeWidth="1"
        variants={arrowLineVariants}
      />
      <Fragment>
        <motion.path
          d={path}
          stroke="url(#gradient-pulse)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <defs>
          <motion.linearGradient
            id="gradient-pulse"
            gradientUnits="userSpaceOnUse"
            initial={{
              y1: 110,
              y2: 126,
              x1: 135,
              x2: 165,
            }}
            animate={{
              y1: [110, 110],
              y2: [126, 126],
              x1: [135, -30],
              x2: [165, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 4.9,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            <stop stopColor="#1d1d20" stopOpacity="0" />
            <stop offset="0.5" stopColor="#1d1d20" />
            <stop offset="1" stopColor="#292929" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </Fragment>
    </svg>
  );
};

const TopArrow = ({ isInView }: { isInView: boolean }) => {
  const path = 'M60 56h88.5a6 6 0 0 1 6 6v19.5';
  const width = 160;
  const height = 80;

  const prefersReducedMotion = useReducedMotion();

  if (!isInView) return null;

  if (prefersReducedMotion) {
    return <path d={path} stroke="#E5E7EB" strokeWidth="1" />;
  }

  return (
    <svg width={width} height={height} viewBox="0 0 160 80" fill="none">
      <motion.path
        d={path}
        stroke="#E5E7EB"
        strokeWidth="1"
        variants={arrowLineVariants}
      />
      <motion.path
        d={path}
        stroke="url(#gradient-pulse-top)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <defs>
        <motion.linearGradient
          id="gradient-pulse-top"
          gradientUnits="userSpaceOnUse"
          initial={{
            y1: 60,
            y2: 80,
            x1: -30,
            x2: 0,
          }}
          animate={{
            y1: [60, 82],
            y2: [80, 102],
            x1: [-30, 150],
            x2: [0, 180],
          }}
          transition={{
            duration: 1.5,
            delay: 2,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          <stop stopColor="#1d1d20" stopOpacity="0" />
          <stop offset="0.5" stopColor="#1d1d20" />
          <stop offset="1" stopColor="#292929" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export { BottomArrow, TopArrow };
