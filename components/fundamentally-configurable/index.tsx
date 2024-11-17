'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';

import { SquaredBackground } from './background';
import { WindowSvg } from './svg';
import { Card } from '@/ui/card';

const FundamentallyConfigurable = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <Card
      isInView={isInView}
      ref={containerRef}
      title="Fundamentally configurable"
      description="Configure errors, breakpoints and loading states using a simple API."
    >
      <div className="relative flex w-full justify-center overflow-clip">
        <SquaredBackground />
        <WindowSvg isInView={isInView} />
      </div>
    </Card>
  );
};

export { FundamentallyConfigurable };
