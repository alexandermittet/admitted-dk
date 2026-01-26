"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Work</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Projects that matter
          </h2>
          <p className="md:text-md">
            Built and deployed in production environments
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <article className="border border-border-primary">
            <div>
              <a href="#">
                <img
                  src="/stock/cagatay-orhan-PYh4QCX_fmE-unsplash.avif"
                  className="w-full aspect-[4/3] object-fill"
                  alt="Lung segmentation pipeline project"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Lung segmentation pipeline</a>
              </h3>
              <p>
                Automated detection system for radiological imaging analysis
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    Machine learning
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    Medical imaging
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    Web deployment
                  </a>
                </li>
              </ul>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </article>
          <article className="border border-border-primary">
            <div>
              <a href="#">
                <img
                  src="/stock/fotis-fotopoulos-DuHKoV44prg-unsplash.avif"
                  className="w-full aspect-[4/3] object-fill"
                  alt="Pathology classifier project"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Pathology classifier</a>
              </h3>
              <p>Deep learning model trained on histopathology samples</p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    Deep learning
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    Classification
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    API integration
                  </a>
                </li>
              </ul>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </article>
          <article className="border border-border-primary">
            <div>
              <a href="#">
                <img
                  src="/stock/hack-capital-uv5_bsypFUM-unsplash.avif"
                  className="w-full aspect-[4/3] object-fill"
                  alt="Diagnostic dashboard project"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Diagnostic dashboard</a>
              </h3>
              <p>
                Full stack application connecting models to clinical workflows
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    Full stack
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    React frontend
                  </a>
                </li>
                <li className="flex">
                  <a
                    href="#"
                    className="bg-tag-gray px-2 py-1 text-sm font-semibold text-text-black"
                  >
                    Python backend
                  </a>
                </li>
              </ul>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </article>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
