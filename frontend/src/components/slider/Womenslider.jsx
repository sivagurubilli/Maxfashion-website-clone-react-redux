

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "swiper/css/navigation";
import "swiper/css/pagination";
 import "./slider.Module.css"

 import { Navigation, Pagination, Autoplay } from "swiper";



export const Slider = () => {
	return (
	  <Swiper
		spaceBetween={50}
		slidesPerView={1}
		onSlideChange={() => console.log('slide change')}
		onSwiper={(swiper) => console.log(swiper)}
		navigation={true} 
		pagination={true}
		autoplay={true}
		modules={[Navigation, Pagination, Autoplay]}
		className="mySwiper"
	  >
		<SwiperSlide><img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner3-desktopp-Women-24Feb2022.jpg"/></SwiperSlide>
		<SwiperSlide><img src=       "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Womenn-24Feb2022.jpg"
/></SwiperSlide>
		<SwiperSlide><img src=       "https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner6-desktop-Women-25Feb2022.jpg"
/></SwiperSlide>



	  </Swiper>
	);
};