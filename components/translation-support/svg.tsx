'use client';

import {
  useReducedMotion,
  motion,
  type Variants,
  type Transition,
} from 'motion/react';
import { BottomArrow, TopArrow } from './arrow';

const cornerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const cornerTransition: Transition = {
  duration: 0.5,
  ease: 'easeInOut',
};

const backgroundVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? undefined
      : {
          duration: 0.5,
          ease: [0.68, -0.55, 0.265, 1.95],
        },
  }),
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: ({
    count,
    prefersReducedMotion,
  }: {
    count: number;
    prefersReducedMotion: boolean;
  }) => ({
    opacity: 1,
    scale: prefersReducedMotion ? 1 : [0, 1.1, 1],
    transition: prefersReducedMotion
      ? undefined
      : {
          delay: 0.4 + count * 0.1,
          duration: 0.3,
          scale: {
            times: [0, 0.7, 1],
            ease: 'easeInOut',
          },
        },
  }),
};

const boxVariants: Variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    pathLength: 1.1,
    transition: prefersReducedMotion
      ? undefined
      : {
          opacity: {
            delay: 0.45,
            duration: 0.2,
          },
          delay: 0.45,
          duration: 0.7,
          ease: 'easeInOut',
        },
  }),
};

const TranslationSvg = ({ isInView }: { isInView: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative flex w-full justify-center overflow-clip pb-6">
      <motion.svg
        className="absolute bottom-0 left-0 h-[120px] w-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70 153"
        preserveAspectRatio="xMinYMin slice"
        fill="none"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={cornerVariants}
        transition={prefersReducedMotion ? undefined : cornerTransition}
      >
        <rect
          x="-23.5"
          y="0.5"
          width="93"
          height="153"
          rx="7.5"
          fill="white"
          stroke="url(#paint0_linear_768_145)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_768_145"
            x1="68"
            y1="4.18702e-06"
            x2="23"
            y2="31"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.706716" stopColor="#F3F4F6" />
            <stop offset="1" stopColor="#F3F4F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        className="absolute right-0 top-0 -scale-x-100 h-[120px] w-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70 153"
        preserveAspectRatio="xMinYMin slice"
        fill="none"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={cornerVariants}
        transition={prefersReducedMotion ? undefined : cornerTransition}
      >
        <rect
          x="-23.5"
          y="0.5"
          width="93"
          height="153"
          rx="7.5"
          fill="white"
          stroke="url(#paint0_linear_768_145)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_768_145"
            x1="68"
            y1="4.18702e-06"
            x2="23"
            y2="31"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.706716" stopColor="#F3F4F6" />
            <stop offset="1" stopColor="#F3F4F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
      <motion.svg
        className="z-120 relative drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 194 145"
        width="194"
        height="155"
        fill="none"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.path
          fill="#fff"
          d="M4 16C4 7.163 11.163 0 20 0h154c8.837 0 16 7.163 16 16v104c0 8.837-7.163 16-16 16H20c-8.837 0-16-7.163-16-16V16Z"
          variants={backgroundVariants}
          custom={prefersReducedMotion}
        />
        <motion.path
          stroke="#E5E7EB"
          d="M4.5 16C4.5 7.44 11.44.5 20 .5h154c8.56 0 15.5 6.94 15.5 15.5v104c0 8.56-6.94 15.5-15.5 15.5H20c-8.56 0-15.5-6.94-15.5-15.5V16Z"
          variants={backgroundVariants}
          custom={prefersReducedMotion}
        />

        <motion.rect
          width="8"
          height="8"
          x="16"
          y="12"
          fill="#E5E7EB"
          rx="4"
          variants={menuItemVariants}
          custom={{ count: 0, prefersReducedMotion }}
        />
        <motion.rect
          width="8"
          height="8"
          x="30"
          y="12"
          fill="#E5E7EB"
          rx="4"
          variants={menuItemVariants}
          custom={{ count: 1, prefersReducedMotion }}
        />
        <motion.rect
          width="8"
          height="8"
          x="44"
          y="12"
          fill="#E5E7EB"
          rx="4"
          variants={menuItemVariants}
          custom={{ count: 2, prefersReducedMotion }}
        />

        <TopArrow isInView={isInView} />
        <BottomArrow isInView={isInView} />

        <motion.rect
          width="47"
          height="47"
          x="16.5"
          y="32.5"
          fill="#F9FAFB"
          rx="3.5"
          variants={boxVariants}
          custom={prefersReducedMotion}
        />
        <motion.rect
          width="47"
          height="47"
          x="16.5"
          y="32.5"
          stroke="#E5E7EB"
          rx="3"
          variants={boxVariants}
          custom={prefersReducedMotion}
          animate={
            prefersReducedMotion
              ? {
                  stroke: '#E5E7EB',
                }
              : isInView
              ? {
                  stroke: ['#E5E7EB', '#292929', '#292929', '#E5E7EB'],
                  transition: {
                    times: [0, 0.05, 0.95, 1],
                    duration: 2,
                    delay: 5.7,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                  },
                }
              : undefined
          }
        />
        <motion.path
          fill="#000"
          d="M32.864 52.672h4.816v1.2h-4.816v-1.2Zm6.528-4.064h1.248V61.6c0 .848-.224 1.232-.752 1.44-.544.224-1.472.256-2.96.256-.048-.352-.288-.944-.48-1.312 1.152.048 2.176.032 2.512.032.304-.016.432-.112.432-.416V48.608Zm-2.128 4.064h.256l.208-.048.816.304c-.816 4.224-2.752 7.216-5.104 8.816-.208-.288-.688-.768-.976-.96 2.288-1.44 4.128-4.176 4.8-7.84v-.272Zm3.312-1.456c1.104 4.304 3.392 8.192 6.976 9.76-.304.24-.72.72-.928 1.088-3.648-1.808-5.824-5.888-7.008-10.624l.96-.224Zm5.216-.048 1.104.784c-1.312 1.456-3.136 3.216-4.528 4.288l-.848-.672c1.36-1.104 3.216-2.976 4.272-4.4Z"
          variants={boxVariants}
        />

        <motion.rect
          width="47"
          height="47"
          x="130.5"
          y="76.5"
          fill="#F9FAFB"
          rx="3.5"
          variants={boxVariants}
        />
        <motion.rect
          width="47"
          height="47"
          x="130.5"
          y="76.5"
          stroke="#E5E7EB"
          rx="3.5"
          variants={boxVariants}
          custom={prefersReducedMotion}
          animate={
            prefersReducedMotion
              ? {
                  stroke: '#E5E7EB',
                }
              : isInView
              ? {
                  stroke: ['#E5E7EB', '#292929', '#292929', '#E5E7EB'],
                  transition: {
                    times: [0, 0.05, 0.95, 1],
                    duration: 2,
                    delay: 2.9,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                  },
                }
              : undefined
          }
        />
        <motion.path
          fill="#000"
          d="m153.998 96.72-2 5.136h3.984l-1.984-5.136Zm-5.104 9.28 4.432-11.2h1.328l4.448 11.2h-1.52l-1.104-2.848h-4.976L150.398 106h-1.504Z"
          variants={boxVariants}
        />
      </motion.svg>
    </div>
  );
};

export { TranslationSvg };
