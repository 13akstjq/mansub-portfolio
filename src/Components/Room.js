import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const Room = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-gap: 5px;
  padding: 10px;
`;

const RoomColumn = styled.div`
  font-size: 13px;
  &:first-child {
    padding: 10px;
    /* display : grid; */
  }
`;

const Name = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Message = styled.div``;

export default ({
  photoURL = "https://instagram.fkix2-2.fna.fbcdn.net/vp/ca97df8f03609785d41f2e790c5e91a4/5DF2B4F1/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkix2-2.fna.fbcdn.net",
  name,
  lastMessage
}) => {
  return (
    <Room>
      <RoomColumn>
        <Avatar url={photoURL} size={"md"}></Avatar>
      </RoomColumn>
      <RoomColumn>
        <Name>{name}</Name>
        <Message>{lastMessage}</Message>
      </RoomColumn>
    </Room>
  );
};
