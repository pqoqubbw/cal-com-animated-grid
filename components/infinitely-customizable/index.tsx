'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import { WindowSvg } from './svg';
import { Card } from '@/ui/card';

const InfinitelyCustomizable = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <Card
      title="Infinitely customizable"
      description="Choose the Atoms you need and match them to the look and feel of your site with CSS-level styling."
      isInView={isInView}
      ref={containerRef}
      containerClassName="row-span-2"
    >
      <WindowSvg isInView={isInView} />
    </Card>
  );
};

export { InfinitelyCustomizable };
