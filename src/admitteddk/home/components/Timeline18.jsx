"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState, useRef } from "react";
import { links } from "../../../links.config";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselPreviousClass = (index) => {
    // Hide previous button when at the first real slide (index 2, since snap index 1 + 1)
    // or at the clone at beginning (index 1, since snap index 0 + 1)
    return `z-30 size-12 ${index === 1 || index === 2 ? "hidden" : ""}`;
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
  const carouselContainerRef = useRef(null);
  const autoScrollPausedRef = useRef(false);
  const autoScrollIntervalRef = useRef(null);
  const userInteractionTimeoutRef = useRef(null);
  const isAutoScrollingRef = useRef(false);

  useEffect(() => {
    if (!useActive.api || !carouselContainerRef.current) {
      return;
    }

    const REAL_SLIDE_COUNT = 11; // Number of actual slides (not including clones)
    const CLONE_START_INDEX = 0; // Clone of last slide at beginning
    const CLONE_END_INDEX = REAL_SLIDE_COUNT + 1; // Clone of first slide at end
    const FIRST_REAL_INDEX = 1; // First real slide
    const LAST_REAL_INDEX = REAL_SLIDE_COUNT; // Last real slide

    const pauseAutoScroll = () => {
      autoScrollPausedRef.current = true;
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      
      // Clear existing timeout
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
      
      // Resume auto-scroll after 3 seconds of inactivity
      userInteractionTimeoutRef.current = setTimeout(() => {
        autoScrollPausedRef.current = false;
        startAutoScroll();
      }, 3000);
    };

    const handleSeamlessLoop = () => {
      if (!useActive.api || isAutoScrollingRef.current) return;
      
      const currentIndex = useActive.api.selectedScrollSnap();
      
      // If at the clone of the last slide (beginning), jump to real last slide
      if (currentIndex === CLONE_START_INDEX) {
        // Use setTimeout to avoid interfering with ongoing scroll animations
        setTimeout(() => {
          if (useActive.api && !isAutoScrollingRef.current) {
            useActive.api.scrollTo(LAST_REAL_INDEX, true); // true = no animation
          }
        }, 50);
      }
      // If at the clone of the first slide (end), jump to real first slide
      // (This is handled in auto-scroll, but keep for manual scrolling)
      else if (currentIndex === CLONE_END_INDEX && !isAutoScrollingRef.current) {
        // Use setTimeout to avoid interfering with ongoing scroll animations
        setTimeout(() => {
          if (useActive.api) {
            useActive.api.scrollTo(FIRST_REAL_INDEX, true); // true = no animation
          }
        }, 50);
      }
    };

    const startAutoScroll = () => {
      if (autoScrollIntervalRef.current) {
        return; // Already running
      }

      autoScrollIntervalRef.current = setInterval(() => {
        if (!autoScrollPausedRef.current && useActive.api) {
          const currentIndex = useActive.api.selectedScrollSnap();
          
          // If we're at the last real slide, scroll to the clone, then jump to first
          if (currentIndex === LAST_REAL_INDEX) {
            isAutoScrollingRef.current = true;
            // Scroll to the clone at the end (with animation)
            useActive.api.scrollTo(CLONE_END_INDEX, false);
            // After animation completes, jump to first real slide (seamless)
            setTimeout(() => {
              if (useActive.api && !autoScrollPausedRef.current) {
                useActive.api.scrollTo(FIRST_REAL_INDEX, true); // true = no animation
                isAutoScrollingRef.current = false;
              }
            }, 500); // Wait for scroll animation to complete
          }
          // If we somehow end up at the clone at the end, jump to first real slide
          else if (currentIndex === CLONE_END_INDEX) {
            isAutoScrollingRef.current = true;
            useActive.api.scrollTo(FIRST_REAL_INDEX, true); // true = no animation
            setTimeout(() => {
              isAutoScrollingRef.current = false;
            }, 50);
          }
          // Otherwise, just scroll to next
          else {
            useActive.api.scrollNext();
          }
        }
      }, 3000); // Scroll every 3 seconds (adjust for speed)
    };

    // Listen for slide changes to handle seamless looping
    useActive.api.on("select", handleSeamlessLoop);

    // Start at the first real slide (not the clone)
    useActive.api.scrollTo(FIRST_REAL_INDEX, false);

    // Start auto-scroll initially
    startAutoScroll();

    // Pause on user interactions
    const carouselElement = carouselContainerRef.current;
    const handleInteraction = () => pauseAutoScroll();
    
    carouselElement.addEventListener('wheel', handleInteraction, { passive: true });
    carouselElement.addEventListener('touchstart', handleInteraction, { passive: true });
    carouselElement.addEventListener('mousedown', handleInteraction);
    carouselElement.addEventListener('pointerdown', handleInteraction);
    
    // Also pause when navigation buttons are clicked
    const prevButton = carouselElement.querySelector('[data-carousel-previous]');
    const nextButton = carouselElement.querySelector('[data-carousel-next]');
    if (prevButton) prevButton.addEventListener('click', handleInteraction);
    if (nextButton) nextButton.addEventListener('click', handleInteraction);

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
      if (useActive.api && useActive.api.off) {
        useActive.api.off("select", handleSeamlessLoop);
      }
      carouselElement.removeEventListener('wheel', handleInteraction);
      carouselElement.removeEventListener('touchstart', handleInteraction);
      carouselElement.removeEventListener('mousedown', handleInteraction);
      carouselElement.removeEventListener('pointerdown', handleInteraction);
      if (prevButton) prevButton.removeEventListener('click', handleInteraction);
      if (nextButton) nextButton.removeEventListener('click', handleInteraction);
    };
  }, [useActive.api]);

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              My journey
            </h2>
            <p className="md:text-md">
              Every experience shaped who I am today. Each challenge taught me
              resilience. Each opportunity revealed new possibilities.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <p className="text-xs italic text-text-muted">
                click and drag to scroll the timeline
              </p>
            </div>
          </div>
        </div>
        <div
          ref={carouselContainerRef}
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}
        >
          <Carousel
            setApi={useActive.setApi}
            opts={{ loop: true }}
            className="relative h-full overflow-hidden"
          >
            <CarouselContent className="ml-0">
            {/* Clone of last slide at beginning for seamless loop */}
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <a 
                  href={links.projects.catscribe} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-3/5 overflow-hidden aspect-[2/3] cursor-pointer"
                >
                  <img
                    src="/catscribe.avif"
                    alt="Timeline milestone 2026"
                    className="h-full w-full object-cover"
                  />
                </a>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2026</h3>
                  <p>
                    <a 
                      href={links.projects.catscribe} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Developed 'catscribe' a purist audio-to-text transcription webapp, marketed for students.
                    </a>
                  </p>
                </div>
              </div>
            </CarouselItem>
            {/* First real slide */}
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/DI.avif"
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
                    Student Assistant @ DI
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/uim siri.avif"
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
                    Student Assistant @ UIM SIRI
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/alex KU UCPH.avif"
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
                    Started as Teaching Assistant @ UCPH
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <a 
                  href={links.external.linkedinPostPodcast} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-3/5 overflow-hidden aspect-[2/3] cursor-pointer"
                >
                  <img
                    src="/alex-og-marcus-podcast.avif"
                    alt="Timeline milestone 2023"
                    className="h-full w-full object-cover"
                  />
                </a>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2023</h3>
                  <p>
                    <a 
                      href={links.external.linkedinPostPodcast} 
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
                    src="/ITU.avif"
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
                    Teaching Assistant @ ITU
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
                <a 
                  href={links.external.linkedinPostBsc} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-3/5 overflow-hidden aspect-[2/3] cursor-pointer"
                >
                  <img
                    src="/bsc.avif"
                    alt="Timeline milestone 2024"
                    className="h-full w-full object-cover"
                  />
                </a>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2024</h3>
                  <p>
                    <a 
                      href={links.external.linkedinPostBsc} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Successfully defended BSc Thesis for Hvidovre hospital 'Foundational Model for Endoscopy' with top grade
                    </a>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <a 
                  href={links.external.linkedinPostInstagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-3/5 overflow-hidden aspect-[2/3] cursor-pointer"
                >
                  <video
                    src="/instagram-takeover.mp4"
                    alt="Timeline milestone 2024"
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </a>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2024</h3>
                  <p>
                    <a 
                      href={links.external.linkedinPostInstagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Takeover on UCPH study life instagram
                    </a>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <a 
                  href={links.external.copenhagenLightFestival} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-3/5 overflow-hidden aspect-[2/3] cursor-pointer"
                >
                  <img
                    src="/copenhagen-light-festival.avif"
                    alt="Timeline milestone 2025"
                    className="h-full w-full object-cover"
                  />
                </a>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2025</h3>
                  <p>
                    <a 
                      href={links.external.copenhagenLightFestival} 
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
                <a 
                  href={links.external.uniavisenArticle} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-3/5 overflow-hidden aspect-[2/3] cursor-pointer"
                >
                  <img
                    src="/erasmus.avif"
                    alt="Timeline milestone 2025"
                    className="h-full w-full object-cover"
                  />
                </a>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2025</h3>
                  <p>
                    <a 
                      href={links.external.uniavisenArticle} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Erasmus exchange to University of Pisa
                    </a>
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <a 
                  href={links.projects.catscribe} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-3/5 overflow-hidden aspect-[2/3] cursor-pointer"
                >
                  <img
                    src="/catscribe.avif"
                    alt="Timeline milestone 2026"
                    className="h-full w-full object-cover"
                  />
                </a>
                <div className="mb-4 mt-8 flex w-full items-center">
                  <div className="h-[3px] w-full bg-white" />
                  <div className="z-20 size-[0.9375rem] flex-none rounded-full bg-white shadow-[0_0_0_8px_white]" />
                  <div className="h-[3px] w-full bg-white" />
                </div>
                <div className="px-6 text-center">
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">2026</h3>
                  <p>
                    <a 
                      href={links.projects.catscribe} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Developed 'catscribe' a purist audio-to-text transcription webapp, marketed for students.
                    </a>
                  </p>
                </div>
              </div>
            </CarouselItem>
            {/* Clone of first slide at end for seamless loop */}
            <CarouselItem className="basis-full pl-0 sm:basis-1/2 md:basis-1/3">
              <div className="mb-4 flex w-full flex-col items-center md:mb-0 md:w-auto">
                <div className="w-3/5 overflow-hidden aspect-[2/3]">
                  <img
                    src="/DI.avif"
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
                    Student Assistant @ DI
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
