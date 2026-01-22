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
        <div
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}
        >
          <Carousel
            setApi={useActive.setApi}
            className="relative h-full overflow-hidden"
          >
            <CarouselContent className="ml-0">
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/stock/hack-capital-uv5_bsypFUM-unsplash.avif"
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
                    Student ML Developer at SIRI, UIM
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/alex-og-marcus-podcast.avif"
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
                    <a 
                      href="https://www.linkedin.com/posts/alexandermittet_machine-learning-og-datavidenskab-activity-7051166476245823488-23ST/?originalSubdomain=dk" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Participated in UCPH Study Life podcast
                    </a>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/digitechsummit.avif"
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
                    TrafficPulse selected as showcase at Digital Tech Summit Copenhagen
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/bsc.avif"
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
                    Successfully defended BSc Thesis for Hvidovre hospital 'Foundational Model for Endoscopy' with top grade
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/erasmus.avif"
                    alt="Timeline milestone 2025"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2025</h3>
                  <p>
                    Erasmus exchange to University of Pisa
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/copenhagen-light-festival.avif"
                    alt="Timeline milestone 2025"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2025</h3>
                  <p>
                    <a 
                      href="https://copenhagenlightfestival.org/en-the-building-bubble-programme-2025/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Selected for exhibition at Copenhagen Light Festival 25
                    </a>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/catscribe.avif"
                    alt="Timeline milestone 2026"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2026</h3>
                  <p>
                    Developed 'catscribe' a purist audio-to-text transcription webapp, marketed for students.
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
      </div>
    </section>
  );
}
