import React from "react";
import DayList from "./DayList";
import AppointentFormContainer from "../containers/AppointmentFormContainer";
import AppointmentList from "../components/AppointmentList";

const DayGrid = props => {
  console.log(props);
  const { preference } = props;
  return (
    <div>
      <div class="ui top attached three item inverted menu">
        <a class="item" style={{ backgroundColor: "#313131" }}>
          &lt; Back
        </a>
        <a class="item" style={{ backgroundColor: "#3D3D3D" }}>
          Today
        </a>
        <a class="item" style={{ backgroundColor: "#313131" }}>
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
        <div class="ui column grid container">
          <div class="ten wide column">
            <DayList
              startTime={preference.startTime}
              endTime={preference.endTime}
            />
          </div>
          <div class="six wide column">
            <AppointmentList appointments={props.appointments} />
          </div>
        </div>
      </div>

      <div class="ui bottom attached inverted segment">
        <div class="two ui buttons">
          <div
            class="ui button"
            id="newAppointment"
            onClick={props.handleClick}
          >
            Create New Appointment
          </div>

          <div
            style={{ marginLeft: "1px" }}
            class="ui button"
            id="newPreference"
            onClick={props.handleClick}
          >
            Change Wake/Sleep Times
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayGrid;
