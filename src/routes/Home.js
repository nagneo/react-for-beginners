import {useState, useEffect} from "react";
import Movie from "../components/Movie";

export const API_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState(null);
  const getMovies = async () => {
    const json = await (
      await fetch (
        API_URL + "movie/now_playing?api_key=c405dd59d0f6c3a33613ea5f3006fb27&language=en-US&page=1"
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  const getGenres = async () => {
    const json = await (
      await fetch (
        API_URL + "genre/movie/list?api_key=c405dd59d0f6c3a33613ea5f3006fb27&language=en-US&page=1&language=en-US"
      )
    ).json();
    const genreMap = new Map(
      json.genres.map((obj) => {
        return [obj.id, obj.name];
      }), 
    );
    setGenres(genreMap);
  }
  useEffect(() =>{
    getMovies();
  }, []);
  return (
    <div>
       {loading ? (
        <h1>Loading...</h1>
      ) : (
      <div>
        {movies.map((movie) => 
            <Movie coverImg={IMAGE_BASE_URL + "w200" + movie.poster_path}
                  title={movie.title}
                  overview={movie.overview}
                  genres={movie.genre_ids}/>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
