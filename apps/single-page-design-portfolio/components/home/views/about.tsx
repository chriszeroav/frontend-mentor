import { FC } from 'react';
import { ButtonSecondary } from '@single-page-design-portfolio/components/ui';
import Image from 'next/image';

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <section className="p-5">
      <div className="max-w-7xl mx-auto w-full grid gap-10 sm:items-center sm:grid-cols-[1fr_auto] sm:gap-0 md:gap-10">
        <Image
          className="mx-auto sm:size-[364px] sm:min-w-[364px] sm:relative sm:-left-28 md:static md:mx-0 lg:size-[445px] lg:min-w-[445px]"
          src="/image-amy.webp"
          width={300}
          height={300}
          alt="image-amy"
        />
        <div className="flex flex-col gap-6 text-center max-w-2xl sm:text-left">
          <h2 className="text-custom-black text-2xl sm:text-3xl lg:text-5xl font-bold">
            I’m Amy, and I’d love to work on your next project
          </h2>
          <p className="text-base sm:text-lg leading-[26px] text-custom-medium-brown font-medium">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
          <ButtonSecondary className="mx-auto h-11 w-44 rounded-full sm:mx-0 sm:h-14 sm:w-56">
            Free Consultation
          </ButtonSecondary>
        </div>
      </div>
    </section>
  );
};
