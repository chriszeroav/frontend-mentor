import { FC } from "react";

interface AboutProps {}

export const About: FC<AboutProps> = () => {
  return (
    <section className="px-4">
      <div className="max-w-3xl lg:max-w-[1170px] mx-auto w-full flex flex-col gap-10 lg:gap-20 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-6 lg:max-w-[530px]">
          <h2 className="text-preset2-mobile text-custom-neutral-900 sm:text-preset2">
            Not your average book{" "}
            <span className="relative">
              club
              <img
                src="/pattern-circle.png"
                className="absolute scale-[1.3] top-0.5 left-1"
                alt="pattern-circle"
              />
            </span>
          </h2>
          <p className="text-preset5 text-custom-neutral-700">
            Connect with a community that speaks your language - from{" "}
            <span className="font-semibold">Python</span> to{" "}
            <span className="font-semibold">TypeScript</span> and everything in
            between. Our discussions blend technical depth with practical
            applications.
          </p>
        </div>
        <div className=" lg:max-w-[560px] relative">
          <img
            src="/image-not-average-mobile.webp"
            alt="image-not-average-mobile"
            className="sm:hidden rounded-[12px]"
          />
          <img
            src="/image-not-average-tablet.webp"
            alt="image-not-average-tablet"
            className="hidden sm:block lg:hidden rounded-[12px]"
          />
          <img
            src="/image-not-average-desktop.webp"
            alt="image-not-average-desktop"
            className="hidden lg:block rounded-[12px]"
          />
          <img
            src="/logos-tech.svg"
            alt="logos-tech"
            className="hidden lg:block lg:absolute bottom-5 -left-20"
          />
        </div>
      </div>
    </section>
  );
};
