import React from "react";
import DayGrid from "../components/DayGrid";
import AppointmentList from "../components/AppointmentList";
import AppointmentFormContainer from "./AppointmentFormContainer";
import UserPreferenceFormContainer from "./UserPreferenceFormContainer";

class DayContainer extends React.Component {
  render() {
    return (
      <div class="ui very padded text container">
        <DayGrid preference={this.props.preference} />
        <UserPreferenceFormContainer
          handleChange={this.props.handleChange}
          setTimes={this.props.setTimes}
        />
        <AppointmentFormContainer
          createAppointment={this.props.createAppointment}
        />
        <AppointmentList appointments={this.props.appointments} />
      </div>
    );
  }
}

export default DayContainer;
