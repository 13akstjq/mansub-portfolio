import React from "react";
import styled from "styled-components";
import myProfile from "../../assets/image/myProfile.jpg";

const sizeCheck = size => {
  if (size === "sm") {
    return "30px";
  } else if (size === "md") {
    return "40px";
  } else if (size === "lg") {
    return "100px";
  }
};

const Avatar = styled.div`
  width: ${props => sizeCheck(props.size)};
  height: ${props => sizeCheck(props.size)};
  border-radius: 50%;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
`;

export default ({ url = myProfile, size = "sm" }) => {
  return <Avatar url={url} size={size} />;
};
