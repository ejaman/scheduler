import React, { useRef } from "react";
import styles from "./thismonth.module.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //

const Thismonth = ({ schedules, onAdd }) => {
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a title for your event");
    // let time = prompt("time?");
    let color = prompt("Event color?");
    let calendarApi = selectInfo.view.calendar;
    const defaultColor = title.length % 2 === 1 ? "#535665" : "#8F93A3";

    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: Date.now(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay, //all day?
        backgroundColor: color || defaultColor,
        borderColor: color || defaultColor,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  };

  return (
    <form className={styles.form}>
      <h1>This month</h1>
      <div className={styles.cal}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          events={schedules}
          nowIndicator
        />
      </div>
    </form>
  );
};

export default Thismonth;
