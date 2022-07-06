import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL, API_KEY } from '../values'

function Detail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams()
  const getMovie = async () => {
    const json = await (
      await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    ).json();
    console.log(json);
    setMovie(json);
  }
  useEffect(() =>{
    getMovie();
  }, [])
  console.log(id)
  return (<div>
      <h1>{movie.title}</h1>
      <ul>
        <li>{movie.overview}</li>
        <li>{movie.vote_average} ({movie.vote_count})</li>
        <li>runtime: {movie.runtime} mins</li>
      </ul>
    </div>)
}

export default Detail;