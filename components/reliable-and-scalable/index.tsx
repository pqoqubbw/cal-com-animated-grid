'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';

import { ChartSvg } from './svg';

const ReliableAndScalable = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm"
      ref={containerRef}
    >
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
        <ChartSvg isInView={isInView} />
      </div>
    </div>
  );
};

export { ReliableAndScalable };
