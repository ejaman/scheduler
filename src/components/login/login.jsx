import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.idLog}>
        <input className={styles.id} value="id"></input>
        <input className={styles.pw} value="password"></input>
        <button className={styles.logBtn}>Login</button>
      </div>
      <div className={styles.socialLog}>
        <button className={styles.googleBtn}>google</button>
        <button className={styles.gitBtn}>github</button>
      </div>
      <a className={styles.link} href="https://github.com/ejaman/scheduler">
        <p>check the code🤘</p>
      </a>
    </div>
  );
};

export default Login;
