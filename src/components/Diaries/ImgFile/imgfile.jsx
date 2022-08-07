import React, { useRef, useState } from "react";
import { TextBtn } from "../../Component/buttons";
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
    <div style={{ width: "49%", marginRight: "0.1rem" }}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <TextBtn width="100%" onClick={onBtnClick}>
          Img file
        </TextBtn>
      )}
      {loading && <TextBtn width="100%">Loading...</TextBtn>}
    </div>
  );
};

export default Imgfile;
