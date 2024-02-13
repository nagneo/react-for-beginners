import React from "react";
import { css } from '@emotion/react';

const Header = () => {
  return (
    <div  css={css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
  `}
>
      <h1
       >
        MVING
      </h1>
      <nav>
        <ul>
        </ul>
      </nav>
    </div>
  );
};
//ff133b
export default Header;
