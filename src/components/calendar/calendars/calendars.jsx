import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../header/header";
import List from "../list/list";
import Thismonth from "../thismonth/thismonth";
import styles from "./calendars.module.css";

// 2. 풀캘린더 스타일링
// 3. 이벤트 추가/ 삭제

const Calendars = ({ authService }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "event1",
      start: "2021-12-25T07:00:00",
      end: "2021-12-28",
      backgroundColor: "green",
      borderColor: "green",
    },
    {
      id: 2,
      title: "test",
      start: "2021-12-25",
      end: "2021-12-27",
      backgroundColor: "red",
      borderColor: "red",
    },
    {
      id: 2,
      title: "test",
      start: "2021-12-28",
      end: "2021-12-29T07:00:00",
      backgroundColor: "red",
      borderColor: "red",
    },
  ]);

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
  return (
    <section className={styles.calenders}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Thismonth events={events} />
        <List events={events} />
      </div>
    </section>
  );
};

export default Calendars;
