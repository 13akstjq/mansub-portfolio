import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-weight: 600;
  font-size: ${props => props.size}px;
  line-height: 1.2;
`;
export default ({ size, text }) => {
  return <Text size={size}>{text}</Text>;
};
