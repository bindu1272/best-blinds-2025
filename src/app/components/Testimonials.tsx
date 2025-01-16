"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-slideshow-image";
import testimonialsData from "./testimonialsData";
import { Tooltip }from "antd";

const Testimonials = () => {
  const properties = {
    prevArrow: (
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
      </button>
    ),
  };

  const responsiveSettings = [
    {
      breakpoint: 1200,
      slidesToShow: 3,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];
  const data = testimonialsData;
  return (
    <div>
      <div className="testimonials_items">
        <Slide
          arrows={true}
          {...properties}
          responsive={responsiveSettings}
          indicators={false}
        >
          {data.map((ts, index) => (
            <div key={index}>
              <div className="testi_info_block">
                <div className="bg_img">
                  <Image
                    src={ts.url}
                    alt="Blinds Warehouse Sydney-logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="testi_details">
                  <div className="author_img">
                    <Image
                      alt="author"
                      src={ts.userpic}
                      width={50}
                      height={50}
                    />
                  </div>

                  <h1>{ts.title}</h1>
                  <h2>{ts.subtitle}</h2>
                  <Tooltip title={ts.description1}> <p className="author-description" >{ts.description1}</p></Tooltip>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Testimonials;
