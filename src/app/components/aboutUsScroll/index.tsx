"use client";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us : Blinds Warehouse Sydney",
  description:
    "Stylish & Durable Blinds Tailored Just for You by Blinds Warehouse Experts!",
};

export default function AboutUsScroll() {
  return (
    <>
        <div className="img_item">
          <Image
            src="/assets/blinds.jpg"
            alt="Blinds Warehouse Sydney-logo"
            width={0}
            height={0}
            fill
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="info_box">
            <p>Blinds</p>
            <Link href="/product/Blinds">Shop Now</Link>
          </div>
        </div>
        <div className="img_item">
          <Image
            src="/assets/curtains.jpg"
            alt="Blinds Warehouse Sydney-logo"
            width={0}
            fill
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="info_box">
            <p>Curtains</p>
            <Link href="/product/Curtains">Shop Now</Link>
          </div>
        </div>
        <div className="img_item">
          <Image
            src="/assets/shutter.jpg"
            alt="Blinds Warehouse Sydney-logo"
            width={0}
            fill
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="info_box">
            <p>Shutters</p>
            <Link href="/product/Shutters">Shop Now</Link>
          </div>
        </div>
    </>
  );
}
