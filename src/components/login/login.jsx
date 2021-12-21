import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goDiary = (userId) => {
    navigate("/diary", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goDiary(data.user.uid));
  };
  useEffect(() => {
    // user가 있다면 바로 로그인 건너뛰고 card로
    authService.onAuthChange((user) => {
      user && goDiary(user.id);
    });
  });

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Scheduler</h1>

      <div className={styles.idLog}>
        <input className={styles.id} value="id"></input>
        <input className={styles.pw} value="password"></input>
        <button className={styles.logBtn}>Login</button>
      </div>

      <div className={styles.socialLog}>
        <p className={styles.ment}>or login with</p>
        <button className={styles.googleBtn} onClick={onLogin}>
          <i className="fab fa-google"></i>Google
        </button>
        <button className={styles.gitBtn} onClick={onLogin}>
          <i className="fab fa-github"></i>Github
        </button>
      </div>
    </section>
  );
};

export default Login;
