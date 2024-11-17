'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ShieldSvg } from './svg';
import { Card } from '@/ui/card';

const FullyCompliantAndSecure = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <Card
      isInView={isInView}
      ref={containerRef}
      title="Fully compliant and secure"
      description="Cal atoms are fully compliant with standards like HIPAA, SOC2 and GDPR."
    >
      <ShieldSvg isInView={isInView} />
    </Card>
  );
};

export { FullyCompliantAndSecure };
