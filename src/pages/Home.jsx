import React from "react";
import { HomeHeader } from "../cmps/home/HomeHeader";
import { HomeFirstSection } from "../cmps/home/HomeFirstSection";
import { HomeSecoundSection } from "../cmps/home/HomeSecoundSection";
import { HomeThirdSection } from "../cmps/home/HomeThirdSection";
import HomeFourthSection from "../cmps/home/HomeFourthSection";

export function Home() {
  return (
    <section className="home">
      <HomeHeader />
      <HomeFirstSection />
      <HomeSecoundSection />
      <HomeThirdSection />
      <HomeFourthSection />
    </section>
  );
}
