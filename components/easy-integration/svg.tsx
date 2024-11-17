'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

type CircleCustomType = {
  count: number;
  prefersReducedMotion: boolean;
};

const circleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: ({ count, prefersReducedMotion }: CircleCustomType) => ({
    scale: 1,
    opacity: 1,
    transition: prefersReducedMotion
      ? undefined
      : {
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: count * 0.1,
        },
  }),
  animate: ({ count, prefersReducedMotion }: CircleCustomType) => ({
    y: prefersReducedMotion ? 0 : [0, -6.5, 0],
    transition: prefersReducedMotion
      ? undefined
      : {
          delay: 2 + count * 0.2,
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          times: [0, 0.5, 1],
        },
  }),
};

const CirclesSvg = ({ isInView }: { isInView: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="horizontal-fadeout mb-6 w-full overflow-clip [--mask-distance:40px]">
      <div className="mb-2 flex -translate-x-6 gap-4 [&_svg]:shrink-0 pt-4">
        {[...Array(13)].map((_, i) => (
          <motion.svg
            key={i}
            custom={{ count: i, prefersReducedMotion }}
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? ['visible', 'animate'] : 'hidden'}
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23.5" fill="white" stroke="#E5E7EB" />
          </motion.svg>
        ))}
      </div>
      <div className="flex gap-4 [&_svg]:shrink-0">
        {[...Array(13)].map((_, i) => (
          <motion.svg
            key={i}
            custom={{ count: i + 13, prefersReducedMotion }}
            variants={circleVariants}
            initial="hidden"
            animate={isInView ? ['visible', 'animate'] : 'hidden'}
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23.5" fill="white" stroke="#E5E7EB" />
          </motion.svg>
        ))}
      </div>
    </div>
  );
};

export { CirclesSvg };
