"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { links } from "../../../links.config";

export function Cta31() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Ready to build something real
          </h2>
          <p className="md:text-md">
            Recruiters and teams looking for proven expertise in medical AI
            deployment
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Button title="Portfolio" onClick={() => window.open(links.social.githubPortfolio, '_blank', 'noopener,noreferrer')} className="bg-button-primary hover:bg-button-primary-hover text-white">Portfolio</Button>
            <Button title="Contact" variant="secondary" onClick={() => window.location.href = `mailto:${links.email}`} className="bg-button-contact hover:bg-button-contact-hover text-white">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
