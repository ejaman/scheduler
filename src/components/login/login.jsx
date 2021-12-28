import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import styles from "./login.module.css";

const Istyle = {
  marginRight: "0.5em",
};

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const goCalendar = (userId) => {
    navigate("/calendar", { state: { id: userId } });
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
    <section className={styles.container}>
      <h1 className={styles.title}>Scheduler</h1>
      {/* <div className={styles.idLog}>
        <input
          ref={inputRef}
          className={styles.email}
          placeholder="email"
        ></input>
        <button className={styles.logBtn}>Login</button>
      </div> */}
      <div className={styles.socialLog}>
        <button className={styles.googleBtn} onClick={onLogin}>
          <i className="fab fa-google" style={Istyle}></i>Google
        </button>
        <button className={styles.gitBtn} onClick={onLogin}>
          <i className="fab fa-github" style={Istyle}></i>Github
        </button>
      </div>
    </section>
  );
};

export default Login;
