import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({coverImg, title, overview, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to="/movie">{title}</Link>
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
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes
        .arrayOf(PropTypes.number)
        .isRequired
};

export default Movie;