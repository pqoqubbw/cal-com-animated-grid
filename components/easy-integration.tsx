'use client';

import { motion, useInView, type Variants } from 'motion/react';
import { useRef } from 'react';

const circleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  animate: (i: number) => ({
    y: [0, -6.5, 0],
    transition: {
      delay: 2 + i * 0.2,
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
      times: [0, 0.5, 1],
    },
  }),
};

const CirclesSvg = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="horizontal-fadeout mb-6 w-full overflow-clip [--mask-distance:40px]">
      <div className="mb-2 flex -translate-x-6 gap-4 [&_svg]:shrink-0 pt-4">
        {[...Array(13)].map((_, i) => (
          <motion.svg
            key={i}
            custom={i}
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
            custom={i + 13}
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

const EasyIntegration = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm"
      ref={containerRef}
    >
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">Easy integration</h3>
        <p className="text-sm font-mono">
          Cal Atoms simplifies the integration process, allowing developers to
          seamlessly add powerful scheduling capabilities within hours, not
          weeks.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <CirclesSvg isInView={isInView} />
      </div>
    </div>
  );
};

export { EasyIntegration };
