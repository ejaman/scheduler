import styled from "styled-components";
export const ModalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    left: "0",
    width: "500px",
    height: "600px",
    padding: "0",
    margin: "auto",
    overflow: "auto",
  },
};

export const AddForm = styled.form`
  padding: 0.5rem;
  text-align: center;
`;

export const Img = styled.img`
  border-radius: 5px;
  width: 80%;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 80%;
  border: 0;
  padding: 0.7em 0rem;
  font-family: sans-serif;
  outline: 0;
  margin-bottom: 0.5rem;
  color: #6b6b6b;
  height: 12em;
`;

export const BtnDiv = styled.div`
  width: 50%;
  display: flex;
  margin: auto;
`;
