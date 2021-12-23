import React from "react";
import { useNavigate } from "react-router";
import styles from "./feed.module.css";

const DEFAULT_IMAGE = "/images/img1.png";
const Feed = ({ feed, onDelete, onUpdate }) => {
  const { date, title, content, imgURL } = feed;
  const url = imgURL || DEFAULT_IMAGE;

  const onChange = (event) => {
    console.log(feed);
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    onUpdate({
      ...feed,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

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
          onChange={onChange}
        ></input>
        <textarea
          className={styles.content}
          name="content"
          value={content}
          onChange={onChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Feed;
