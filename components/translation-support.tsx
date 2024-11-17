'use client';

import {
  motion,
  type Transition,
  useInView,
  type Variants,
} from 'motion/react';
import { useRef } from 'react';

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

const backgroundVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.55, 0.265, 1.95],
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: [0, 1.1, 1],
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.3,
      scale: {
        times: [0, 0.7, 1],
        ease: 'easeInOut',
      },
    },
  }),
};

const boxVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1.1,
    transition: {
      opacity: {
        delay: 0.45,
        duration: 0.2,
      },
      delay: 0.45,
      duration: 0.7,
      ease: 'easeInOut',
    },
  },
};

const arrowLineVariants = {
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

const TranslationSvg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      className="relative flex w-full justify-center overflow-clip pb-6"
      ref={containerRef}
    >
      <motion.svg
        className="absolute bottom-0 left-0 h-[120px] w-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70 153"
        preserveAspectRatio="xMinYMin slice"
        fill="none"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={cornerVariants}
        transition={cornerTransition}
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
        transition={cornerTransition}
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
        />
        <motion.path
          stroke="#E5E7EB"
          d="M4.5 16C4.5 7.44 11.44.5 20 .5h154c8.56 0 15.5 6.94 15.5 15.5v104c0 8.56-6.94 15.5-15.5 15.5H20c-8.56 0-15.5-6.94-15.5-15.5V16Z"
          variants={backgroundVariants}
        />

        <motion.rect
          width="8"
          height="8"
          x="16"
          y="12"
          fill="#E5E7EB"
          rx="4"
          variants={menuItemVariants}
          custom={0}
        />
        <motion.rect
          width="8"
          height="8"
          x="30"
          y="12"
          fill="#E5E7EB"
          rx="4"
          variants={menuItemVariants}
          custom={1}
        />
        <motion.rect
          width="8"
          height="8"
          x="44"
          y="12"
          fill="#E5E7EB"
          rx="4"
          variants={menuItemVariants}
          custom={2}
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
        />
        <motion.rect
          width="47"
          height="47"
          x="16.5"
          y="32.5"
          stroke="#E5E7EB"
          rx="3"
          variants={boxVariants}
          animate={
            isInView
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
              : {}
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
          animate={
            isInView
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
              : {}
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

const BottomArrow = ({ isInView }: { isInView: boolean }) => {
  const path = 'M134.5 105.5H46a6 6 0 0 1-6-6V80';
  const width = 140;
  const height = 110;

  if (!isInView) return null;

  return (
    <svg width={width} height={height} viewBox="0 0 140 110" fill="none">
      <motion.path
        d={path}
        stroke="#E5E7EB"
        strokeWidth="1"
        variants={arrowLineVariants}
      />
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
    </svg>
  );
};

const TopArrow = ({ isInView }: { isInView: boolean }) => {
  const path = 'M60 56h88.5a6 6 0 0 1 6 6v19.5';
  const width = 160;
  const height = 80;

  if (!isInView) return null;

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

const TranslationSupport = () => {
  return (
    <div className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm">
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Translation support
        </h3>
        <p className="text-sm font-mono">
          Support multiple languages by passing a translations object to any Cal
          Atom
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <TranslationSvg />
      </div>
    </div>
  );
};

export { TranslationSupport };
