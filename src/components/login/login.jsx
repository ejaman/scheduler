import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();

  const goScheduler = (userId) => {
    navigate("/scheduler", { state: { id: userId } });
  };

  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => goScheduler(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goScheduler(user.id);
    });
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Scheduler</h1>

      <div className={styles.idLog}>
        <input className={styles.id} value="id"></input>
        <input className={styles.pw} value="password"></input>
        <button className={styles.logBtn}>Login</button>
      </div>

      <div className={styles.socialLog} onClick={onLogin}>
        <p className={styles.ment}>or login with</p>
        <button className={styles.googleBtn}>
          <i className="fab fa-google"></i>Google
        </button>
        <button className={styles.gitBtn} onClick={onLogin}>
          <i className="fab fa-github"></i>Github
        </button>
      </div>
    </div>
  );
};

export default Login;
