import React from "react";
import { RoundBtn, TabBtn } from "../Component/buttons";
import { Div } from "../Component/Container";
import { Title } from "../Titles/titles";
import { Container, HeaderContainer } from "./headerComponents";

const Header = ({ onLogout }) => {
  return (
    <HeaderContainer>
      <Container>
        <TabBtn href="/calendar">Calendar</TabBtn>
        <TabBtn href="/diary">Diary</TabBtn>
        <RoundBtn onClick={onLogout}>Logout</RoundBtn>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
