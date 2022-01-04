import styles from "./diary.module.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../../header/header";
import AddDiary from "../addDiary/addDiary";
import AddedDiary from "../addedDiary/addedDiary";

const Diary = ({ authService, FileInput, Repo }) => {
  const location = useLocation(); // check
  const locationState = location?.state;
  const [diaries, setDiaries] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.id); //check!
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  // for login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  });

  // mount되었을 때 또는 사용자의 아이디가 변경될 때 사용
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = Repo.syncFeed(userId, (diaries) => setDiaries(diaries));
    return () => stopSync(); //unmount
  }, [userId]);

  const addAndUpdateFeed = (feed) => {
    setDiaries((diaries) => {
      const updated = { ...diaries };
      updated[feed.id] = feed;
      return updated;
    });
    Repo.saveDiary(userId, feed);
  };

  const deleteFeed = (feed) => {
    setDiaries((diaries) => {
      const deleted = { ...diaries };
      delete deleted[feed.id];
      return deleted;
    });
    Repo.removeDiary(userId, feed);
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
