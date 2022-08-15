import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./header/header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function Layout({ authService }) {
  const onLogout = () => {
    authService.logout();
  };
  return (
    <Wrapper>
      <Header searchBox={false} onLogout={onLogout} />
      <Outlet />
    </Wrapper>
  );
}
