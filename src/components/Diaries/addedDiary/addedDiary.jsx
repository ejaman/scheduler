import React from "react";
import Feed from "../Feed/feed";
import styled from "styled-components";

const AddedDiary = ({ diaries, onDelete, onUpdate }) => {
  return (
    <Section>
      <Feeds>
        {Object.keys(diaries).map((key) => (
          <Feed
            key={key}
            feed={diaries[key]}
            d={diaries[key].date} // 피드의 날짜
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </Feeds>
    </Section>
  );
};

export const Section = styled.section`
  width: 100%;
  padding-left: 3rem;

  @media screen and (max-width: 62rem) {
    margin-top: 5em;
    width: 60%;
  }
`;

export const Feeds = styled.ul`
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  &:hover {
  }
`;

export default AddedDiary;
