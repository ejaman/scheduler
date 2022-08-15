import styled from "styled-components";
export const ModalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    left: "0",
    width: "500px",
    height: "650px",
    padding: "0",
    margin: "auto",
    overflow: "auto",
  },
};

export const AddForm = styled.form`
  padding: 0.5rem;
  text-align: center;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 22rem;
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  outline: 0;
  padding: 0.2rem;
  font-weight: 800;
  font-size: 1rem;
  background: none;
  border: none;
`;

export const Today = styled.p`
  margin-right: auto;
  font-size: 0.9rem;
  font-weight: 500;
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 0.7em 0rem;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 1rem;
  outline: 0;
  margin-bottom: 0.5rem;
  height: 9em;
`;

export const BtnDiv = styled.div`
  width: 50%;
  display: flex;
  margin: auto;
`;
