import styled from "styled-components";
export const Div = styled.div``;

export const ContentContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex: 1;
  margin: 1em 0;
  text-align: center;
  @media screen and (max-width: 55rem) {
    flex-direction: column;
    align-items: center;
    height: 135vh;
  }
`;

export const CalendarForm = styled.form`
  flex-basis: 65%;
  margin: 0 2em;
  padding: 1.5em;
  @media screen and (max-width: 55rem) {
    width: 80%;
    height: 100vh;
    margin-bottom: 2em;
  }
`;

export const ScheduleForm = styled.form`
  flex-basis: 35%;
  margin: 1rem 0rem;
  padding: 1rem 3rem 0rem 0rem;
  // 사용법 찾아보기
  @media screen and (max-width: 55rem) {
    width: 80%;
    height: 100vh;
  }
`;
