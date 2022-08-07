import React, { useRef, useState } from "react";
import { TextBtn } from "../../Component/buttons";
import ModalFrame from "../diary/modalFrame";

import {
  AddForm,
  BtnDiv,
  FlexDiv,
  Img,
  ModalStyle,
  TextArea,
} from "../diary/modalStyle";
// import styles from "./addDiary.module.css";

const AddDiary = ({ onAdd, FileInput, isOpen, closeModal }) => {
  const formRef = useRef();
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
      month: month, // month 별로 일기보는데 필요
      content: contentRef.current.value || "",
      file: file.file || "",
      imgURL: file.imgURL || "",
    };
    formRef.current.reset(); // 사용자가 입력해서 제출하고 나면 폼이 리셋되도록
    onAdd(feed);
    closeModal();
  };
  const DEFAULT_IMAGE = "/images/snow.jpeg";
  const url = file.imgURL || DEFAULT_IMAGE;

  return (
    <ModalFrame _handleModal={closeModal}>
      <AddForm ref={formRef}>
        <Img src={url} alt="img"></Img>
        <FlexDiv>
          <p>{today}</p>
          <TextArea ref={contentRef} name="content"></TextArea>
        </FlexDiv>
        <BtnDiv>
          <FileInput name={file.file} onFileChange={onFileChange} />
          <TextBtn width="49%" onClick={onSubmit}>
            save
          </TextBtn>
        </BtnDiv>
      </AddForm>
    </ModalFrame>
  );
};

export default AddDiary;
