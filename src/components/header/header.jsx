import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>2022 JScheduler </h1>
      <a href="/scheduler">To do list</a>
      <button className={styles.loginBtn} onClick={props.onLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
