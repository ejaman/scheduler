import React from "react";
import { useNavigate } from "react-router";
import Feed from "../Feed/feed";
import MonthBtn from "../monthBtn/monthBtn";
import styles from "./addedDiary.module.css";

const AddedDiary = ({ diaries, onDelete, onUpdate }) => {
  return (
    <section className={styles.added}>
      <MonthBtn />
      <ul className={styles.feeds}>
        {Object.keys(diaries).map((key) => (
          <Feed
            key={key}
            feed={diaries[key]}
            d={diaries[key].date} // 피드의 날짜
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </section>
  );
};

export default AddedDiary;
