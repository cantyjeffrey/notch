// @flow

import styled from "styled-components";

import overlay from "./overlay.png";
import retro from "./retro.jpg";

export const Container = styled.div`
  box-shadow: .05555555555555555rem .05555555555555555rem 1.1111111111111112rem
    rgba(20, 20, 20, .27);
  width: 812px;
  height: 375px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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

export const Shelf = styled.div`
  background: #000;
  width: 240px;
  height: 210px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transform: ${props =>
    props.expanded ? "translate3d(0, 0, 0)" : "translate3d(-100%, 0, 0)"};
  transition: transform 300ms cubic-bezier(0.65, 0.05, 0.36, 1);
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background: #000;
    transform: translate3d(-100%, 0, 0);
  }
`;

export const ShelfActions = styled.div`
  transform: translate3d(100%, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShelfToggle = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  outline: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: .5rem;
`;

export const ShelfContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionSheet = styled.div`
  padding: 1rem;
  display: inline-grid;
  color: #fff;
  margin: 0;
  padding: 0;
  list-style-type: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  background-color: rgba(255, 255, 255, .12);
`;

export const Action = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  outline: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 72px;
  height: 72px;
  overflow: hidden;
  color: #fff;
  background-color: #000;
  & svg {
    fill: currentColor;
    margin: .5rem 0;
    flex: none;
  }
  & span {
    font-size: 12px;
    line-height: 1;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
    margin-bottom: .25rem;
  }
`;

export const Attribution = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: right;
  color: rgba(0, 0, 0, .87);
  -webkit-font-smoothing: antialiased;
  & p {
    margin: 0;
    font-size: 10px;
    line-height: 16px;
  }
  & a {
    text-decoration: none;
    font-weight: 600;
    color: inherit;
  }
`;

export default {};
