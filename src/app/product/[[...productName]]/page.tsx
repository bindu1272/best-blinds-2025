import productsData from "../../components/productsDataNew";
import Image from "next/image";
import BookNow from "../../components/BookNowBlock";
import MarqueeScroll from "../../components/MarqueeScroll";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Produc Sydney",
  description:
    "Stylish & Durable Blinds Tailored Just for You by Blinds Warehouse Experts!",
};

function ProductDetails({
  params,
}: {
  params: { productName: string; productCategory: string };
}) {
  const productIndex = productsData.reduce((prev, current, index) => {
    if (current.name === params.productName[0]) {
      return index;
    }
    return prev;
  }, 0);
  const thisProduct: any = productsData?.[productIndex]?.media.find(
    (prod) => prod.product_name == params?.productName?.[1]
  );

  return (
    <>
      {params?.productName?.[1] ? (
        <div>
          <section className="product_details_section">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2">
                <div>
                  <h1 className="title">{thisProduct?.title}</h1>
                  {thisProduct?.description !== "Coming soon ...." ? (
                    <p className="description">{thisProduct?.description}</p>
                  ) : null}
                </div>
              </div>
              <div className="product_galary">
                <div className="grid lg:grid-cols-2 gap-4 border_radius">
                  <div>
                    <Image
                      src={thisProduct?.url1}
                      alt="Blinds Warehouse Sydney-logo"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src={thisProduct?.url2}
                        alt="Blinds Warehouse Sydney-logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <Image
                        src={thisProduct?.url3}
                        alt="Blinds Warehouse Sydney-logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <Image
                        src={thisProduct?.url4}
                        alt="Blinds Warehouse Sydney-logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                      <Image
                        src={thisProduct?.url5}
                        alt="Blinds Warehouse Sydney-logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_info">
                {thisProduct?.aboutproduct !== "Coming soon ...." ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h1>More about product</h1>
                      <p>{thisProduct?.aboutproduct}</p>
                    </div>
                    <div>
                      <h1>Other Product info</h1>
                      <div className="table_data">
                        <table>
                          <tbody>
                            <tr>
                              <td>Recommended For</td>
                              <td>{thisProduct?.recommended_for}</td>
                            </tr>
                            <tr>
                              <td>Maximum Width</td>
                              <td>{thisProduct?.maximum_width}</td>
                            </tr>
                            <tr>
                              <td>Available Systems</td>
                              <td>{thisProduct?.available_systems}</td>
                            </tr>
                            <tr>
                              <td>Controls</td>
                              <td>{thisProduct?.controls}</td>
                            </tr>
                            <tr>
                              <td>Fabric Options:</td>
                              <td>{thisProduct?.material}</td>
                            </tr>
                            <tr>
                              <td>Colours:</td>
                              <td>{thisProduct?.colours}</td>
                            </tr>
                            <tr>
                              <td>Warranty: </td>
                              <td>{thisProduct?.warranty}</td>
                            </tr>
                            <tr>
                              <td>Benefits:</td>
                              <td>{thisProduct?.benefits}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <h3 style={{ color: "#164f72", fontWeight: "500" }}>
                    Coming soon ....
                  </h3>
                )}
              </div>
            </div>
          </section>
          <section>
            <BookNow />
          </section>
          <section>
            <MarqueeScroll />
          </section>
        </div>
      ) : (
        <section className="product_details_section">
          <div className="container mx-auto">
            <div className=" lg:grid-cols-2 mb-8">
              <div>
                <h1 className="title">{productsData?.[productIndex]?.title}</h1>
                <p className="description">
                  {productsData?.[productIndex]?.description}
                </p>
              </div>
            </div>

            <div className="product-category">
              {productsData?.[productIndex]?.media?.map((item, index) => {
                return (
                  <div key={index} className="product-main">
                    <div className="image_block">
                      <div className="img_item">
                        <Image
                          src={item?.url}
                          alt={`Image ${index + 1}`}
                          width={0}
                          height={0}
                          objectFit="cover"
                          sizes="100vw"
                          style={{ width: "100%", height: "100%" }}
                        />

                        <div className="info_box">
                          <p>{item?.title}</p>
                          <Link
                            href={`/product/${productsData?.[productIndex]?.name}/${productsData?.[productIndex]?.media?.[index]?.product_name}`}
                            className="shop-now"
                          >
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetails;
