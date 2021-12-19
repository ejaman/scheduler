import React from "react";
import styles from "./header.module.css";
import Login from "../login/login";

const Header = (props) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>2022 JScheduler </h1>
      <button className={styles.loginBtn}>Logout</button>
    </header>
  );
};

export default Header;
