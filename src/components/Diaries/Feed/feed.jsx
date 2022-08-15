import React from "react";
import styled from "styled-components";

const DEFAULT_IMAGE = "/images/snow.jpeg";
const Feed = ({ feed, onDelete, onUpdate, d }) => {
  const { date, title, content, imgURL } = feed;
  const url = imgURL || DEFAULT_IMAGE;

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    onUpdate({
      ...feed,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    onDelete(feed);
  };
  return (
    <FeedContainer>
      <Img src={url} alt="profile photo" />
      <Content>
        <Input type="text" name="title" value={title} onChange={onChange} />
        <Date>{date}</Date>
        <TextArea
          name="content"
          value={content}
          onChange={onChange}
          spellCheck={false}
        ></TextArea>
      </Content>
      <Button onClick={onSubmit}>Delete</Button>
    </FeedContainer>
  );
};

export const FeedContainer = styled.div`
  margin: 1rem 0.4rem;
  border-bottom: 1px solid;
  width: 30%;
  height: 33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 17rem;
`;
const Content = styled.div`
  padding-top: 0.5rem;
  width: 100%;
`;
const Input = styled.input`
  font-weight: 800;
  font-size: 1rem;
  background: none;
  border: none;
  width: 100%;
  outline: none;
`;
const Date = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;
const TextArea = styled.textarea`
  font-size: 1rem;
  font-weight: 600;
  font-family: sans-serif;
  width: 100%;
  height: 8rem;
  background: none;
  border: none;
  outline: none;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
  margin-right: auto;
  border: none;
  background: none;
  font-weight: 600;
  font-size: 0.9rem;
  &:hover {
    opacity: 0.5;
  }
`;
export default Feed;
