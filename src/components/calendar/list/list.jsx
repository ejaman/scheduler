import React from "react";
import styles from "./list.module.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import interactionPlugin from "@fullcalendar/interaction"; //
import listPlugin from "@fullcalendar/list";
import { ScheduleForm } from "../../Component/Container";

const List = ({ schedules, onAdd }) => {
  const handleDateClick = (event) => {
    console.log(event);
  };

  const handleEventClick = (event) => {
    console.log(event);
  };

  const onBtnClick = () => {
    console.log("new event");
  };

  return (
    <ScheduleForm>
      <div>
        <FullCalendar
          plugins={[listPlugin, interactionPlugin]}
          initialView="listWeek"
          events={schedules}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          height="75%"
        />
      </div>
    </ScheduleForm>
  );
};

export default List;
