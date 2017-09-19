// @flow

import styled from "styled-components";

import overlay from "./overlay.png";
import retro from "./retro.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 812px;
  height: 375px;
  position: relative;
  padding: 0 0 0 30px;
  &::before {
    content: "";
    background: url(${overlay});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    pointer-events: none;
    z-index: 10;
  }
  &::after {
    content: "";
    background: url(${retro});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    pointer-events: none;
    z-index: -1;
  }
`;

export default {};
