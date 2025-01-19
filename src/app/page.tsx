"use client"
import Image from "next/image";
import Link from "next/link";
import BookNow from "./components/BookNowBlock";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import MarqueeScroll from "./components/MarqueeScroll";
import { Tooltip } from "antd";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [data, setData]:any = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${process.env.BACKEND_URL}/names`);
      const result = await res.json();
      setData(result);
    }

    fetchData();
  }, []);
  const reasonablePrice = "we believe that quality shouldn't come at an unreasonable cost. Our blinds are crafted with precision and care, offering you exceptional value for money. We work directly with trusted manufacturers to cut out the middleman, ensuring you get the best possible price without compromising on quality. Whether you're looking for a simple design or something more luxurious, we have options to suit every budget";
  const bestDecorator = "Transform your home with our wide range of blinds, designed to enhance the aesthetics of any room. Our team of expert decorators will guide you in selecting the perfect blinds to complement your interior décor. With a keen eye for design and a passion for perfection, we ensure that each installation not only meets but exceeds your expectations. From modern minimalism to classic elegance, our decorators are here to bring your vision to life."
  const honestAdvice = "Choosing the right blinds for your home can be overwhelming, but it doesn't have to be. At Blinds Warehouse Sydney, we pride ourselves on providing honest, straightforward advice. Our knowledgeable team will help you navigate the different options, considering factors such as light control, privacy, and style. We prioritize your needs and preferences, ensuring that you make a well-informed decision that you'll be happy with for years to come."
  return (
    <>
      <Banner />
      <section>
        <div className="design_categories_section">
          <div className="container mx-auto">
            <h1 className="title">
              Design is the way how you express your feelings Hello world blinds warehouse  {data?.map((item:any) => item).join(",")}
            </h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
              <Link href="/product/Blinds" className="categorie_img">
                <Image
                  src="/assets/blinds-1.png"
                  alt="Blinds Warehouse Sydney"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="info_block">
                  <h1>Blinds</h1>
                  <p className="image_content">
    Wide range of blinds to decorate your home,office, shop, and other residential and commercial premises
     regardless of where you are located. We are committed to provide you with best quality products and service 
     and the 100% customer satisfaction

                    {/* Wide range of outdoor designs to decorate your home. office
                    or apartment. */}
                  </p>
                </div>
              </Link>
              <Link href="/product/Shutters" className="categorie_img">
                <Image
                  src="/assets/shutters-1.png"
                  alt="Blinds Warehouse Sydney"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="info_block">
                  <h1>Shutters</h1>
                  <p className="image_content">
                  Wide range of shutters to decorate your home. office or apartment.
                    {/* Wide range of outdoor designs to decorate your home. office
                    or apartment. */}
                  </p>
                </div>
              </Link>
              <Link href="/product/Outdoors" className="categorie_img">
                <Image
                  src="/assets/outdoor-1.png"
                  alt="Blinds Warehouse Sydney"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="info_block">
                  <h1>Outdoor</h1>
                  <p className="image_content">
                    Wide range of outdoor designs to decorate your home. office
                    or apartment.
                  </p>
                </div>
              </Link>
              <Link href="/product/Curtains" className="categorie_img">
                <Image
                  src="/assets/fly-screen.png"
                  alt="Blinds Warehouse Sydney"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="info_block">
                  <h1>Curtains</h1>
                  <p className="image_content">
    Add the perfect finishing touch to any room with our made to measure curtain service.
     Curtains are a stunning and stylish way to complete an overall look of a room. With a tailored 
     design to your personal style, window shape and size. Our made-to-measure curtains will not disappoint.
      Whether your a homeowner or living in an apartment, we can help no matter the size of the window. 
      We provide a wide range of curtain types, including Wave Curtains,Child Safe Curtains,Curtains on Lath & Fascias,
      Curtains on Poles, and many more.

                    {/* Wide range of outdoor designs to decorate your home. office
                    or apartment. */}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="aboutus_section">
          <div className="right_img">
            <Image
              src="/assets/curtains-8.png"
              alt="Blinds Warehouse Sydney"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="container mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="about_info">
                <h1>
                  Quality Blinds And Shutters for your Home, Office or
                  Apartments...
                </h1>
                <p>
                  We offer blind and shutter services for your home, office,
                  shop, and other residential and commercial premises regardless
                  of where you are located.We are committed to providing you
                  with the best quality products and service and 100% customer
                  satisfaction..
                </p>
                <Link href="/about-us" className="btn_default">
                  About us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
              <div className="images_block">
                <div className="top_img">
                  <Image
                    src="/assets/curtains-7.png"
                    alt="Blinds Warehouse Sydney"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="bottom_img">
                  <Image
                    src="/assets/venetian.png"
                    alt="Blinds Warehouse Sydney"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="image_grid_section">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid_items">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/assets/curtains-9.png"
                    alt="Blinds Warehouse Sydney"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Image
                    src="/assets/curtains-10.png"
                    alt="Blinds Warehouse Sydney"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Image
                    src="/assets/curtains-11.png"
                    alt="Blinds Warehouse Sydney"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Image
                    src="/assets/curtains-12.png"
                    alt="Blinds Warehouse Sydney"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="image_grid_info">
                <h1>
                  Bring luxury <br /> comfort to your home
                </h1>
                <p>ANTI-MOLDING, ZERO VOC, ODOURLESS AND EASY TO CLEAN</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="makes_us_special_section">
          <div className="container mx-auto">
            <h1>what makes us special ?</h1>
            <div className="special_cat_items">
              <div className="grid md:grid-cols-3 gap-4 ">
                <div>
                  <Image
                    src="/assets/Icon-1.svg"
                    alt="Blinds Warehouse Sydney"
                    width={48}
                    height={48}
                  />
                  <label>Reasonable price</label>
                  <Tooltip title={honestAdvice}><p className="rating-description">{reasonablePrice}</p></Tooltip>
                </div>
                <div>
                  <Image
                    src="/assets/Icon-2.svg"
                    alt="Blinds Warehouse Sydney"
                    width={48}
                    height={48}
                  />
                  <label>Best Decorator</label>
                  <Tooltip title={honestAdvice}><p className="rating-description">{bestDecorator}</p></Tooltip>
                </div>
                <div>
                  <Image
                    src="/assets/Icon-3.svg"
                    alt="Blinds Warehouse Sydney"
                    width={48}
                    height={48}
                  />
                  <label>Honest Advice</label>
                  <Tooltip title={honestAdvice}><p className="rating-description"> {honestAdvice}</p></Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="testimonials_section">
          <div className="container mx-auto">
            <p className="title">Testimonials</p>
            <h1 className="sub_title">what our client say...</h1>
            <Testimonials />
          </div>
        </div>
      </section>
      <section>
        <BookNow />
      </section>
      <section>
        <MarqueeScroll />
      </section>
    </>
  );
}
