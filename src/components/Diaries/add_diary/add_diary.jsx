import React, { useRef } from "react";
import styles from "./add_diary.module.css";

const AddDiary = ({ onAdd }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const today = `${year}.${month}.${date}`;

  const onSubmit = (event) => {
    event.preventDefault();
    const feed = {
      id: Date.now(), //uuid
      date: today,
      title: titleRef.current.value || "",
      content: contentRef.current.value || "",
      file: "",
      imgURL: "",
    };
    console.log(feed);
    formRef.current.reset(); // 사용자가 입력해서 제출하고 나면 폼이 리셋되도록
    onAdd(feed);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <img className={styles.img} src="/images/pix3.png"></img>
      <div className={styles.container}>
        <p className={styles.date}>{today}</p>
        <input
          ref={titleRef}
          className={styles.input}
          type="text"
          name="title"
          placeholder="title"
        ></input>
        <textarea
          ref={contentRef}
          className={styles.content}
          name="content"
          placeholder="content"
        ></textarea>
      </div>
      <button className={styles.imgBtn}>img</button>
      <button className={styles.saveBtn} onClick={onSubmit}>
        save
      </button>
    </form>
  );
};

export default AddDiary;
