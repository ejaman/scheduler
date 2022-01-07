import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../../header/header";
import List from "../list/list";
import Thismonth from "../thismonth/thismonth";
import styles from "./calendars.module.css";

const Calendars = ({ authService, Repo }) => {
  const location = useLocation();
  const locationState = location?.state;
  const [schedules, setSchedules] = useState([
    {
      id: 2,
      title: "test1",
      start: "2021-12-25",
      end: "2021-12-27",
      backgroundColor: "#535665",
      borderColor: "#535665",
    },
    {
      id: 3,
      title: "test2",
      start: "2021-12-28",
      end: "2021-12-29T07:00:00",
      backgroundColor: "#8F93A3",
      borderColor: "#8F93A3",
    },
  ]);
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

  // mount되었을 때 또는 사용자의 아이디가 변경될 때 사용 - 읽어오는데 문제가 있음
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = Repo.syncSchedule(userId, (schedules) =>
      setSchedules(schedules)
    );

    return () => stopSync(); //unmount
  }, [userId]);

  // 실행됨
  const addSchdule = (schedule) => {
    const added = [...schedules, schedule];
    setSchedules(added);
    Repo.saveSchedule(userId, schedule);
  };

  const deleteSchedule = (eventid) => {
    const test = [...schedules];
    const result = test.filter((item) => item.id !== eventid);
    setSchedules(result);
    Repo.removeSchedule(userId, eventid);
  };

  return (
    <section className={styles.calenders}>
      <Header onLogout={onLogout} />
      {/* <AddForm onAdd={addSchdule} /> */}
      <div className={styles.container}>
        <Thismonth
          schedules={schedules}
          onAdd={addSchdule}
          onDelete={deleteSchedule}
        />
        <List schedules={schedules} />
      </div>
    </section>
  );
};

export default Calendars;
