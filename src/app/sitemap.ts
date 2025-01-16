import { MetadataRoute } from 'next'
import productsData from './components/productsData';
 
export default function sitemap(): MetadataRoute.Sitemap {
  // const BASE_URL = "https://bestandlessblinds.vercel.app/";
  const BASE_URL = `${process.env.BASE_URL}`;
  const productUrls = productsData.flatMap((category) =>
    category.media.map((item) => ({
      url: `${BASE_URL}/product/${category?.name}/${item.product_name}`,
      lastModified: new Date(),
      priority: 0.5,
    }))
  );
  const urls =  [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
  const allurls = [...urls,...productUrls];
  return allurls;
}