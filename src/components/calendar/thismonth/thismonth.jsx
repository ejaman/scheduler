import React from "react";
import styles from "./thismonth.module.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //

const Thismonth = ({ schedules, onAdd, onDelete }) => {
  console.log(schedules);
  console.log(Object.values(schedules));
  const handleDateSelect = (event) => {
    let title = prompt("Please enter a title for your event");
    let color = prompt("Event color?(choose 1,2,3,4,5 or type what you want)");
    event.view.calendar.unselect(); // clear date selection
    const defaultColor = EventColor(color);
    const schedule = {
      id: Date.now(),
      title,
      start: event.startStr,
      end: event.endStr,
      backgroundColor: defaultColor,
      borderColor: defaultColor,
    };

    if (title) {
      onAdd(schedule);
    }
  };

  const handleEventClick = (click) => {
    if (window.confirm(`delete the event '${click.event.title}'`)) {
      const eventId = click.event._def.publicId * 1;
      onDelete(eventId);
    }
  };
  // 삭제 이벤트가 안먹음 일단 대충 파악함 ㅎㅎ
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
          events={Object.values(schedules)}
          nowIndicator
        />
      </div>
    </form>
  );

  function EventColor(color) {
    switch (color) {
      case "1":
        return "#535665";
      case "2":
        return "#707483";
      case "3":
        return "#8F93A3";
      case "4":
        return "#666E8E";
      case "5":
        return "#A2AACE";
      default:
        return color;
    }
  }
};

export default Thismonth;
