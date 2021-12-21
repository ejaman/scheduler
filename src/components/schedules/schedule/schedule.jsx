import React, { useState } from "react";
import Header from "../../header/header";
import ScheduleMaker from "../scheduleMaker/scheduleMaker";
import styles from "./schedule.module.css";

const Schedule = (props) => {
  const [todos, settodos] = useState({
    1: {
      id: 1,
      date: "12/21",
    },
  });
  //data
  return (
    <div className={styles.container}>
      <Header />
      <ScheduleMaker />
    </div>
  );
};

export default Schedule;
