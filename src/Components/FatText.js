import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-weight: 600;
  font-size: ${props => props.size}px;
`;
export default ({ size, text }) => {
  console.log(size);
  return <Text size={size}>{text}</Text>;
};
