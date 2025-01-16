import React from "react";
import Image from "next/image";
import Link from "next/link";
import productsData from "../components/productsDataNew";

export default function Footer() {
  return (
    <footer className="footer_section px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
          <div className="flex brand_info">
            <Link href="/" className="brand">
              <Image
                src="../.././assets/blinds-warehouse-sydney-logo.svg"
                alt="blinds-warehouse-sydney-logo"
                width={100}
                height={30}
                className="logo_dressed"
              />
            </Link>
          </div>

          <div className="footer_links">
            <ul>
              <li>
                <Link href="/about-us">About us</Link>
              </li>

              {productsData?.map((item, index) => {
                return (
                    <li key ={index}>
                      <Link href={`/product/${item?.title}`}>
                        {item?.title}
                      </Link>
                    </li>
                );
              })}
              
            </ul>
          </div>
        </div>
        <hr />
        <div className="grid md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="copyright_text">
              © 2023 Blinds Warehouse Sydney. All rights reserved | Developed by{" "}
              <Link
                href={`${process.env.NEXT_PUBLIC_COMPANY_URL}`}
                target="_blank"
              >
                UnderlineIt.in
              </Link>
            </p>
          </div>
          <div className="social_media_block">
            <Link href={`${process.env.NEXT_PUBLIC_INSTAGRAM}`}>
              <Image
                src="../.././assets/Instagram.svg"
                alt="twitter"
                width={18}
                height={18}
                className="logo_dressed"
              />
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_FACEBOOK}`}>
              <Image
                src="../.././assets/Facebook.svg"
                alt="Facebook"
                width={17}
                height={18}
                className="logo_dressed"
              />
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_GOOGLE}`}>
              <Image
                src="../.././assets/google-plus.svg"
                alt="google-plus"
                width={25}
                height={18}
                className="logo_dressed"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
