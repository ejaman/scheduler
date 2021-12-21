import React from "react";
import styles from "./addList.module.css";

const AddList = (props) => {
  return (
    <form className="add">
      <input className="addBar" type="text" placeholder="Add list"></input>
      <button className="addBtn" type="submit">
        <i class="far fa-plus-square"></i>
      </button>
    </form>
  );
};

export default AddList;
