import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../header/header";
import List from "../list/list";
import Thismonth from "../thismonth/thismonth";
import styles from "./calendars.module.css";

const Calendars = ({ authService, Repo }) => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      title: "add calendar",
      start: "2021-12-25",
      end: "2021-12-28",
      backgroundColor: "#8F93A3",
      borderColor: "#8F93A3",
    },
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

  const addSchdule = (schedule) => {
    const added = [...schedules, schedule];
    setSchedules(added);
  };

  const deleteSchedule = (eventid) => {
    const test = [...schedules];
    const result = test.filter((item) => item.id !== eventid);
    // console.log(result);
    setSchedules(result);
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
