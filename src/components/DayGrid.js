import React from "react";
import DayList from "./DayList";
import AppointmentList from "../components/AppointmentList";
import moment from "moment";

const DayGrid = props => {
  const { currentUser } = props;

  return (
    <div
      style={{
        width: "550px",
        minWidth: "550px",
        borderLeft: "solid",
        borderColor: "RGBa(61, 61, 61,.3)",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        borderBottomRightRadius: "10px",
        borderBottomLeftRadius: "10px"
      }}
    >
      <div
        className="ui top attached one item inverted menu"
        style={{
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px"
        }}
      >
        <div
          className="item"
          style={{
            backgroundColor: "#313131",
            color: "#F4FAFF",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px"
          }}
        >
          {moment().format("dddd, MMMM Do YYYY")}
        </div>
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
              startTime={currentUser.startTime}
              endTime={currentUser.endTime}
            />
          </div>
          <div className="six wide column">
            <AppointmentList
              appointments={currentUser.appointments}
              handleDelete={props.handleDelete}
              activeModal={props.activeModal}
              handleDoubleClick={props.handleDoubleClick}
              modalClose={props.modalClose}
            />
          </div>
        </div>
      </div>

      <div
        className="ui bottom inverted attached segment"
        style={{
          backgroundColor: "#313131",
          padding: "5px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",

          textAlign: "center",
          color: "RGBa(150,150,150, 1)",
          fontStyle: "italic"
        }}
      >
        {props.quote}
      </div>
    </div>
  );
};

export default DayGrid;
