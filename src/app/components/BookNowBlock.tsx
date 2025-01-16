import Link from "next/link";

export default function BookNow() {
  return (
    <>
      <div className="book_now_section">
        <div className="container mx-auto">
          <div className="book_now_block">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <h1>
                  <span>Book a free </span>
                  <br /> consultation with us !
                </h1>
                <p>
                  call us today at
                  <Link
                    href="callto:+61 408 727 291"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    +61 408 727 291
                  </Link>
                </p>
              </div>
              <div className="flex items-center	justify-end	">
                <Link href="/contact-us" className="bn_btn">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
