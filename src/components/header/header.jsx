import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Scheduler </h1>
      <a className={styles.link} href="/diary">
        Diary
      </a>
      <a className={styles.link} href="/calendar">
        Calendar
      </a>
      <button className={styles.loginBtn} onClick={props.onLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
