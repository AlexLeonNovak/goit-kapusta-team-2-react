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

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export const Swiper = ({items, onSlideChange}) => {
	return (
		<div className={styles.swiperContainer}>
			<div className={styles.swiperWrapper}>
				<CommonSwiper
					modules={[EffectCoverflow, Pagination, Navigation]}
					spaceBetween={0}
					centeredSlides={true}
					slidesPerView={1}
					navigation={true}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={(slide) => onSlideChange(items[slide.activeIndex])}
					className={styles.swiperSlide}
				>
					{items.map((item) => (
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
	onSlideChange: PropTypes.func
}
