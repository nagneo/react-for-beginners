import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import styled from '@emotion/styled';

function Movie({ id, coverImg, title }) {
  return (
    <MovieImage src={coverImg} alt={title} />
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Movie;

const MovieImage = styled.img`
  width: 200px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.5s ease;
  border-radius: 4px;
  :hover {
    transform: scale(1.05);
  }
`;
