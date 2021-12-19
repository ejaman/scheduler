import React from "react";

const AddDiary = (props) => {
  return (
    <section>
      <h1>add diary</h1>
      <form>
        <input value="date"></input>
        <img></img>
        <input value="write diary"></input>
        <button>save</button>
        <button>update</button>
      </form>
    </section>
  );
};

export default AddDiary;
