'use client';

import { useRef } from 'react';
import { StackSvg } from './svg';
import { useInView } from 'motion/react';

const MultipleComponents = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm"
      ref={containerRef}
    >
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
          <StackSvg isInView={isInView} />
        </div>
      </div>
    </div>
  );
};

export { MultipleComponents };
