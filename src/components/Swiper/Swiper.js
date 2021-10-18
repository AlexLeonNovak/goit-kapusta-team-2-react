import {Swiper as CommonSwiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectCoverflow, Pagination, Navigation} from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import styles from './Swiper.module.scss';
import './SwiperCustomize.scss'
import PropTypes from 'prop-types';
import {useState} from 'react';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export const Swiper = ({items, onSlideChange, activeIndex = 0}) => {

	const [swiper, setSwiper] = useState(null);

	return (
		<div className={styles.swiperContainer}>
			<div className={styles.swiperWrapper}>
				<CommonSwiper
					onImagesReady={() => swiper.slideTo(activeIndex)}
					modules={[EffectCoverflow, Pagination, Navigation]}
					spaceBetween={0}
					centeredSlides={true}
					slidesPerView="auto"
					navigation={true}
					onSwiper={setSwiper}
					onSlideChange={(slide) => onSlideChange(items[slide.activeIndex])}

					className={styles.swiperSlide}
				>
					{items && items.map((item) => (
						<SwiperSlide key={item.value}>
							<div className={styles.containerTitle}>
	              <span className={styles.swiperTitle}>
	                {item.label}
	              </span>
							</div>
						</SwiperSlide>
					))}
				</CommonSwiper>
			</div>
		</div>
	);
};

Swiper.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string
	})),
	onSlideChange: PropTypes.func,
	activeIndex: PropTypes.number
}
