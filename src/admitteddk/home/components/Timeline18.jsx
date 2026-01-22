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
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselPreviousClass = (index) => {
    return `z-30 size-12 ${index === 1 ? "hidden" : ""}`;
  };

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrentIndex(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return {
    api,
    setApi,
    carouselPreviousClass,
    currentIndex,
  };
};

export function Timeline18() {
  const useActive = useCarousel();
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Journey</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Milestones that shaped the work
            </h2>
            <p className="md:text-md">
              Each project taught something essential. Each role built on the
              last. The path was deliberate.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <p className="text-xs italic text-gray-400">
                click and drag to scroll the timeline
              </p>
            </div>
          </div>
        </div>
        <Carousel
          setApi={useActive.setApi}
          className="relative h-full overflow-hidden"
        >
          <div className="absolute left-0 z-20 h-full w-8 bg-gradient-to-r from-black to-transparent lg:w-16" />
          <div className="absolute right-0 z-20 h-full w-8 bg-gradient-to-l from-black to-transparent lg:w-16" />
          <CarouselContent className="ml-0">
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/stock/hack-capital-uv5_bsypFUM-unsplash.avif"
                    alt="Timeline milestone 2018"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2018</h3>
                  <p>
                    Started working with medical imaging datasets and early
                    machine learning frameworks
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/stock/ivana-cajina-HDd-NQ_AMNQ-unsplash.avif"
                    alt="Timeline milestone 2019"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2019</h3>
                  <p>
                    First production deployment of imaging analysis system for
                    diagnostic clinic
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/stock/kaidi-guo-jGlqOzrhn9k-unsplash.avif"
                    alt="Timeline milestone 2020"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2020</h3>
                  <p>
                    Expanded into full stack development, building web
                    interfaces for AI systems
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/stock/kerensa-pickett-GjpUV4k76F8-unsplash.avif"
                    alt="Timeline milestone 2022"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2022</h3>
                  <p>
                    Led cross-functional team deploying machine learning models
                    at scale
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/stock/nathan-dumlao-q3YZ4g7j9yc-unsplash.avif"
                    alt="Timeline milestone 2023"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2023</h3>
                  <p>
                    Founded MedImage AI Recruitments to bridge medical imaging
                    and engineering
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/stock/national-cancer-institute-NFvdKIhxYlU-unsplash.avif"
                    alt="Timeline milestone 2024"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2024</h3>
                  <p>
                    Consulting on production ML systems and recruiting
                    specialized talent
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            className={useActive.carouselPreviousClass(useActive.currentIndex)}
          />
          <CarouselNext className="z-30 size-12" />
        </Carousel>
      </div>
    </section>
  );
}
