'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ShieldSvg } from './svg';

const FullyCompliantAndSecure = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm"
      ref={containerRef}
      suppressHydrationWarning
    >
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Fully compliant and secure
        </h3>
        <p className="text-sm font-mono">
          Cal atoms are fully compliant with standards like HIPAA, SOC2 and
          GDPR.
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <ShieldSvg isInView={isInView} />
      </div>
    </div>
  );
};

export { FullyCompliantAndSecure };
