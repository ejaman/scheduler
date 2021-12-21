import React from "react";
import AddList from "./addList/addList";

import styles from "./formSchedule.module.css";

const FormSchedule = (props) => {
  return (
    <form className={styles.form}>
      <p className={styles.date}>date</p>
      <AddList />
      <li className={styles.list}>
        <input className={styles.todo} type="checkbox" />
        <button className={styles.deleteBtn}>
          <i className="far fa-minus-square"></i>
        </button>
      </li>
    </form>
  );
};

export default FormSchedule;
