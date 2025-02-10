import { FC } from 'react';
import { OptionItem } from '@tech-book-club-landing/components/app';

interface OptionsProps {}

export const Options: FC<OptionsProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-3xl lg:max-w-[970px] mx-auto w-full flex flex-col gap-6 lg:gap-16">
        <h2 className="text-preset2-mobile text-custom-neutral-900 sm:text-preset2 lg:text-center">
          Membership options
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-[286px_350px_286px] gap-6 lg:items-center">
          <OptionItem
            title="Starter"
            price={19}
            period="/month"
            advantages={['1 book/month', 'Online forums']}
          />

          <OptionItem
            title="Pro"
            price={29}
            period="/month"
            relevant={true}
            advantages={['2 books/month', 'Virtual meetups']}
            className="py-10"
          />

          <OptionItem
            title="Enterprise"
            price="Custom"
            advantages={['Team access', 'Private sessions']}
            buttonText="Talk to us"
          />
        </div>
      </div>
    </section>
  );
};
