import { useState, useEffect } from "react";
import {
  API_KEY,
  API_URL,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
  LANGUAGE,
} from "../values";
import MovieSwiper from "../components/MovieSwiper";
import Header from "../components/Header";
import Movie from "../components/Movie";
import TopMovie from "../components/TopMovie";
import styled from "@emotion/styled";
import { Pagination, Autoplay } from 'swiper/modules';

function Home() {
  const [loadingPlayingMovies, setLoadingPlayingMovies] = useState(false);
  const [loadingTopMovies, setLoadingTopMovies] = useState(false);
  const [loadingPopularMovies, setLoadingPopularMovies] = useState(false);
  const [playingMovies, setPlayingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const breakPoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 8,
      spaceBetween: 60,
    }
  };

  const breakPointsForLank = {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 60,
    }
  }

  useEffect(() => {
    getGenres();
    onFetchPlayingMovies();
    onFetchPopularMovies();
    onFetchTopMovie();
  }, []);

  const onFetchPlayingMovies = async () => {
    try {
      console.time("playingMovies");
      setLoadingPlayingMovies(true);
      const json = await (
        await fetch(
          `${API_URL}movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
        )
      ).json();
      console.log(json.results);
      setPlayingMovies(json.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.timeEnd("playingMovies");
      setLoadingPlayingMovies(false);
    }
  };

  const onFetchTopMovie = async () => {
    try {
      console.time("topMovies");
      setLoadingTopMovies(true);
      const json = await (
        await fetch(
          `${API_URL}movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
        )
      ).json();
      console.log(json.results);
      setTopMovies(json.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.timeEnd("topMovies");
      setLoadingTopMovies(false);
    }
  };

  const onFetchPopularMovies = async () => {
    try {
      console.time("popularMovies");
      setLoadingPopularMovies(true);
      const json = await (
        await fetch(
          `${API_URL}movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
        )
      ).json();
      console.log(json.results);
      setPopularMovies(json.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.timeEnd("popularMovies");
      setLoadingPopularMovies(false);
    }
  };

  const getGenres = async () => {
    try {
      const json = await (
        await fetch(
          `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US&page=1&language=${LANGUAGE}`
        )
      ).json();
      setGenres(json.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovies = (type, items) => {
    let result = [];
    switch (type) {
      case "playing":
        result = items.map((movie) => {
          return {
            render: (movie) => <Movie {...movie} />,
            id: movie.id,
            title: movie.title,
            coverImg: `${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`,
          };
        });
        break;
      case "top":
        result = items.map((movie, index) => {
          return {
            render: (movie) => <TopMovie {...movie} />,
            rank: index + 1,
            id: movie.id,
            title: movie.title,
            coverImg: `${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`,
          };
        });
        break;
      default:
        result = items.map((movie) => {
          return {
            render: (movie) => <Movie {...movie} />,
            id: movie.id,
            title: movie.title,
            coverImg: `${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`,
          };
        });
        break;
    }

    return result;
  };

  return (
    <RootContainer>
      <Header></Header>
      <div>
        {loadingPlayingMovies ? (
          <h1>Loading...</h1>
        ) : (
          <MovieSwiper
            title={"지금 상영중인 영화"}
            movies={getMovies("playing", playingMovies)}
            slidesPerView={2}
            breakPoints={breakPoints}
            modules={[Pagination]}
          />
        )}
      </div>
      <div>
        {loadingTopMovies ? (
          <h1>Loading...</h1>
        ) : (
          <MovieSwiper
            title={"최고의 엠빙 TOP 20"}
            movies={getMovies("top", topMovies)}
            slidesPerView={2}
            breakPoints={breakPointsForLank}
            modules={[Pagination]}
          />
        )}
      </div>
      <div>
        {loadingPopularMovies ? (
          <h1>Loading...</h1>
        ) : (
          <MovieSwiper
            title={"오늘의 인기 영화"}
            movies={getMovies("popular", popularMovies)}
            slidesPerView={2}
            breakPoints={breakPoints}
            autoplay={{
              delay: 1,
              disableOnInteraction: true
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            freeMode={true}
            speed={5000}
          />
        )}
      </div>
    </RootContainer>
  );
}

export default Home;

const RootContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  gap: 24px;
  @media (max-width: 640px){
    padding: 12px 16px;
  }
`;

