"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { links } from "../../../links.config";

const useCarousel = () => {
  const [api, setApi] = useState();

  return {
    api,
    setApi,
  };
};

const projects = [
  {
    id: "catscribe",
    name: "catscribe",
    blurb: "Transcribes audio to text with timestamps in 72 different languages",
    image: "/catscribe.avif",
    link: links.projects.catscribe,
    tags: ["Audio", "React", "Open Source"],
  },
  {
    id: "specseek",
    name: "specseek",
    blurb: "Ranks items from a huge spreadsheet catalog against your exact criteria, built for teams like data centers matching thousands of parts to precise specs",
    image: "/specseek-thumb.png",
    link: links.projects.specseek,
    tags: ["Procurement", "Excel", "Ranking"],
  },
  {
    id: "catlog",
    name: "catlog",
    blurb: "Records your meeting and takes care of the summary and notes automatically",
    image: "/catlog-thumb.png",
    link: links.projects.catlog,
    tags: ["Meetings", "Notes", "SaaS"],
  },
];

export function ProjectsCarousel() {
  const carousel = useCarousel();

  return (
    <section
      id="projects-carousel"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Featured Projects
            </h2>
            <p className="md:text-md">
              Apps and tools I've built to solve real problems and make a difference.
            </p>
          </div>
        </div>

        <Carousel
          setApi={carousel.setApi}
          opts={{ loop: false }}
          className="relative w-full"
        >
          <CarouselContent className="ml-0">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="basis-full pl-0 md:basis-1/2 lg:basis-1/3"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between bg-neutral-950 p-6">
                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-white">
                        {project.name}
                      </h3>
                      <p className="mb-4 text-sm text-neutral-300">
                        {project.blurb}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-200 transition-colors duration-200 group-hover:bg-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
