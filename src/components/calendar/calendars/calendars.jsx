import React from "react";
import Header from "../../header/header";
import Thismonth from "../thismonth/thismonth";
import Year from "../year/year";
import styles from "./calendars.module.css";

const Calendars = (props) => {
  return (
    <section className={styles.calenders}>
      <Header />
      <div className={styles.container}>
        <Thismonth />
        <Year />
      </div>
    </section>
  );
};

export default Calendars;
