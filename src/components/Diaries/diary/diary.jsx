import styles from "./diary.module.css";
import React, { useEffect, useState } from "react";
import Header from "../../header/header";
import AddDiary from "../add_diary/add_diary";
import AddedDiary from "../added_diary/added_diary";
import { useNavigate } from "react-router";

const Diary = ({ authService, FileInput }) => {
  const [diaries, setDiaries] = useState({
    1: {
      id: 1,
      date: "2021.12.20",
      title: "first diary",
      content: "블라브 랄르바 르라브라블 르랄브라 를아니멘  ",
      file: "files",
      imgURL: null,
    },
    2: {
      id: 2,
      date: "2021.12.20",
      title: "2end diary",
      content: "어쩌구저 저구저어 우저우 어주엉 넝어님 아야웅 어애저어내멏아",
      file: "files",
      imgURL: null,
    },
  });
  const onLogout = () => {
    authService.logout();
  };

  const navigate = useNavigate();
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addAndUpdateFeed = (feed) => {
    setDiaries((diaries) => {
      const updated = { ...diaries };
      updated[feed.id] = feed;
      return updated;
    });
  };

  const deleteFeed = (feed) => {
    setDiaries((diaries) => {
      const deleted = { ...diaries };
      delete deleted[feed.id];
      return deleted;
    });
  };
  return (
    <section className={styles.diary}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <AddDiary
          diaries={diaries}
          onAdd={addAndUpdateFeed}
          FileInput={FileInput}
        />
        <AddedDiary
          diaries={diaries}
          onDelete={deleteFeed}
          onUpdate={addAndUpdateFeed}
        />
      </div>
    </section>
  );
};

export default Diary;
