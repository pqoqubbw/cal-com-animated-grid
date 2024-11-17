'use client';

import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BoxSvg } from './svg';
import { CharacterBackground } from './background';

const DeveloperFriendly = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.6 });

  return (
    <div
      className="border-muted group flex flex-col overflow-clip rounded-2xl border bg-white shadow-sm max-lg:col-span-2 max-md:col-span-1"
      ref={containerRef}
    >
      <div className="p-6">
        <h3 className="mb-1 text-lg font-medium font-mono">
          Developer friendly
        </h3>
        <p className="text-sm font-mono">
          Cal.com was built by developers, for developers. Our comprehensive
          docs and developer resources make integration a breeze
        </p>
      </div>
      <div className="mt-auto flex items-center justify-center rounded-md">
        <div className="horizontal-fadeout relative flex w-full justify-center overflow-clip">
          <CharacterBackground isInView={isInView} />
          <BoxSvg isInView={isInView} />
        </div>
      </div>
    </div>
  );
};

export { DeveloperFriendly };
