import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import AddDiary from "../addDiary/addDiary";
import AddedDiary from "../addedDiary/addedDiary";
import { RoundBtn } from "../../Component/buttons";
import styled from "styled-components";
// import MonthBtn from "../monthBtn/monthBtn";

const Diary = ({ authService, FileInput, Repo }) => {
  const location = useLocation(); // check
  const locationState = location?.state;
  const [diaries, setDiaries] = useState([
    {
      title: "How to use?",
      date: "start day",
      content: `주요 기능
     - 포토 다이어리를 작성한다
      : 오늘의 사진과 함께 간단한 일기로 하루를 기록
    - 달력으로 일정을 관리한다
      : 주요 일정을 달력에 표시하고 한 주의 이벤트를 확인`,
    },
  ]);
  const [userId, setUserId] = useState(locationState && locationState.id); //check!
  const [isOpen, setIsOpen] = useState(false);
  const outSection = useRef();

  const navigate = useNavigate();

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

  const onAddClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Section>
      <AddButton onClick={onAddClick}>+</AddButton>
      {isOpen && (
        <div>
          <AddDiary
            diaries={diaries}
            onAdd={addAndUpdateFeed}
            FileInput={FileInput}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        </div>
      )}
      <div ref={outSection}>
        <AddedDiary
          onClick={(e) => {}}
          diaries={diaries}
          onDelete={deleteFeed}
          onUpdate={addAndUpdateFeed}
        />
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
`;

const AddButton = styled(RoundBtn)`
  width: 3rem;
`;
export default Diary;
