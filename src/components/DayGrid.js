import React from "react";
import DayList from "./DayList";
import AppointmentList from "../components/AppointmentList";

const DayGrid = props => {
  const { currentUser } = props;

  return (
    <div style={{ width: "550px", minWidth: "550px" }}>
      <div className="ui top attached three item inverted menu">
        <a className="item" style={{ backgroundColor: "#313131" }}>
          &lt; Back
        </a>
        <a className="item" style={{ backgroundColor: "#3D3D3D" }}>
          Today
        </a>
        <a className="item" style={{ backgroundColor: "#313131" }}>
          Forward >
        </a>
      </div>
      <div
        style={{
          height: "70vh",
          width: "auto",
          overflowY: "scroll",
          overflowX: "hidden"
        }}
      >
        <div className="ui column grid container">
          <div className="ten wide column">
            <DayList
              startTime={currentUser.start_time}
              endTime={currentUser.end_time}
            />
          </div>
          <div className="six wide column">
            <AppointmentList
              appointments={currentUser.appointments}
              handleDelete={props.handleDelete}
            />
          </div>
        </div>
      </div>
      <div
        className="ui bottom inverted attached segment"
        style={{ backgroundColor: "#313131" }}
      />
    </div>
  );
};

export default DayGrid;
