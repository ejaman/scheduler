import React from "react";
import styles from "./monthBtn.module.css";

const MonthBtn = ({ feed }) => {
  const onBtnClick = (event) => {
    console.log(event.currentTarget.textContent);
  };
  return (
    <div className={styles.month}>
      <button className={styles.btn} onClick={onBtnClick}>
        1
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        2
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        3
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        4
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        5
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        6
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        7
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        8
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        9
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        10
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        11
      </button>
      <button className={styles.btn} onClick={onBtnClick}>
        12
      </button>
    </div>
  );
};

export default MonthBtn;
