import { useState, useEffect } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL, IMAGE_SIZE, LANGUAGE} from "../values";
import MovieSwiper from "../components/MovieSwiper";
import Header from "../components/Header";
import Movie from "../components/Movie";
import TopMovie from "../components/TopMovie";

function Home() {
  const [loadingPlayingMovies, setLoadingPlayingMovies] = useState(false);
  const [loadingTopMovies, setLoadingTopMovies] = useState(false);
  const [loadingPopularMovies, setLoadingPopularMovies] = useState(false);
  const [playingMovies, setPlayingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres();
    onFetchPlayingMovies();
    onFetchPopularMovies();
    onFetchTopMovie();
  }, []);

  const onFetchPlayingMovies = async () => {
    try {
      console.time('playingMovies');
      setLoadingPlayingMovies(true);
      const json = await (
        await fetch(
          `${API_URL}movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
        )
      ).json();
      console.log(json.results);
      setPlayingMovies(json.results);
    }
    catch(error) {
      console.log(error);
    }
    finally {
      console.timeEnd('playingMovies');
      setLoadingPlayingMovies(false);
    }
  };

  const onFetchTopMovie = async () => {
    try {
      console.time('topMovies');
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
    }
    finally {
      console.timeEnd('topMovies');
      setLoadingTopMovies(false);
    }
  }

  const onFetchPopularMovies = async () => {
    try {
      console.time('popularMovies');
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
    }
    finally {
      console.timeEnd('popularMovies');
      setLoadingPopularMovies(false);
    }
  }

  const getGenres = async () => {
    try {
      const json = await (
        await fetch(
          `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US&page=1&language=${LANGUAGE}`
        )
      ).json();
      setGenres(json.genres);
    }
    catch(error) {
      console.log(error);
    }
  };

  const getMovies = (type, items) => {
    let result = [];
    switch(type) {
      case 'playing':
        result = items.map((movie) => {
          return {
            render: (movie) => (<Movie {...movie}/>),
            id: movie.id,
            title: movie.title,
            coverImg: `${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`,
          };
        });
        break;
      case 'top':
        result = items.map((movie, index) => {
          return {
            render: (movie) => (<TopMovie {...movie}/>),
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
            render: (movie) => (<Movie {...movie}/>),
            id: movie.id,
            title: movie.title,
            coverImg: `${IMAGE_BASE_URL}${IMAGE_SIZE}${movie.poster_path}`,
          };
        });
        break;
    }

    return result;
  }

  return (
    <div>
      <Header></Header>
      <div>{loadingPlayingMovies ? <h1>Loading...</h1> : <MovieSwiper movies={getMovies("playing", playingMovies)}/>}</div>
      <div>{loadingTopMovies ? <h1>Loading...</h1> : <MovieSwiper movies={getMovies("top", topMovies)} />}</div>
      <div>{loadingPopularMovies ? <h1>Loading...</h1> : <MovieSwiper movies={getMovies("popular", popularMovies)} />}</div>
    </div>
  );
}

export default Home;
