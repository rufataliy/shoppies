import React from "react";
import { Swiper as SlideContainer, SwiperSlide as Slide } from "swiper/react";
import Swiper, { Navigation } from "swiper";
import { useStore } from "../store";
import { Movie } from "./Movie";
import { Loader } from "./Loader";

Swiper.use([Navigation]);

export const Movies = () => {
  const { movieList, addNomination, movieLoading, nominationList } = useStore();

  const canNominate = (id: string): boolean => {
    if (!nominationList) return true;
    return !Boolean(
      nominationList.find((nomination) => nomination.imdbID === id)
    );
  };

  return (
    <div className="p-5 movies">
      <Loader loading={movieLoading}>
        {!movieList && (
          <h2 className="text-center search-text">
            <i className="bi bi-search mr-5"></i>
            <span>Your search will appear here.</span>
          </h2>
        )}
        <SlideContainer breakpoints={breakpoints} navigation freeMode>
          {movieList?.map((movie) => {
            return (
              <Slide>
                <Movie
                  canNominate={canNominate(movie.imdbID)}
                  nominate={() => addNomination(movie.imdbID)}
                  movie={movie}
                />
              </Slide>
            );
          })}
        </SlideContainer>
      </Loader>
    </div>
  );
};

var breakpoints = {
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
};
