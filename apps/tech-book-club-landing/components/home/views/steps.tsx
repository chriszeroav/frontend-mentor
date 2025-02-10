import { cn } from 'ui-components';
import { FC } from 'react';

interface StepsProps {}

export const Steps: FC<StepsProps> = () => {
  const steps = [
    'Choose your membership tier',
    'Get your monthly book selection',
    'Join our discussion forums',
    'Attend exclusive meetups',
  ];
  return (
    <section className="px-4">
      <div
        className={cn(
          'relative overflow-hidden',
          'max-w-3xl lg:max-w-[1170px] mx-auto w-full',
          'py-14 lg:py-20 px-4 rounded-[12px]',
          "bg-[url('/pattern-light-bg.svg')] bg-custom-neutral-100"
        )}
      >
        <div className="flex flex-col gap-8 lg:gap-16 relative z-10">
          <h2 className="text-preset2-mobile self-center text-custom-neutral-900 sm:text-preset2 max-w-[512px] text-center">
            Your tech reading journey
          </h2>
          <ul className="grid lg:grid-cols-4 gap-8 lg:gap-12 lg:max-w-[1050px] lg:mx-auto">
            {steps.map((item, index) => (
              <li key={index} className="flex flex-col gap-5 lg:relative group">
                <p
                  className={cn(
                    'flex items-center justify-center',
                    'size-8 border-2 rounded-[4px] sm:size-10',
                    'text-preset6-mobile border-custom-neutral-900'
                  )}
                >
                  <span className="relative top-0.5">{index + 1}</span>
                </p>
                <p className="text-preset6-mobile text-custom-neutral-900 sm:text-preset6">
                  {item}
                </p>

                <img
                  src="/pattern-arrow.svg"
                  alt="pattern-arrow"
                  className="absolute top-0 right-0 group-last:hidden"
                />
              </li>
            ))}
          </ul>
        </div>
        <img
          src="/pattern-glow.svg"
          className="absolute -bottom-16 -right-32 scale-150 sm:-bottom-40 sm:-right-60"
          alt="pattern-glow"
        />
      </div>
    </section>
  );
};
