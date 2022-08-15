import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //
import { CalendarForm, Div } from "../../Component/Container";

const Thismonth = ({ schedules, onAdd, onDelete }) => {
  const handleDateSelect = (event) => {
    const title = prompt("이벤트 이름을 입력해주세요 👍");
    if (title) {
      const color = prompt(
        "이벤트 생상을 입력해주세요(1~7: 무지개 색생, 0: black, 그 외 입력시 기본색상)"
      );
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
      onAdd(schedule);
    }
  };

  const handleEventClick = (click) => {
    if (window.confirm(`delete the event '${click.event.title}'`)) {
      const eventId = click.event._def.publicId * 1;
      onDelete(eventId);
    }
  };
  // ToDd =>  삭제 이벤트가 안먹음
  return (
    <CalendarForm>
      <Div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          droppable={true}
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          events={Object.values(schedules)}
          nowIndicator
        />
      </Div>
    </CalendarForm>
  );

  function EventColor(color) {
    switch (color) {
      case "0":
        return "#686868";
      case "1":
        return "#d5a0a0";
      case "2":
        return "#d5bca0";
      case "3":
        return "#d5caa0";
      case "4":
        return "#b3d5a0";
      case "5":
        return "#a0c8d5";
      case "6":
        return "#a0b2d5";
      case "7":
        return "#aba0d5";
      default:
        return color;
    }
  }
};

export default Thismonth;
