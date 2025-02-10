import { FC } from 'react';
import { Starts } from '@tech-book-club-landing/components/app';

interface TestimonialsProps {}

export const Testimonials: FC<TestimonialsProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-3xl lg:max-w-[970px] mx-auto w-full flex flex-col gap-8 lg:items-center">
        <Starts number={5} startWidth={28} className="gap-1" />
        <p className="text-preset3-mobile text-balance text-custom-neutral-900 sm:text-preset3 lg:text-center">
          "This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!"
        </p>
        <p className="text-preset5 text-custom-neutral-700">
          Sarah Chen, Software Architect
        </p>
      </div>
    </section>
  );
};
