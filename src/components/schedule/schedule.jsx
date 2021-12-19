import React from "react";
import Header from "../header/header";
import styles from "./schedule.module.css";

const Schedule = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>schedule page</h1>
    </div>
  );
};

export default Schedule;
