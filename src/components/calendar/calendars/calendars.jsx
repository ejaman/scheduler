import { useState } from "preact/hooks";
import React from "react";
import Header from "../../header/header";
import List from "../list/list";
import Thismonth from "../thismonth/thismonth";
import styles from "./calendars.module.css";

const Calendars = (props) => {
  // const [events, setEvents] = useState({});
  return (
    <section className={styles.calenders}>
      <Header />
      <div className={styles.container}>
        <Thismonth />
        <List />
      </div>
    </section>
  );
};

export default Calendars;
