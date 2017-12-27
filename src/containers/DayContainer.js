import React from "react";
import DayGrid from "../components/DayGrid";
import AppointmentList from "../components/AppointmentList";
import AppointmentFormContainer from "./AppointmentFormContainer";
import UserPreferenceFormContainer from "./UserPreferenceFormContainer";

class DayContainer extends React.Component {
  state = {
    active: null
  };

  handleClick = event => {
    if (event.target.id === "newAppointment") {
      this.setState({
        active: (
          <AppointmentFormContainer
            createAppointment={this.props.createAppointment}
            handleClose={this.handleClose}
          />
        )
      });
    } else if (event.target.id === "newPreference") {
      this.setState({
        active: (
          <UserPreferenceFormContainer
            handleChange={this.props.handleChange}
            setTimes={this.props.setTimes}
            handleClose={this.handleClose}
          />
        )
      });
    }
  };

  handleClose = e => {
    console.log(e);
    this.setState({ active: null });
  };

  render() {
    return (
      <div class="ui column stackable grid container">
        <div class="eight wide column">
          <DayGrid
            handleClick={this.handleClick}
            preference={this.props.preference}
            appointments={this.props.appointments}
          />
        </div>
        <div class="eight wide column">
          <div class="ui column grid container">
            <div class="four wide column" />

            <div
              class="ui button"
              id="newAppointment"
              onClick={this.handleClick}
            >
              Create New Appointment
            </div>

            <div
              style={{ marginLeft: "1px" }}
              class="ui button"
              id="newPreference"
              onClick={this.handleClick}
            >
              Change Wake/Sleep Times
            </div>
            <div class="row">
              <div class="eight wide column">{this.state.active}</div>
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
