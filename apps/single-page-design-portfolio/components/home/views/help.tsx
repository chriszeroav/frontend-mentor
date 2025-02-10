import { FC } from 'react';
import { ButtonSecondary } from '@single-page-design-portfolio/components/ui';
import { cn } from 'ui-components';

interface HelpProps {}

export const Help: FC<HelpProps> = () => {
  return (
    <section className="p-5">
      <div
        className={cn(
          'max-w-7xl mx-auto w-full',
          'px-5 py-10 rounded-[10px] text-center lg:text-left',
          'bg-custom-black text-custom-light-cream'
        )}
      >
        <div className="max-w-md mx-auto flex flex-col lg:flex-row lg:max-w-6xl lg:justify-between lg:items-center gap-6">
          <div className="flex flex-col gap-6 lg:flex-1">
            <h3 className="text-2xl font-bold lg:text-4xl">
              Book a call with me
            </h3>
            <p className="text-base lg:text-lg lg:max-w-lg leading-[26px] font-medium">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </div>
          <ButtonSecondary className="mx-auto h-11 w-44 rounded-full font-bold lg:h-14 lg:w-56">
            Free Consultation
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
};
