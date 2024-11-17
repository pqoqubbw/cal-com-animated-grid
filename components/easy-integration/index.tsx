'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';

import { CirclesSvg } from './svg';

const EasyIntegration = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

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
