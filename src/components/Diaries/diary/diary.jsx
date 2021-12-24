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
      content:
        "diary 1. 달별로 일기를 볼 수 있도록 만들기 2. 날짜로 포커스가 이동하는 기능? 3. 다크모드 라이트모드? ",
      file: "files",
      imgURL: null,
    },
    2: {
      id: 2,
      date: "2021.12.20",
      title: "2end diary",
      content:
        "calendar 1. 이번 달 달력 가져오기 2. 전체 달력 가져오기 3. 날짜 혹은 달을 클릭하면 다이어리의 해당 달로 이동 가능?",
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
