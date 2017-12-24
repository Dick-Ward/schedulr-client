import React from "react";
import DayGrid from "../components/DayGrid";
import AppointmentList from "../components/AppointmentList";
import AppointmentFormContainer from "./AppointmentFormContainer";
import UserPreferenceFormContainer from "./UserPreferenceFormContainer";

class DayContainer extends React.Component {
  render() {
    return (
      <div class="ui column stackable grid container">
        <div class="eight wide column">
          <DayGrid preference={this.props.preference} />
        </div>
        <div class="eight wide column">
          <div class="ui column grid container">
            <div class="eight wide column">
              <AppointmentList appointments={this.props.appointments} />
            </div>
            <div class="eight wide column">
              <AppointmentFormContainer
                createAppointment={this.props.createAppointment}
              />
              <div class="row">
                <UserPreferenceFormContainer
                  handleChange={this.props.handleChange}
                  setTimes={this.props.setTimes}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
}

export default DayContainer;
