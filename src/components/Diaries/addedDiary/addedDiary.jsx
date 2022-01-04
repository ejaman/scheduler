import React from "react";
import { useNavigate } from "react-router";
import Feed from "../Feed/feed";
import MonthBtn from "../monthBtn/monthBtn";
import styles from "./added_diary.module.css";

const AddedDiary = ({ diaries, onDelete, onUpdate }) => {
  const test = Object.values(diaries);
  console.log(test);
  console.log(typeof test); //check

  return (
    <section className={styles.added}>
      <MonthBtn />
      <ul className={styles.feeds}>
        {Object.keys(diaries).map((key) => (
          <Feed
            key={key}
            feed={diaries[key]}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </section>
  );
};

export default AddedDiary;
