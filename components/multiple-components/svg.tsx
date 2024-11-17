'use client';

import {
  motion,
  type Variants,
  type Transition,
  useReducedMotion,
} from 'motion/react';

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.68, -0.55, 0.265, 1.95],
};

const centeredStackVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion ? undefined : defaultTransition,
  }),
};

const leftStackVariants: Variants = {
  hidden: { opacity: 0, rotate: 0, x: 0, y: 100 },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    rotate: '-12deg',
    x: '-3rem',
    y: '3rem',
    transition: prefersReducedMotion
      ? undefined
      : {
          opacity: defaultTransition,
          y: defaultTransition,
          rotate: { delay: 0.4, ...defaultTransition },
          x: { delay: 0.4, ...defaultTransition },
        },
  }),
};

const rightStackVariants: Variants = {
  hidden: { opacity: 0, rotate: 0, x: 0, y: 100 },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    rotate: '12deg',
    x: '3rem',
    y: '3rem',
    transition: prefersReducedMotion
      ? undefined
      : {
          opacity: defaultTransition,
          y: defaultTransition,
          rotate: { delay: 0.4, ...defaultTransition },
          x: { delay: 0.4, ...defaultTransition },
        },
  }),
};

const StackSvg = ({ isInView }: { isInView: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative translate-y-8">
      <motion.svg
        className="absolute left-0 top-0 w-[180px] translate-x-12 translate-y-12 rotate-12 scale-95 opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 221"
        fill="none"
        initial="hidden"
        custom={prefersReducedMotion}
        animate={isInView ? 'visible' : 'hidden'}
        variants={rightStackVariants}
        transition={prefersReducedMotion ? undefined : defaultTransition}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.05,
                y: '2rem',
                transition: {
                  duration: 0.3,
                },
              }
        }
      >
        <rect width="182" height="212" x="5" fill="#fff" rx="8" />
        <rect
          width="181"
          height="211"
          x="5.5"
          y=".5"
          stroke="#E5E7EB"
          rx="7.5"
        />
        <rect width="115" height="12" x="17" y="12" fill="#EBECEF" rx="6" />
        <rect width="78" height="12" x="17" y="32" fill="#EBECEF" rx="6" />
        <rect width="142" height="12" x="17" y="52" fill="#EBECEF" rx="6" />
        <rect width="104" height="12" x="17" y="72" fill="#EBECEF" rx="6" />
        <rect width="66" height="12" x="17" y="92" fill="#EBECEF" rx="6" />
        <rect width="93" height="12" x="17" y="112" fill="#EBECEF" rx="6" />
        <rect width="122" height="12" x="17" y="132" fill="#EBECEF" rx="6" />
        <rect width="80" height="12" x="17" y="152" fill="#EBECEF" rx="6" />
        <rect width="134" height="12" x="17" y="172" fill="#EBECEF" rx="6" />
      </motion.svg>
      <motion.svg
        className="relative z-10 w-[180px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 221"
        fill="none"
        variants={centeredStackVariants}
        initial="hidden"
        custom={prefersReducedMotion}
        animate={isInView ? 'visible' : 'hidden'}
        transition={prefersReducedMotion ? undefined : defaultTransition}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.05,
                y: '-0.5rem',
                transition: {
                  duration: 0.3,
                },
              }
        }
      >
        <rect width="182" height="212" x="5" fill="#fff" rx="8" />
        <rect
          width="181"
          height="211"
          x="5.5"
          y=".5"
          stroke="#E5E7EB"
          rx="7.5"
        />
        <rect width="115" height="12" x="17" y="12" fill="#EBECEF" rx="6" />
        <rect width="78" height="12" x="17" y="32" fill="#EBECEF" rx="6" />
        <rect width="142" height="12" x="17" y="52" fill="#EBECEF" rx="6" />
        <rect width="104" height="12" x="17" y="72" fill="#EBECEF" rx="6" />
        <rect width="66" height="12" x="17" y="92" fill="#EBECEF" rx="6" />
        <rect width="93" height="12" x="17" y="112" fill="#EBECEF" rx="6" />
        <rect width="122" height="12" x="17" y="132" fill="#EBECEF" rx="6" />
        <rect width="80" height="12" x="17" y="152" fill="#EBECEF" rx="6" />
        <rect width="134" height="12" x="17" y="172" fill="#EBECEF" rx="6" />
      </motion.svg>
      <motion.svg
        className="absolute left-0 top-0 w-[180px] -translate-x-12 translate-y-12 -rotate-12 scale-95 opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 221"
        fill="none"
        initial="hidden"
        custom={prefersReducedMotion}
        animate={isInView ? 'visible' : 'hidden'}
        variants={leftStackVariants}
        transition={prefersReducedMotion ? undefined : defaultTransition}
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.05,
                y: '2rem',
              }
        }
      >
        <rect width="182" height="212" x="5" fill="#fff" rx="8" />
        <rect
          width="181"
          height="211"
          x="5.5"
          y=".5"
          stroke="#E5E7EB"
          rx="7.5"
        />
        <rect width="115" height="12" x="17" y="12" fill="#EBECEF" rx="6" />
        <rect width="78" height="12" x="17" y="32" fill="#EBECEF" rx="6" />
        <rect width="142" height="12" x="17" y="52" fill="#EBECEF" rx="6" />
        <rect width="104" height="12" x="17" y="72" fill="#EBECEF" rx="6" />
        <rect width="66" height="12" x="17" y="92" fill="#EBECEF" rx="6" />
        <rect width="93" height="12" x="17" y="112" fill="#EBECEF" rx="6" />
        <rect width="122" height="12" x="17" y="132" fill="#EBECEF" rx="6" />
        <rect width="80" height="12" x="17" y="152" fill="#EBECEF" rx="6" />
        <rect width="134" height="12" x="17" y="172" fill="#EBECEF" rx="6" />
      </motion.svg>
    </div>
  );
};

export { StackSvg };
