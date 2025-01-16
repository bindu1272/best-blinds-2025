import React, { useState, Fragment } from "react";
import Image from "next/image";
import BookNow from "../components/BookNowBlock";
import MarqueeScroll from "../components/MarqueeScroll";
import PrivacyPolicyAccordianItem from "./PrivacyPolicyAccordianItem";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy : Blinds Warehouse Sydney",
  description:
    "Stylish & Durable Blinds Tailored Just for You by Blinds Warehouse Experts!",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="container mx-auto about_section">
        <div className="grid">
          <div className="pp_banner">
            <Image
              src="/assets/contact-banner.png"
              alt="Blinds Warehouse Sydney-logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="pp_accordian_block">
            <PrivacyPolicyAccordianItem />
          </div>
        </div>
      </div>
      <section>
        <BookNow />
      </section>
      <section>
        <MarqueeScroll />
      </section>
    </>
  );
}
