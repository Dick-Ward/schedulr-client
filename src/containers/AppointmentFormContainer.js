import React from "react";
import AppointmentForm from "../components/AppointmentForm";

class AppointmentFormContainer extends React.Component {
  state = {
    name: "",
    duration: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createAppointment(this.state);
  };

  render() {
    return (
      <div>
        <AppointmentForm
          name={this.state.name}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AppointmentFormContainer;
