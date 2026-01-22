import React from "react";
import { Navbar7 } from "../shared/components/Navbar7";
import { Header62 } from "./components/Header62";
import { Contact15 } from "./components/Contact15";
import { Contact6 } from "./components/Contact6";
import { Faq4 } from "./components/Faq4";
import { Footer15 } from "../shared/components/Footer15";

export default function Page() {
  return (
    <div>
      <Navbar7 />
      <Header62 />
      <Contact15 />
      {/* <Contact6 />
      <Faq4 /> */}
      <Footer15 />
    </div>
  );
}
