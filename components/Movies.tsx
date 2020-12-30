import React, { useEffect, useRef } from "react";
import { Swiper as SlideContainer, SwiperSlide as Slide } from "swiper/react";
import Swiper, { Navigation } from "swiper";
import { useStore } from "../store";
import { Movie } from "./Movie";
import { Loader } from "./Loader";
import { useRouter } from "next/router";

Swiper.use([Navigation]);

export const Movies = () => {
  const { movieList, addNomination, movieLoading, nominationList } = useStore();
  const { query } = useRouter();
  const canNominate = (id: string): boolean => {
    if (!nominationList) return true;
    return !Boolean(
      nominationList.find((nomination) => nomination.imdbID === id)
    );
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && query.s) {
      ref.current.scrollIntoView();
    }
  }, [query, movieList, movieLoading]);

  return (
    <div ref={ref} className="p-3 p-md-5 movies">
      <Loader loading={movieLoading}>
        {!movieList && (
          <h2 className="text-center search-text d-flex flex-wrap justify-content-center">
            <i className="bi bi-search mr-sm-5"></i>
            <span>Your search will appear here.</span>
          </h2>
        )}
        <SlideContainer breakpoints={breakpoints} navigation freeMode>
          {movieList?.map((movie) => {
            return (
              <Slide key={movie.imdbID}>
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
