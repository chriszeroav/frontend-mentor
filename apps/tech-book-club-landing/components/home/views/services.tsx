import { FC } from "react";

interface ServicesProps {}

export const Services: FC<ServicesProps> = () => {
  const services = [
    "Monthly curated tech reads selected by industry experts",
    "Virtual and in-person meetups for deep-dive discussions",
    "Early access to new tech book releases",
    "Author Q&A sessions with tech thought leaders",
  ];

  return (
    <section className="px-4">
      <div className="max-w-3xl lg:max-w-[1170px] mx-auto w-full flex flex-col gap-10 lg:gap-20 lg:flex-row-reverse lg:items-center">
        <div className="flex flex-col gap-6 lg:gap-9">
          <h2 className="text-preset2-mobile text-balance text-custom-neutral-900 sm:text-preset2">
            Read together, grow together
          </h2>
          <ul className="flex flex-col gap-4 lg:gap-6 lg:max-w-md">
            {services.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <img
                  className="size-7"
                  src="/icon-check.svg"
                  alt="icon-check"
                />
                <span className="text-preset5 text-custom-neutral-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[12px] overflow-hidden lg:max-w-[560px]">
          <img
            src="/image-read-together-mobile.webp"
            alt="image-read-together-mobile"
            className="sm:hidden"
          />
          <img
            src="/image-read-together-tablet.webp"
            alt="image-read-together-tablet"
            className="hidden sm:block lg:hidden"
          />
          <img
            src="/image-read-together-desktop.webp"
            alt="image-read-together-desktop"
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};
