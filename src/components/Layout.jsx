import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/Footer";

const Wrapper = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  height: 100vh; */
`;

const ContentWrapper = styled.div`
  /* flex: 1; */
`;

export default function Layout() {
  return (
    <Wrapper>
      <Header searchBox={false} />
      <Outlet />
      <Footer />
    </Wrapper>
  );
}
