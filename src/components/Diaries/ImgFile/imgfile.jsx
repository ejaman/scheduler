import React, { useRef, useState } from "react";
import { TextBtn } from "../../Component/buttons";
import styled from "styled-components";

const ImgFile = ({ imgUploader, onFileChange }) => {
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
    <Section style={{ width: "49%", marginRight: "0.1rem" }}>
      <Input
        ref={inputRef}
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
    </Section>
  );
};

const Section = styled.section`
  display: inline;
`;
const Input = styled.input`
  display: none;
`;
export default ImgFile;
