'use client';

import { cn } from '@/lib/utils';
import { type Variants, motion, useReducedMotion } from 'motion/react';
import { ReactNode, RefObject } from 'react';

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? undefined
      : {
          duration: 0.5,
          delay: 0.2,
          ease: 'easeOut',
        },
  }),
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? undefined
      : {
          duration: 0.5,
          delay: 0.4,
          ease: 'easeOut',
        },
  }),
};

type Props = {
  title: string;
  description: string;
  isInView: boolean;
  children: ReactNode;
  ref: RefObject<HTMLDivElement>;
  containerClassName?: string;
};

const Card = ({
  title,
  description,
  isInView,
  children,
  ref,
  containerClassName,
}: Props) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn(
        'border-muted flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm',
        containerClassName
      )}
    >
      <div className="p-6">
        <motion.h3
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
          custom={prefersReducedMotion}
          className="mb-1 text-lg font-medium font-mono"
        >
          {title}
        </motion.h3>
        <motion.p
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={descriptionVariants}
          custom={prefersReducedMotion}
          className="text-sm font-mono"
        >
          {description}
        </motion.p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        {children}
      </div>
    </div>
  );
};

export { Card };
