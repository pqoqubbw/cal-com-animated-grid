'use client';

import { motion, MotionProps, useInView, type Variants } from 'motion/react';
import { useRef } from 'react';

const whileHover: MotionProps['whileHover'] = {
  scale: 1.1,
  transition: { duration: 0.4 },
};

const barVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: (delay: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.5 },
  }),
};

const lineVariants: Variants = {
  hidden: { clipPath: 'inset(0 150% 0 0)' },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: 1,
      delay: 0.5,
      ease: 'easeInOut',
    },
  },
};

const ChartSvg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      className="horizontal-fadeout dot-grid flex w-full justify-center overflow-clip"
      ref={containerRef}
    >
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
          whileHover={whileHover}
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
          custom={0.6}
          whileHover={whileHover}
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
          custom={0.2}
          whileHover={whileHover}
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
          custom={0.4}
          whileHover={whileHover}
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

const ReliableAndScalable = () => {
  return (
    <div className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm">
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Reliable and scalable
        </h3>
        <p className="text-sm font-mono">
          Cal Atoms are built on the rock-solid scheduling foundation of
          Cal.com. We&apos;ve scheduled millions of bookings to date.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <ChartSvg />
      </div>
    </div>
  );
};

export { ReliableAndScalable };
