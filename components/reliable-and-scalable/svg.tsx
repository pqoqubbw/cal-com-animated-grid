'use client';

import {
  motion,
  MotionProps,
  useReducedMotion,
  type Variants,
} from 'motion/react';

const whileHover: MotionProps['whileHover'] = {
  scale: 1.1,
  transition: { duration: 0.4 },
};

const barVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: ({
    delay,
    prefersReducedMotion,
  }: {
    delay?: number;
    prefersReducedMotion: boolean;
  }) => ({
    y: 0,
    opacity: 1,
    transition: prefersReducedMotion
      ? undefined
      : { delay: delay || 0, duration: 0.5 },
  }),
};

const lineVariants: Variants = {
  hidden: { clipPath: 'inset(0 150% 0 0)' },
  visible: (prefersReducedMotion: boolean) => ({
    clipPath: 'inset(0 0 0 0)',
    transition: prefersReducedMotion
      ? undefined
      : {
          duration: 1,
          delay: 0.5,
          ease: 'easeInOut',
        },
  }),
};

const ChartSvg = ({ isInView }: { isInView: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="horizontal-fadeout dot-grid flex w-full justify-center overflow-clip">
      <svg
        className="-mb-12"
        xmlns="http://www.w3.org/2000/svg"
        width="178"
        height="214"
        viewBox="0 0 178 214"
        fill="none"
      >
        <motion.g
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={lineVariants}
          custom={prefersReducedMotion}
        >
          <path
            fill="#9CA3AF"
            stroke="#9CA3AF"
            d="m158.906 7.717-.318-6.048a1 1 0 0 1 1.424-.957l5.412 2.546a1 1 0 0 1 .14 1.729l-5.093 3.501a1 1 0 0 1-1.565-.771Z"
          />
          <path
            stroke="#9CA3AF"
            strokeLinecap="round"
            strokeWidth="1.655"
            d="M10 89.45c9.767-2.17 29.83-9.416 68.372-45.581C131.5-5.982 164 7 165.5 4"
          />
        </motion.g>
        <motion.g
          variants={barVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={{ delay: 0, prefersReducedMotion }}
          whileHover={prefersReducedMotion ? undefined : whileHover}
        >
          <rect width="36" height="99" x="5" y="106" fill="#F9FAFB" rx="4" />
          <rect
            width="35"
            height="98"
            x="5.5"
            y="106.5"
            stroke="#E5E7EB"
            rx="3.5"
          />
        </motion.g>
        <motion.g
          variants={barVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={{ delay: 0.6, prefersReducedMotion }}
          whileHover={prefersReducedMotion ? undefined : whileHover}
        >
          <rect width="36" height="185" x="137" y="20" fill="#F9FAFB" rx="4" />
          <rect
            width="35"
            height="184"
            x="137.5"
            y="20.5"
            stroke="#E5E7EB"
            rx="3.5"
          />
        </motion.g>
        <motion.g
          variants={barVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={{ delay: 0.2, prefersReducedMotion }}
          whileHover={prefersReducedMotion ? undefined : whileHover}
        >
          <rect width="36" height="123" x="49" y="82" fill="#F9FAFB" rx="4" />
          <rect
            width="35"
            height="122"
            x="49.5"
            y="82.5"
            stroke="#E5E7EB"
            rx="3.5"
          />
        </motion.g>

        <motion.g
          variants={barVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={{ delay: 0.4, prefersReducedMotion }}
          whileHover={prefersReducedMotion ? undefined : whileHover}
        >
          <rect width="36" height="161" x="93" y="44" fill="#F9FAFB" rx="4" />
          <rect
            width="35"
            height="160"
            x="93.5"
            y="44.5"
            stroke="#E5E7EB"
            rx="3.5"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export { ChartSvg };
