"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Header84() {
  const navigate = useNavigate();
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Medical imaging meets machine learning
            </h1>
            <p className="md:text-md">
              I build intelligent systems that read what others miss. Deploying
              machine learning into production means understanding both the
              science and the code.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Portfolio" variant="primary" onClick={() => navigate("/portfolio")} className="bg-accent-primary hover:bg-accent-primary-hover text-white">
                Portfolio
              </Button>
              <Button title="Contact" variant="secondary" onClick={() => navigate("/contact")}>
                Contact
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/stock/accuray-5VkNa1LrS8A-unsplash.avif"
              className="h-full w-full object-cover"
              alt="Medical imaging and machine learning"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
