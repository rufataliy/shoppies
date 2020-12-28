import React from "react";
import { Swiper as SlideContainer, SwiperSlide as Slide } from "swiper/react";
import Swiper, { Navigation } from "swiper";
import { useStore } from "../store";
import { Movie } from "./Movie";

Swiper.use([Navigation]);

export const Movies = () => {
  const { movieList, addNomination } = useStore();

  return (
    <div className="p-5 movies">
      <SlideContainer
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        navigation
        freeMode
      >
        {movieList?.map((movie) => {
          return (
            <Slide>
              <Movie
                nominate={() => addNomination(movie.imdbID)}
                movie={movie}
              />
            </Slide>
          );
        })}
      </SlideContainer>
    </div>
  );
};