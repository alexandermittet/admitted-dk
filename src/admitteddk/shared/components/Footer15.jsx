"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
  BiLogoGithub,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { links } from "../../../links.config";

export function Footer15() {
  return (
    <footer id="relume" className="bg-background-footer text-white px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="flex justify-center pb-10 md:pb-14 lg:pb-16">
          <div className="flex items-center gap-4 md:gap-6">
            <div>
              <img
                src="/profile-photo.avif"
                alt="Profile photo"
                className="inline-block h-80 w-auto rounded-half object-cover"
              />
            </div>
            <div>
              <div className="mb-6 md:mb-8">
                <Link to="/">
                  <img
                    src="/admitted-logo-white.avif"
                    alt="Logo image"
                    className="inline-block h-[16px] w-auto"
                    height="16"
                  />
                </Link>
              </div>
              <div className="mb-6 md:mb-8">
                <p className="mb-1 text-sm font-semibold">Address</p>
                <p className="mb-5 text-sm md:mb-6">
                  Copenhagen, Denmark
                </p>
                <p className="mb-1 text-sm font-semibold">Contact</p>
                
                <a
                  href={`mailto:${links.email}`}
                  className="block text-sm underline decoration-black underline-offset-1"
                >
                  {links.email}
                </a>
              </div>
              <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
                <a href={links.social.facebook}>
                  <BiLogoFacebookCircle className="size-6" />
                </a>
                <a href={links.social.instagram}>
                  <BiLogoInstagram className="size-6" />
                </a>
                <a href={links.social.twitter}>
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href={links.social.linkedin}>
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href={links.social.youtube}>
                  <BiLogoYoutube className="size-6" />
                </a>
                <a href={links.social.github}>
                  <BiLogoGithub className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-white" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">© {new Date().getFullYear()} admitted. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline">
              <a href="https://example.com/terms">Terms of Service</a>
            </li>
            <li className="underline">
              <a href="https://example.com/privacy">Privacy Policy</a>
            </li>
            <li className="underline">
              <a href="https://example.com/cookies">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
