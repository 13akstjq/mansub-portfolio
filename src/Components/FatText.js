import React from "react";
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
  font-size: ${props => props.size};
`;
export default ({ size, text }) => <Text size={size}>{text}</Text>;
