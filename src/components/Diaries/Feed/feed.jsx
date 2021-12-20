import React from "react";
import styles from "./feed.module.css";

const DEFAULT_IMAGE = "/images/img1.png";
const Feed = ({ feed, onDelete }) => {
  const { date, title, content, file, imgURL } = feed;
  const url = imgURL || DEFAULT_IMAGE;

  const onSubmit = () => {
    onDelete(feed);
  };
  return (
    <div className={styles.feed}>
      <button className={styles.deleteBtn} onClick={onSubmit}>
        <i className="far fa-times-circle"></i>
      </button>
      <img className={styles.img} src={url} alt="profile photo" />
      <div className={styles.container}>
        <p className={styles.date}>{date}</p>
        <input
          className={styles.title}
          type="text"
          name="title"
          value={title}
        ></input>
        <textarea
          className={styles.content}
          name="message"
          value={content}
        ></textarea>
        <button className={styles.todoBtn}>check To do list</button>
      </div>
    </div>
  );
};

export default Feed;
