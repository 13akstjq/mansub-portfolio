import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const Room = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-gap: 5px;
  padding: 10px;
`;

export default () => {
  return <Room>room</Room>;
};
