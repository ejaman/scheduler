import React, { useRef } from "react";
import styles from "./thismonth.module.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //

const Thismonth = ({ schedules }) => {
  const handleDateClick = (event) => {
    console.log(event);
  };

  const onBtnClick = () => {
    console.log("new event");
  };

  const handleDateSelect = (selectInfo) => {
    //근데 이렇게하면 데이터에서 지워지는게 아닌데...? 그리고 이벤트의 색 지정하는 법
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Date.now(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
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
          // theme="Litera"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          events={schedules}
          eventColor="#8F93A3"
          nowIndicator
          dateClick={handleDateClick}
        />
      </div>
    </form>
  );
};

export default Thismonth;
