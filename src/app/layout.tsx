import "./scss/main.scss";
import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from 'next/script';
export const metadata: Metadata = {
  title: "Blinds Warehouse Sydney ",
  description: "Stylish & Durable Blinds Tailored Just for You by Blinds Warehouse Experts!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/daw2qxy.css" />
    </head>
      <body>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','G-V79EST30TZ');
          `,
        }}
      />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
