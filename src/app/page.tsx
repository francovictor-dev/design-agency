"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import HomeLandingPage from "@/sections/Home";
import MessagesLandingPage from "@/sections/Messages/";
import OurPortfolioLandingPage from "@/sections/OurPortfolio";
import WhatWeDoLandingPage from "@/sections/WhatWeDo";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("");
  return (
    <main>
      <NavBar onTab={(set) => set(tab)} />
      <HomeLandingPage />
      <WhatWeDoLandingPage />
      <OurPortfolioLandingPage />
      <MessagesLandingPage />
      <Footer onTab={(e) => setTab(e)} />
      {/* <div className="flex-1 h-screen pt-[100px] bg-green-600">asdasd</div> */}
      {/* <button className="btn-outlined">Registro</button>
      <button className="btn-contained">Registro</button>
      <IconChip svg={<HearthIcon />} />
      <Card
        title="Grow Your Business"
        description="We help identify the best ways to improve your business"
        icon={<HearthIcon />}
        onClick={() => console.log("asd")}
      /> */}
    </main>
  );
}
