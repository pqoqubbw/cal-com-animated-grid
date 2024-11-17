import { DeveloperFriendly } from '@/components/developer-friendly';
import { EasyIntegration } from '@/components/easy-integration';
import { FullyCompliantAndSecure } from '@/components/fully-compliant-and-secure';
import { FundamentallyConfigurable } from '@/components/fundamentally-configurable';
import { InfinitelyCustomizable } from '@/components/infinitely-customizable';
import { MultipleComponents } from '@/components/multiple-components';
import { ReliableAndScalable } from '@/components/reliable-and-scalable';
import { TranslationSupport } from '@/components/translation-support';

export default function Home() {
  return (
    <div className="p-10 grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <FullyCompliantAndSecure />
      <InfinitelyCustomizable />
      <EasyIntegration />
      <MultipleComponents />
      <ReliableAndScalable />
      <TranslationSupport />
      <FundamentallyConfigurable />
      <DeveloperFriendly />
    </div>
  );
}
