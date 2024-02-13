import { IMAGE_BASE_URL } from "../values";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const MovieSwiper = ({ movies }) => {
  return (
    <Swiper 
      slidesPerView={6}
      spaceBetween={12}
      scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          // width: 576,
          slidesPerView: 2,
        },
        768: {
          // width: 768,
          slidesPerView: 1,
        },
      }}
      >
      {movies?.map((movie) => {
        return(
        <SwiperSlide key={movie.id}>
          {movie.render({ ...movie })}  
        </SwiperSlide>
      )})}
    </Swiper>
  );
};

export default MovieSwiper;
