"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Cta31() {
  const navigate = useNavigate();
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
            <Button title="Portfolio" onClick={() => navigate("/portfolio")} className="bg-accent-primary hover:bg-accent-primary-hover text-white">Portfolio</Button>
            <Button title="Contact" variant="secondary" onClick={() => navigate("/contact")}>
              Contact
            </Button>
          </div>
        </div>
        <img
          src="/stock/accuray-MFSEP2g4YS0-unsplash.avif"
          className="size-full object-cover"
          alt="Medical AI deployment"
        />
      </div>
    </section>
  );
}
