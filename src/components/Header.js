import React from "react";
import { css } from "@emotion/react";
import styled from '@emotion/styled';


const Header = () => {
  return (
    <RootContainer>
      <h1 className="header-title"
      >
        MVING
      </h1>
      <nav>
        <ul></ul>
      </nav>
    </RootContainer>
      
  );
};
//ff133b

const RootContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .header-title {
    font-size: 56px;
    font-weight: 900;
    color: #ff133b;
    margin: 0px;
  }
`

export default Header;
