import React from "react";
import styles from "./list.module.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import interactionPlugin from "@fullcalendar/interaction"; //
import listPlugin from "@fullcalendar/list";

const List = ({ events }) => {
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
    <form className={styles.form}>
      <h1>This week</h1>
      <div className={styles.list}>
        <FullCalendar
          plugins={[listPlugin, interactionPlugin]}
          initialView="listWeek"
          // customButtons={{
          //   text: "new",
          //   click: onBtnClick,
          // }}
          events={events}
          nowIndicator
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          height="90%"
        />
        <button>add</button>
      </div>
    </form>
  );
};

export default List;
