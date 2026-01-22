"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-white" : "bg-neutral-light"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Gallery25() {
  const carousel = useCarousel();
  return (
    <section id="relume" className="overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-0">
        <div className="flex lg:justify-self-end">
          <div className="mx-[5%] w-full max-w-md lg:mb-24 lg:ml-[5vw] lg:mr-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Live work
            </h2>
            <p className="md:text-md">
              Screenshots and interfaces from deployed applications
            </p>
          </div>
        </div>
        <Carousel
          setApi={carousel.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden px-[5%] lg:px-0"
        >
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-4/5">
              <div>
                <img
                  src="/stock/rohit-tandon-9wg5jCEPBsw-unsplash.avif"
                  alt="Portfolio work 1"
                  className="size-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-4/5">
              <div>
                <img
                  src="/stock/samuel-ferrara-1527pjeb6jg-unsplash.avif"
                  alt="Portfolio work 2"
                  className="size-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-4/5">
              <div>
                <img
                  src="/stock/accuray-5VkNa1LrS8A-unsplash.avif"
                  alt="Portfolio work 3"
                  className="size-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-4/5">
              <div>
                <img
                  src="/stock/accuray-6pQPFuD7nJY-unsplash.avif"
                  alt="Portfolio work 4"
                  className="size-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-4/5">
              <div>
                <img
                  src="/stock/accuray-MFSEP2g4YS0-unsplash.avif"
                  alt="Portfolio work 5"
                  className="size-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-4/5">
              <div>
                <img
                  src="/stock/ales-krivec-N-aTikX-b00-unsplash.avif"
                  alt="Portfolio work 6"
                  className="size-full object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-4/5">
              <div>
                <img
                  src="/stock/annie-spratt-QckxruozjRg-unsplash.avif"
                  alt="Portfolio work 7"
                  className="size-full object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-2 md:gap-4">
              <CarouselPrevious className="static left-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static left-0 top-0 size-12 -translate-y-0" />
            </div>
            <div className="absolute right-[5%] mt-5 flex items-center justify-end md:right-8 lg:right-16">
              <button
                onClick={carousel.handleDotClick(0)}
                className={carousel.dotClassName(0)}
              />
              <button
                onClick={carousel.handleDotClick(1)}
                className={carousel.dotClassName(1)}
              />
              <button
                onClick={carousel.handleDotClick(2)}
                className={carousel.dotClassName(2)}
              />
              <button
                onClick={carousel.handleDotClick(3)}
                className={carousel.dotClassName(3)}
              />
              <button
                onClick={carousel.handleDotClick(4)}
                className={carousel.dotClassName(4)}
              />
              <button
                onClick={carousel.handleDotClick(5)}
                className={carousel.dotClassName(5)}
              />
              <button
                onClick={carousel.handleDotClick(6)}
                className={carousel.dotClassName(6)}
              />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
