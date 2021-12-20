import styles from "./diary.module.css";
import React, { useEffect, useState } from "react";
import Header from "../../header/header";
import AddDiary from "../add_diary/add_diary";
import AddedDiary from "../added_diary/added_diary";
import { useNavigate } from "react-router";

const Diary = ({ authService }) => {
  const [diaries, setDiaries] = useState({
    1: {
      id: 1,
      date: "2021.12.20",
      title: "first diary",
      content:
        "BlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBlaBlaBlaBla BlaBlaBlaBlaBla BlaBlaBla BlaBlaBla vBlaBla BlaBlaBla BlaBla Bla BlaBlaBlaBla",
      file: "files",
      imgURL: null,
    },
    2: {
      id: 2,
      date: "2021.12.20",
      title: "2end diary",
      content:
        "블라블라 블라블라블라블라블라 블라블라 블라블라블라 블라블라블라 블라블라블라블라 블라블라블라블라 블라블라블라 블라블라 블라블라 블라블라 블라블라",
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

  const addFeed = (feed) => {
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
        <AddDiary diaries={diaries} onAdd={addFeed} />
        <AddedDiary diaries={diaries} onDelete={deleteFeed} />
      </div>
    </section>
  );
};

export default Diary;
