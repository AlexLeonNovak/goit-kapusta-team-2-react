import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/a11y/a11y.min.css";

import styles from "./SwiperReport.module.css";

// import { Navigation, A11y, EffectCoverflow } from "swiper";
import { Navigation } from "swiper";

const SwiperReport = () => {
  return (
    <div className={styles.swiperContainer}>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1}
          navigation={true}
          // uniqueNavElements={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(slide) => console.log("slide change")}
          className={styles.swiperSlide}
        >
          <SwiperSlide>
            <div className={styles.containerTitle}>
              <span id="expences" className={styles.swiperTitle}>
                расходы
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.containerTitle}>
              <span id="income" className={styles.swiperTitle}>
                доходы
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperReport;
