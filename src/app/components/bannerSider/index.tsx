"use client";
import Image from "next/image";
import { Slide } from "react-slideshow-image";

export default function BannerSider() {
  return (
    <div className="image_block">
      <Slide>
        <div className="img_item">
          <Image
            src="/assets/curtains.png"
            alt="Blinds Warehouse Sydney-logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
          <div className="info_box">
            <p>Grey Colour Blinds across large windows</p>
          </div>
        </div>
      </Slide>
    </div>
  );
}
