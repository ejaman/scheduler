import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; //

const List = (props) => {
  const handleDateClick = (event) => {
    console.log(event);
  };

  const handleEventClick = (event) => {
    console.log(event);
  };

  const onBtnClick = () => {
    console.log("new event");
  };
  const events = [
    {
      id: 1,
      title: "event1",
      start: "2021-12-24",
      end: "2021-12-25",
    },
    {
      id: 2,
      title: "test",
      start: "2021-12-12",
      end: "2021-12-14",
    },
  ];
  return (
    <form>
      <h1>this month</h1>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGrid"
        // customButtons={{
        //   text: "new",
        //   click: onBtnClick,
        // }}
        events={events}
        eventColor="red"
        nowIndicator
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </form>
  );
};

export default List;
