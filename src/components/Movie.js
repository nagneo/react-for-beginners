import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

function Movie({ id, coverImg, title }) {
  return (
    <Link to={`/movie/${id}`}>
      <img src={coverImg} alt={title} />
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Movie;
