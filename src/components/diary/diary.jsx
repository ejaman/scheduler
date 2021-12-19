import styles from "./diary.module.css";
import React from "react";
import Header from "../header/header";
import AddDiary from "../add_diary/add_diary";

const Diary = (props) => {
  return (
    <section className={styles.container}>
      <Header />
      <h1>Diary</h1>
      <AddDiary />
    </section>
  );
};

export default Diary;
