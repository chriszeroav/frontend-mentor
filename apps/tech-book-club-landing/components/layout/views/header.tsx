import { FC } from 'react';
import { Starts } from '@tech-book-club-landing/components/app';
import { ButtonPrimary } from '@tech-book-club-landing/components/ui';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className="bg-[url('/pattern-light-bg.svg')] bg-custom-neutral-100 pt-6 pb-20 px-4">
      <div className="max-w-3xl lg:max-w-[1170px] mx-auto w-full flex flex-col gap-12">
        <img
          src="/logo.svg"
          className="w-[192.86px] h-[36px] object-contain"
          alt="Tech book club"
        />
        <section className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-8 lg:max-w-[570px]">
            <div className="flex flex-col gap-6">
              <h1 className="text-preset1-mobile bg-text-gradient bg-clip-text text-transparent sm:text-preset1">
                Join the ultimate tech book club
              </h1>
              <p className="text-preset5 text-custom-neutral-700">
                Turn your reading time into learning time with fellow tech
                enthusiasts. Get curated recommendations, join vibrant
                discussions, and level up your skills one chapter at a time.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <ButtonPrimary className="h-16 max-w-[380px]">
                <span className="text-preset6-mobile relative text-custom-neutral-900 top-0.5 sm:text-preset6">
                  REVIEW MEMBERSHIP OPTIONS
                </span>
                <img
                  src="/icon-arrow-down.svg"
                  alt="icon-arrow-down"
                  className="w-6 h-6"
                />
              </ButtonPrimary>
              <div className="flex gap-3 items-center">
                <img
                  src="/image-avatars.webp"
                  alt="image-avatars"
                  className="w-[110px] h-[40px] object-contain"
                />
                <div className="flex flex-col gap-1">
                  <Starts number={5} />
                  <p className="text-preset7 text-custom-neutral-700">
                    200+ developers joined already
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[5px] overflow-hidden lg:max-w-[540px]">
            <img
              src="/image-hero-mobile.webp"
              className="sm:hidden"
              alt="image-hero-mobile"
            />
            <img
              src="/image-hero-tablet.webp"
              alt="image-hero-tablet"
              className="hidden sm:block lg:hidden"
            />
            <img
              src="/image-hero-desktop.webp"
              alt="image-hero-desktop"
              className="hidden lg:block"
            />
          </div>
        </section>
      </div>
    </header>
  );
};
