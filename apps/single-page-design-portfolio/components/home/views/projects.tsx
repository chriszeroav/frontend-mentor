'use client';

import { FC, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'ui-components';
import Autoplay from 'embla-carousel-autoplay';

interface ProjectsProps {}

export const Projects: FC<ProjectsProps> = () => {
  const plugin = useRef(Autoplay({ delay: 1500 }));

  const data = [
    {
      image: '/image-slide-1.jpg',
    },
    {
      image: '/image-slide-2.jpg',
    },
    {
      image: '/image-slide-3.jpg',
    },
    {
      image: '/image-slide-4.jpg',
    },
    {
      image: '/image-slide-5.jpg',
    },
  ];

  return (
    <section className="">
      <h2 className="text-custom-black text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
        My Work
      </h2>
      <Carousel
        opts={{
          loop: true,
          align: 'center',
        }}
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem className="basis-[70%] lg:basis-[40%]" key={index}>
              <img
                src={item.image}
                className="min-h-[180px] max-h-[360px] w-full object-cover object-center rounded-[10px]"
                alt={`Project ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-4 justify-center mt-8">
          <CarouselPrevious
            variant="default"
            className="static translate-y-0 size-16 hover:bg-custom-galactic-blue"
          />
          <CarouselNext
            variant="default"
            className="static translate-y-0 size-16 hover:bg-custom-galactic-blue"
          />
        </div>
      </Carousel>
    </section>
  );
};
