'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import { TranslationSvg } from './svg';
import { Card } from '@/ui/card';

const TranslationSupport = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <Card
      isInView={isInView}
      title="Translation support"
      description="Support multiple languages by passing a translations object to any Cal Atom"
      ref={containerRef}
    >
      <TranslationSvg isInView={isInView} />
    </Card>
  );
};

export { TranslationSupport };
