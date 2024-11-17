'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';

import { SquaredBackground } from './background';
import { WindowSvg } from './svg';

const FundamentallyConfigurable = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm"
      ref={containerRef}
    >
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Fundamentally configurable
        </h3>
        <p className="text-sm font-mono">
          Configure errors, breakpoints and loading states using a simple API.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <div className="relative flex w-full justify-center overflow-clip">
          <SquaredBackground />
          <WindowSvg isInView={isInView} />
        </div>
      </div>
    </div>
  );
};

export { FundamentallyConfigurable };
