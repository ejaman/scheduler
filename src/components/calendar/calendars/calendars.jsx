import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ContentContainer } from "../../Component/Container";
import List from "../list/list";
import Thismonth from "../thismonth/thismonth";

const Calendars = ({ authService, Repo }) => {
  const location = useLocation();
  const locationState = location?.state;
  const [schedules, setSchedules] = useState([]);
  const [userId, setUserId] = useState(locationState && locationState.id); //check!
  const navigate = useNavigate();

  // for login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  });

  // mount되었을 때 또는 사용자의 아이디가 변경될 때 사용 - 읽어오는데 문제가 있음
  // 지금 마운트되면서 새로운 setSchedule이 뜨긴함 문제는 이 새로운 스케쥴이 파베에이ㅆ는 데이터를 못 가져온다는거
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = Repo.syncSchedule(userId, (schedules) =>
      setSchedules(Object.values(schedules))
    );
    return () => stopSync(); //unmount
  }, [userId]);

  // 실행됨
  const addSchdule = (schedule) => {
    console.log(schedule);
    const added = [...schedules, schedule];
    setSchedules(added);

    Repo.saveSchedule(userId, schedule); // 작동됨
  };

  const deleteSchedule = (eventid) => {
    const test = [...schedules];
    const result = test.filter((item) => item.id !== eventid);
    console.log(result);
    setSchedules(result);
    Repo.removeSchedule(userId, eventid); // 작동 안됨
  };

  return (
    <ContentContainer>
      <Thismonth
        schedules={schedules}
        onAdd={addSchdule}
        onDelete={deleteSchedule}
      />
      <List schedules={schedules} />
    </ContentContainer>
  );
};

export default Calendars;
