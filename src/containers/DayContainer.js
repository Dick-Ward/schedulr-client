import React from "react";
import DayGrid from "../components/DayGrid";
import AppointmentList from "../components/AppointmentList";
import AppointmentFormContainer from "./AppointmentFormContainer";

class DayContainer extends React.Component {
  render() {
    return (
      <div class="ui very padded text container">
        <div style={{ float: "left" }}>
          <DayGrid times={this.props.times} />
        </div>
        {/* <div style={{ float: "right" }}>
          <AppointmentList appointments={this.props.appointments} />
        </div> */}
        <AppointmentFormContainer />
      </div>
    );
  }
}

export default DayContainer;
