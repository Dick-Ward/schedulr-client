import React from "react";
import DayList from "./DayList";
import AppointmentList from "../components/AppointmentList";

const DayGrid = props => {
  const { preference } = props;
  return (
    <div>
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
              startTime={preference.startTime}
              endTime={preference.endTime}
            />
          </div>
          <div className="six wide column">
            <AppointmentList appointments={props.appointments} />
          </div>
        </div>
      </div>
      <div
        className="ui bottom  inverted attached segment"
        style={{ backgroundColor: "#313131" }}
      />
    </div>
  );
};

export default DayGrid;
