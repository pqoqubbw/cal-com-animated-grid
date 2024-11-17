'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BoxSvg } from './svg';
import { CharacterBackground } from './background';
import { Card } from '@/ui/card';

const DeveloperFriendly = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <Card
      title="Developer friendly"
      description="Cal.com was built by developers, for developers. Our comprehensive docs and developer resources make integration a breeze"
      isInView={isInView}
      ref={containerRef}
      containerClassName="max-lg:col-span-2 max-md:col-span-1"
    >
      <div className="horizontal-fadeout relative flex w-full justify-center overflow-clip">
        <CharacterBackground isInView={isInView} />
        <BoxSvg isInView={isInView} />
      </div>
    </Card>
  );
};

export { DeveloperFriendly };
