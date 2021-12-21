import React from "react";
import AddSchedule from "../addSchedule/addSchedule";
import FormSchedule from "../formSchedule/formSchedule";
import styles from "./scheduleMaker.module.css";

const ScheduleMaker = (props) => {
  return (
    <section className={styles.schedulemaker}>
      <h1>schedule maker</h1>
      <FormSchedule />
      <AddSchedule />
    </section>
  );
};

export default ScheduleMaker;
