'use client';

import { useRef } from 'react';
import { CirclesSvg } from './svg';
import { Card } from '@/ui/card';
import { useInView } from 'motion/react';

const EasyIntegration = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <Card
      title="Easy integration"
      description="Cal Atoms simplifies the integration process, allowing developers to seamlessly add powerful scheduling capabilities within hours, not weeks."
      isInView={isInView}
      ref={containerRef}
    >
      <CirclesSvg isInView={isInView} />
    </Card>
  );
};

export { EasyIntegration };
