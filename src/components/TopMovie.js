import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import styled from '@emotion/styled';

function TopMovie({ rank, id, coverImg, title }) {
  return (
    <Link to={`/movie/${id}`}>
      <TopContainer>
        <div className="top-rank">{rank}</div>
        <img src={coverImg} alt={title} />
      </TopContainer>
    </Link>
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
  .top-rank {
    font-size: 108px;
    font-weight: 700;
    font-style: italic;
  }
`;

export default TopMovie;
