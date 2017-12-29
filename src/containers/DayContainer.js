import React from "react";
import DayGrid from "../components/DayGrid";
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
    this.setState({ active: null });
  };

  render() {
    return (
      <div className="ui column stackable grid container">
        <div className="eight wide column">
          <DayGrid
            handleClick={this.handleClick}
            preference={this.props.preference}
            appointments={this.props.appointments}
          />
        </div>
        <div className="eight wide column">
          <div className="ui column grid container">
            <div className="four wide column" />

            <div
              className="ui button"
              id="newAppointment"
              onClick={this.handleClick}
            >
              Create New Appointment
            </div>

            <div
              style={{ marginLeft: "1px" }}
              className="ui button"
              id="newPreference"
              onClick={this.handleClick}
            >
              Change Wake/Sleep Times
            </div>
            <div className="row">
              <div className="eight wide column">{this.state.active}</div>
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
