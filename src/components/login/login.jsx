import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Container, LoginInput, PText } from "./loginComponents";
import { Title } from "../Titles/titles";
import { BasicBtn } from "../Component/buttons";
import { Div } from "../Component/Container";

const Istyle = {
  marginRight: "0.5em",
};

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const goCalendar = (userId) => {
    navigate("/diary", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goCalendar(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goCalendar(user.id);
    });
  });

  return (
    <Container>
      <Div>
        <Title>MyDiary</Title>
        <PText>manage your daily life with me</PText>
      </Div>
      <Div>
        <LoginInput ref={inputRef} placeholder="email" />
        <LoginInput ref={inputRef} placeholder="password" />
        <BasicBtn>Login</BasicBtn>
      </Div>
      <Div>
        <PText>or login with</PText>
        <BasicBtn onClick={onLogin}>
          <i className="fab fa-google" style={Istyle}></i>Google
        </BasicBtn>
        <BasicBtn onClick={onLogin}>
          <i className="fab fa-github" style={Istyle}></i>Github
        </BasicBtn>
      </Div>
    </Container>
  );
};

export default Login;
