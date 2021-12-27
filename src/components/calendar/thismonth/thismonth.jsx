import React, { useRef } from "react";
import styles from "./thismonth.module.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //

const Thismonth = ({ events }) => {
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
      <h1>This month</h1>
      <div className={styles.cal}>
        <FullCalendar
          // theme="Litera"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventColor="#8F93A3"
          nowIndicator
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
      </div>
    </form>
  );
};

export default Thismonth;
