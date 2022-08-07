import React from "react";
import { RoundBtn, TabBtn } from "../Component/buttons";
import { HeaderContainer } from "./headerComponents";

const Header = ({ onLogout }) => {
  return (
    <HeaderContainer>
      <TabBtn href="/calendar">Calendar</TabBtn>
      <TabBtn href="/diary">Diary</TabBtn>
      <RoundBtn onClick={onLogout}>Logout</RoundBtn>
    </HeaderContainer>
  );
};

export default Header;
