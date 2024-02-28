import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function TopMovie({ rank, id, coverImg, title }) {
  return (
    <TopContainer>
      <div className="top-rank">{rank}</div>
      <MovieImage src={coverImg} alt={title} />
    </TopContainer>
  );
}

TopMovie.propTypes = {
  rank: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
  .top-rank {
    color: var(--global-theme-white-font);
    font-size: 96px;
    font-weight: 700;
    font-style: italic;
    text-decoration-color: var(--global-theme-white-font);
    line-height: 0.6;
  }
  margin: 10px 0px;
  transform: translateY(0);
  transition: transform 0.5s ease;
  :hover {
    transform: translateY(-10px);
  }
`;

const MovieImage = styled.img`
  width: 200px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 4px;
`;

export default TopMovie;
