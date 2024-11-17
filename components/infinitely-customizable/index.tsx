'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import { WindowSvg } from './svg';

const InfinitelyCustomizable = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm row-span-2"
      ref={containerRef}
    >
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Infinitely customizable
        </h3>
        <p className="text-sm font-mono">
          Choose the Atoms you need and match them to the look and feel of your
          site with CSS-level styling.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <WindowSvg isInView={isInView} />
      </div>
    </div>
  );
};

export { InfinitelyCustomizable };
