import React, { useRef, useState } from "react";
import styles from "./addDiary.module.css";

const AddDiary = ({ onAdd, FileInput }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const [file, setFile] = useState({ file: null, imgURL: null });

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const today = `${year}.${month}.${date}`;

  const onFileChange = (file) => {
    setFile({
      file: file.name,
      imgURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const feed = {
      id: Date.now(), //uuid
      date: today,
      title: titleRef.current.value || "",
      content: contentRef.current.value || "",
      file: file.file || "",
      imgURL: file.imgURL || "",
    };
    formRef.current.reset(); // 사용자가 입력해서 제출하고 나면 폼이 리셋되도록
    onAdd(feed);
    console.log(feed);
  };
  const DEFAULT_IMAGE = "/images/snow.jpeg";
  const url = file.imgURL || DEFAULT_IMAGE;

  return (
    <form ref={formRef} className={styles.form}>
      <img className={styles.img} src={url} alt="img"></img>
      <div className={styles.container}>
        <p className={styles.date}>{today}</p>
        <input
          ref={titleRef}
          className={styles.input}
          type="text"
          name="title"
          placeholder="Title"
        ></input>
        <textarea
          ref={contentRef}
          className={styles.content}
          name="content"
          placeholder="Content"
        ></textarea>
      </div>
      <FileInput name={file.file} onFileChange={onFileChange} />
      {/* <button className={styles.imgBtn}>img</button> */}
      <button className={styles.saveBtn} onClick={onSubmit}>
        save
      </button>
    </form>
  );
};

export default AddDiary;
