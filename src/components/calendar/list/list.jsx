import React from "react";
import styles from "./list.module.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import interactionPlugin from "@fullcalendar/interaction"; //
import listPlugin from "@fullcalendar/list";
import { ScheduleForm } from "../../Component/Container";
import { useEffect } from "react/cjs/react.production.min";

const List = ({ schedules, onAdd }) => {
  const obj = Object.assign({}, schedules);
  console.log(obj);
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
          editable={true}
          selectable={true}
          eventClick={handleEventClick}
          events={schedules}
          height={650}
          nowIndicator
        />
      </div>
    </ScheduleForm>
  );
};

export default List;
