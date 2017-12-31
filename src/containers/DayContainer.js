import React from "react";
import DayGrid from "../components/DayGrid";
import AppointmentFormContainer from "./AppointmentFormContainer";
import UserPreferenceFormContainer from "./UserPreferenceFormContainer";
import { Button } from "semantic-ui-react";

class DayContainer extends React.Component {
  state = {
    active: null
  };

  handleClick = event => {
    if (event.target.id === "newAppointment") {
      this.setState({
        active: (
          <AppointmentFormContainer
            currentUser={this.props.currentUser}
            createAppointment={this.props.createAppointment}
            handleClose={this.handleClose}
          />
        )
      });
    } else if (event.target.id === "newPreference") {
      this.setState({
        active: (
          <UserPreferenceFormContainer
            currentUser={this.props.currentUser}
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
        <div className="twelve wide column">
          <DayGrid
            handleClick={this.handleClick}
            currentUser={this.props.currentUser}
            handleDelete={this.props.handleDelete}
          />
        </div>
        <div className="four wide column">
          <div className="ui column grid container">
            <Button
              style={{ marginTop: "1px", marginLeft: "1px" }}
              id="newAppointment"
              onClick={this.handleClick}
            >
              Create New Appointment
            </Button>

            <Button
              style={{ marginTop: "1px", marginLeft: "1px" }}
              id="newPreference"
              onClick={this.handleClick}
            >
              Change Wake/Sleep Times
            </Button>
            <div className="row">
              <div className="four wide column">{this.state.active}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DayContainer;
