import Image from "next/image";
import Link from "next/link";
import MarqueeScroll from "../components/MarqueeScroll";
import type { Metadata } from "next";
import ContactUsForm from "../components/contactUsForm";
export const metadata: Metadata = {
  title: "Contact Us : Blinds Warehouse Sydney",
  description:
    "Stylish & Durable Blinds Tailored Just for You by Blinds Warehouse Experts!",
};
export default function ContactUs() {
  return (
    <>
      <section className="contact_section">
        <div className="container mx-auto">
          <div className="contact_banner">
            <Image
              src="/assets/contact-banner.png"
              alt="Blinds Warehouse Sydney-logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
            <ContactUsForm />
          </div>
        </div>
      </section>
      <section className="map_block">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-2">
            <div className="address_info">
              <h1>
                Find us
                {/* in store ... */}
              </h1>
              <p>
                Share your idea or the requirement with us. We will guarantee
                that we will contact you within 24 hours.
              </p>
              <div className="list">
                <label>E-mail</label>
                <Link href="mailto:blindswarehousesydney@gmail.com">
                blindswarehousesydney@gmail.com
                </Link>
              </div>
              <div className="list">
                <label>Phone</label>
                <Link href="callto:+61 408 727 291" className="call">
                  +61 408 727 291
                </Link>
              </div>
              {/* <div className="list">
                <label>Address</label>
                <p className="address">
                  11-23, The Boulevard, Strathfield Plaza, Strathfield, NSW 2135
                </p>
              </div> */}
            </div>
            <div>
              <div className="image_block">
                <div className="img_item">
                  <Image
                    src="/assets/curtains.png"
                    alt="Blinds Warehouse Sydney-logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                  />
                  {/* <div className="info_box">
            <p>Grey Colour Blinds across large windows</p>
          </div> */}
                </div>
              </div>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6552308501346!2d151.09337309999998!3d-33.872775100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb277eac6b7d%3A0x690e86546f06b42a!2s11%2F23%20The%20Boulevarde%2C%20Strathfield%20NSW%202135%2C%20Australia!5e0!3m2!1sen!2sin!4v1696488043729!5m2!1sen!2sin"
                width="100%"
                height="800"
                loading="lazy"
              ></iframe> */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <MarqueeScroll />
      </section>
    </>
  );
}
