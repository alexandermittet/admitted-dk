"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { links } from "../../../links.config";

export function Header84() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Machine Learning expertise:
              <br />
              <span className="font-normal">From medical imaging, to everyday tools on the web</span>
            </h1>
            <p className="md:text-md">
              I build intelligent systems that read what others miss. Deploying
              machine learning needs a deep understanding of both the
              science, the code, and the people who will use it.
              After all, what is technology worth if it's not user-friendly.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Portfolio" variant="primary" asChild className="bg-accent-primary hover:bg-accent-primary-hover text-white">
                <a href={links.social.githubPortfolio} target="_blank" rel="noopener noreferrer" className="border-0 rounded-lg">Portfolio</a>
              </Button>
              <Button title="Contact" variant="secondary" asChild>
                <a href={`mailto:${links.email}`} className="border-0 rounded-lg">Contact</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/alex frb.avif"
              className="aspect-[3/4] w-auto max-w-md object-cover scale-[0.8]"
              alt="Medical imaging and machine learning"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
