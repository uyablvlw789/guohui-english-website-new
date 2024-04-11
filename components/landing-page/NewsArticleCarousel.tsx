"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import NewsArticleCard from "./NewsArticleCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function NewsArticleCarousel({ newsArticles }: any) {
  const newsArticleSlides = newsArticles.map((newsArticle: any) => {
    return (
      <SwiperSlide key={newsArticle.id}>
        <Link href={`/news/${newsArticle.id}`}>
          <NewsArticleCard
            coverImage={newsArticle.coverImage}
            title={newsArticle.title}
            description='Guohui Company CEO Dr. Leng Guanghui won the title of "Excellent Enterprise" at the 2023 12th China Innovation and Entrepreneurship Competition in the field of new energy, new energy vehicles, and energy conservation and environmental protection.'
            date={newsArticle.updatedAt}
          />
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <div className="container mx-auto mb-24">
      <h2 className="mb-12 text-3xl font-bold">Latest News</h2>
      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {newsArticleSlides}
      </Swiper>
    </div>
  );
}
