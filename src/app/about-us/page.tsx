import BookNow from "../components/BookNowBlock";
import MarqueeScroll from "../components/MarqueeScroll";
import type { Metadata } from "next";
import AboutUsScroll from "../components/aboutUsScroll";
export const metadata: Metadata = {
  title: "About Us : Blinds Warehouse Sydney",
  description:
    "Stylish & Durable Blinds Tailored Just for You by Blinds Warehouse Experts!",
};

export default function About() {
  return (
    <>
      <div className="container mx-auto about_section">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="info_block">
            <h1>Welcome to</h1>
            <h2>Blinds Warehouse</h2>
            <p>
              Blinds Warehouse Sydney specializes in all types of custom-made,
              affordable quality blinds, plantation shutters and curtains for
              commercial and domestic use. With many combined years of
              experience in the industry we have a wealth of knowledge to offer
              and would enjoy working with you to offer quality shade solutions
              to improve your business or home.
            </p>
            <p>
              A stylish and warm look are a big part of what makes your house a
              home. Our interior designers give you the best possible
              suggestions and recommendations keeping in mind the products
              versatility, ease of use, longevity and of course…that WOW look.
              We achieve that through honest advice which is at the heart of our
              core business values. We work within your budget and suggest you
              the best possible product mix that will not only fulfil your
              purpose but also make your home look elegant.
            </p>
            <p>
              At Blinds Warehouse Sydney we are experts in combining real
              craftsmanship with the precision of modern technology, to create
              the solutions you would like for living, working, or exterior
              spaces. We rely on our Australian local manufacturing and add our
              quality, service, and professionalism to ensure a high level of
              customer satisfaction.
            </p>
          </div>
          <div className="image_block">
            <AboutUsScroll/>
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
