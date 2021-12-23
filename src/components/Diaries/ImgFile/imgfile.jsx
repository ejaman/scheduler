import React, { useRef, useState } from "react";
import ImgUploader from "../../../service/imgUploader";
import styles from "./imgfile.module.css";

const Imgfile = ({ imgUploader, onFileChange }) => {
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const onBtnClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const upload = await imgUploader.upload(event.target.files[0]); // check
    setLoading(false);
    onFileChange({ name: upload.original_filename, url: upload.url });
  };

  return (
    <div>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && <button onClick={onBtnClick}>file</button>}
    </div>
  );
};

export default Imgfile;
