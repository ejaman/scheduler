import React, { useRef, useState } from "react";
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
    <div className={styles.file}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <button className={styles.fileBtn} onClick={onBtnClick}>
          Img file
        </button>
      )}
      {loading && <div className={styles.loading}>Loading...</div>}
    </div>
  );
};

export default Imgfile;
