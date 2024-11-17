'use client';

import { useRef } from 'react';
import { StackSvg } from './svg';
import { useInView } from 'motion/react';
import { Card } from '@/ui/card';

const MultipleComponents = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <Card
      title="Multiple components"
      description="Whether you're taking guest information or payment details, there's an Atom for it."
      isInView={isInView}
      ref={containerRef}
    >
      <div className="flex h-full w-full justify-center overflow-clip">
        <StackSvg isInView={isInView} />
      </div>
    </Card>
  );
};

export { MultipleComponents };
