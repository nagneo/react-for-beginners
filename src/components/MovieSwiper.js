import React, { useEffect, useState } from "react";
import { IMAGE_BASE_URL } from "../values";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styled from "@emotion/styled";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const MovieSwiper = ({
  title,
  movies,
  slidesPerView,
  breakPoints,
  modules,
  autoplay = null,
  loop = false,
  freeMode = false,
  speed = null,
}) => {
  return (
    <ContentContainer>
      {title && <StyledTitle>{title}</StyledTitle>}
      <div className="swiper-container">
        <Swiper
          modules={modules}
          slidesPerView={slidesPerView}
          breakpoints={breakPoints}
          spaceBetween={12}
          scrollbar={{ draggable: true }}
          loop={loop}
          autoplay={autoplay}
          freeMode={freeMode}
          speed={speed}
        >
          {movies?.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                {movie.render({ ...movie })}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </ContentContainer>
  );
};

export default MovieSwiper;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .swiper > .swiper-wrapper {
    transition-timing-function: linear;
  }
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;
