import {useState, useEffect} from "react";

export const API_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
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
    setGenres(json.genres);
    setLoading(false);
  }
  useEffect(() =>{
    getMovies();
    getGenres();
  },[]);
  return (
    <div>
       {loading ? (
        <h1>Loading...</h1>
      ) : (
      <div>
        {movies.map((movie) => (
            <div key={movie.id}>
              <img src={IMAGE_BASE_URL+ "w200" + movie.poster_path} />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <ul>
                {movie.genre_ids.map((gId) => (
                  <li key={gId}>{genres.find(g => g.id === gId).name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
