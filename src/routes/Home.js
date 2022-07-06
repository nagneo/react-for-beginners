import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../values'


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch (
        `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  const getGenres = async () => {
    const json = await (
      await fetch (
        `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US&page=1&language=en-US`
      )
    ).json();
    setGenres(json.genres);
  }
  useEffect(() =>{
    getGenres();
    getMovies();
  }, []);
  return (
    <div>
       {loading ? (
        <h1>Loading...</h1>
      ) : (
      <div>
        {movies.map((movie) => 
            <Movie id={movie.id} 
                  coverImg={IMAGE_BASE_URL + "w200" + movie.poster_path}
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
