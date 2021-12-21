import React from "react";
import { useNavigate } from "react-router";
import Feed from "../Feed/feed";
import styles from "./added_diary.module.css";

const AddedDiary = ({ diaries, onDelete, onUpdate }) => {
  return (
    <section className={styles.added}>
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
