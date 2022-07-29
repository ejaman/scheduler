import React from "react";
import { BasicBtn, TabBtn } from "../Buttons/buttons";
import { Title } from "../Titles/titles";
import styles from "./header.module.css";
import { HeaderContainer } from "./headerComponents";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Title>Scheduler</Title>
      <TabBtn href="/calendar">Calendar</TabBtn>
      <TabBtn href="/diary">Diary</TabBtn>
      <BasicBtn onClick={props.onLogout}>Logout</BasicBtn>
    </HeaderContainer>
  );
};

export default Header;
