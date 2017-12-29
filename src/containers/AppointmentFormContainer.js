import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import api from "../services/api";

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
      <div
        className="ui raised segment"
        style={{
          backgroundColor: "#404E5C",
          position: "absolute",
          right: "-250px",
          width: "30vw"
        }}
      >
        <a onClick={this.props.handleClose} className="ui right corner label">
          <i onClick={this.props.handleClose} className="delete icon" />
        </a>
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
