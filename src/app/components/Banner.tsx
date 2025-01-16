import Link from "next/link";
import BannerSider from "./bannerSider";

export default function Banner() {
  return (
    <>
      <div className="container mx-auto banner_section">
        <div className="grid md:grid-cols-2 gap-4 ">
          <div className="info_block">
            <h1>High Quality Bespoke Curt...</h1>
            <p>
              Stylish & Durable Blinds Tailored Just for You by Blinds Warehouse
              Experts!
            </p>
            <Link href="/product/Blinds" className="btn_default">
              Shop Now
            </Link>
          </div>
          <BannerSider/>
        </div>
      </div>
    </>
  );
}
