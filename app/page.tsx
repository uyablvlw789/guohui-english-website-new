import ImageCarousel from "@/components/landing-page/ImageCarousel";
import NewsArticleCarousel from "@/components/landing-page/NewsArticleCarousel";
import ProductsSection from "@/components/landing-page/products/ProductsSection";
import { db } from "@/db";

export default async function Home() {
  // @ts-ignore
  const newsArticles = (await db.news.findMany())
    .sort((a, b) => {
      // @ts-ignore
      return b.updatedAt - a.updatedAt;
    })
    .slice(0, 6);

  return (
    <main className="mb-20 dark:bg-zinc-900 dark:text-zinc-200">
      {/* hero section */}
      <div className="mb-20 h-[80vh]">
        <ImageCarousel />
      </div>
      {/* News Article Carousel */}
      <NewsArticleCarousel newsArticles={newsArticles} />

      {/* Products  Section */}
      <ProductsSection />
    </main>
  );
}
