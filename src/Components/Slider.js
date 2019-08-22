import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  overflow-x: auto;
  background-color: lightgray;
  flex: 1;
`;

const Project = styled.div`
  /* transform: rotate(90deg) translateY(-100px); */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  width: 300px;
  height: 390px;
  &:nth-child(even) {
    background-color: rgba(255, 0, 0, 0.3);
  }
  &:nth-child(odd) {
    background-color: rgba(0, 255, 0, 0.3);
  }
`;

export default () => {
  return (
    <Wrapper>
      <Project>1</Project>
      <Project>2</Project>
      <Project>3</Project>
      <Project>4</Project>
      <Project>5</Project>
      <Project>6</Project>
      <Project>7</Project>
      <Project>8</Project>
    </Wrapper>
  );
};
