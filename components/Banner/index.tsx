import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <div className={styles.conteiner}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <Image
            src="/temp/banner 1.png"
            alt=""
            width={100}
            height={100}
            layout="responsive"
            objectFit="contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/temp/banner 2.png"
            alt=""
            width={100}
            height={100}
            layout="responsive"
            objectFit="contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
