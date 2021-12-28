import React, { useRef } from "react";
import styles from "./addForm.module.css";

const AddForm = ({ onAdd }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const startRef = useRef();
  const endRef = useRef();
  const colorRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const schedule = {
      id: Date.now(),
      title: titleRef.current.value || "",
      start: startRef.current.value || "",
      end: endRef.current.value || "",
      backgroundColor: colorRef.current.value || "",
      borderColor: colorRef.current.value || "",
    };
    formRef.current.reset();
    onAdd(schedule);
    console.log(schedule);
  };

  return (
    <form ref={formRef} className={styles.addform}>
      <p>add event</p>
      <div className={styles.form}>
        <input
          ref={titleRef}
          type="text"
          name="title"
          placeholder="Title"
        ></input>
        <input
          ref={startRef}
          type="text"
          name="startDate"
          placeholder="StartDate"
        ></input>
        <input
          ref={endRef}
          type="text"
          name="endDate"
          placeholder="EndDate"
        ></input>
        <input
          ref={colorRef}
          type="text"
          name="eventColor"
          placeholder="EventColor"
        ></input>
        <button onClick={onSubmit}>Add event</button>
      </div>
    </form>
  );
};

export default AddForm;
