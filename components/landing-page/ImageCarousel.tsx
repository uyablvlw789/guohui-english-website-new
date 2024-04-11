"use client";
// ts-ignore
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Component({
  imageList = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"],
}) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-full"
    >
      {imageList.map((imgUrl) => (
        <SwiperSlide key={imgUrl}>
          <Image src={imgUrl} alt={imgUrl} fill objectFit="cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
