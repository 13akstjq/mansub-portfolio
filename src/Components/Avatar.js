import React from "react";
import styled from "styled-components";

const sizeCheck = ({ size = "sm" }) => {
  if (size === "sm") {
    return "30px";
  } else if (size === "md") {
    return "50px";
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

export default ({
  url = "https://instagram.fkix2-2.fna.fbcdn.net/vp/ca97df8f03609785d41f2e790c5e91a4/5DF2B4F1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkix2-2.fna.fbcdn.net",
  size = "sm"
}) => {
  console.log(size);
  return <Avatar url={url} size={size} />;
};
