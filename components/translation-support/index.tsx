'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import { TranslationSvg } from './svg';

const TranslationSupport = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm"
      ref={containerRef}
    >
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Translation support
        </h3>
        <p className="text-sm font-mono">
          Support multiple languages by passing a translations object to any Cal
          Atom
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <TranslationSvg isInView={isInView} />
      </div>
    </div>
  );
};

export { TranslationSupport };
