import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImg, title, overview, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{overview}</p>
            <ul>
                {
                    genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))
                }
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes
        .arrayOf(PropTypes.number)
        .isRequired
};

export default Movie;