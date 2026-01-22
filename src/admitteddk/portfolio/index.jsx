import React from "react";
import { Navbar7 } from "../shared/components/Navbar7";
import { Portfolio13 } from "./components/Portfolio13";
import { Gallery25 } from "./components/Gallery25";
import { Testimonial22 } from "./components/Testimonial22";
import { Cta31 } from "./components/Cta31";
import { Footer15 } from "../shared/components/Footer15";

export default function Page() {
  return (
    <div>
      <Navbar7 />
      <Portfolio13 />
      <Gallery25 />
      <Testimonial22 />
      <Cta31 />
      <Footer15 />
    </div>
  );
}
