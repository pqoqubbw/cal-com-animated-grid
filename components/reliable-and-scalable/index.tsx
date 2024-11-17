'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';

import { ChartSvg } from './svg';
import { Card } from '@/ui/card';

const ReliableAndScalable = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <Card
      title="Reliable and scalable"
      description="Cal Atoms are built on the rock-solid scheduling foundation of Cal.com. We've scheduled millions of bookings to date."
      isInView={isInView}
      ref={containerRef}
    >
      <ChartSvg isInView={isInView} />
    </Card>
  );
};

export { ReliableAndScalable };
