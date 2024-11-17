'use client';

import {
  useInView,
  motion,
  type Variants,
  type Transition,
} from 'motion/react';
import { useRef } from 'react';

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.68, -0.55, 0.265, 1.95],
};

const centeredStackVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const leftStackVariants: Variants = {
  hidden: { opacity: 0, rotate: 0, x: 0, y: 100 },
  visible: {
    opacity: 1,
    rotate: '-12deg',
    x: '-3rem',
    y: '3rem',
    transition: {
      opacity: defaultTransition,
      y: defaultTransition,
      rotate: { delay: 0.4, ...defaultTransition },
      x: { delay: 0.4, ...defaultTransition },
    },
  },
};

const rightStackVariants: Variants = {
  hidden: { opacity: 0, rotate: 0, x: 0, y: 100 },
  visible: {
    opacity: 1,
    rotate: '12deg',
    x: '3rem',
    y: '3rem',
    transition: {
      opacity: defaultTransition,
      y: defaultTransition,
      rotate: { delay: 0.4, ...defaultTransition },
      x: { delay: 0.4, ...defaultTransition },
    },
  },
};

const StackSvg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="relative translate-y-8" ref={containerRef}>
      <motion.svg
        className="absolute left-0 top-0 w-[180px] translate-x-12 translate-y-12 rotate-12 scale-95 opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 221"
        fill="none"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={rightStackVariants}
        transition={defaultTransition}
        whileHover={{
          scale: 1.05,
          y: '2rem',
          transition: {
            duration: 0.3,
          },
        }}
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
        animate={isInView ? 'visible' : 'hidden'}
        transition={defaultTransition}
        whileHover={{
          scale: 1.05,
          y: '-0.5rem',
          transition: {
            duration: 0.3,
          },
        }}
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
        animate={isInView ? 'visible' : 'hidden'}
        variants={leftStackVariants}
        transition={defaultTransition}
        whileHover={{
          scale: 1.05,
          y: '2rem',
        }}
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

const MultipleComponents = () => {
  return (
    <div className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm">
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Multiple components
        </h3>
        <p className="text-sm font-mono">
          Whether you&apos;re taking guest information or payment details,
          there&apos;s an Atom for it.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <div className="flex h-full w-full justify-center overflow-clip">
          <StackSvg />
        </div>
      </div>
    </div>
  );
};

export { MultipleComponents };
