"use client";

import React from "react";

export function Testimonial22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What others say
          </h2>
          <p className="md:text-md">
            Collaborators and clients speak to the work
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex w-full flex-col items-start justify-between border-2 border-white/30 p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src="/digital headhunter.avif"
                  alt="Digital Headhunter logo"
                  className="max-h-12"
                />
              </div>
              <blockquote className="md:text-md">
                "Exceptional technical expertise combined with deep business understanding. A rare find in the tech talent market."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="/stock/fotis-fotopoulos-DuHKoV44prg-unsplash.avif"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Brian Rasmussen</p>
                  <p>@ Digital Headhunter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border-2 border-white/30 p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo"
                  className="max-h-12"
                />
              </div>
              <blockquote className="md:text-md">
                "Helped us implement price optimization on marked vilkår, delivering significant improvements to our pricing strategy and market positioning."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="/stock/fotis-fotopoulos-DuHKoV44prg-unsplash.avif"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Frederik Damsgaard</p>
                  <p>@ Matter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-between border-2 border-white/30 p-6 md:p-8">
            <div className="rb-5 mb-5 md:mb-6">
              <div className="mb-8 md:mb-10 lg:mb-12">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                  alt="Webflow logo"
                  className="max-h-12"
                />
              </div>
              <blockquote className="md:text-md">
                "Someone who understands both the medicine and the code. That's
                uncommon and invaluable."
              </blockquote>
              <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                <div>
                  <img
                    src="/stock/fotis-fotopoulos-DuHKoV44prg-unsplash.avif"
                    alt="Testimonial avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Elena Rodriguez</p>
                  <p>Director, Medical AI Lab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
