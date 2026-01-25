"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Background</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Technical expertise meets social engagement
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              I combine rigorous academic training with hands-on experience building real-world applications that make a difference.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Education
                </h6>
                <p>
                  BSc Machine Learning & Data Science and MSc Computer Science from Copenhagen University
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Community engagement
                </h6>
                <p>
                  Volunteering at ITU Analog Coffee Bar, Save the Children Youth, Radikal Ungdom, and European Youth
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Portfolio" variant="secondary" className="bg-accent-primary hover:bg-accent-primary-hover text-white">
                Portfolio
              </Button>
              <Button
                title="Contact"
                variant="primary"
                className="bg-black text-white"
              >
                Contact
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/uniavisen red jacket.avif"
              className="h-full w-full object-cover"
              alt="Medical imaging technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
