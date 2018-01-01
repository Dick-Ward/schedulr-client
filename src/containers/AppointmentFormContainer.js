import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import api from "../services/api";
import { Message } from "semantic-ui-react";

class AppointmentFormContainer extends React.Component {
  state = {
    name: "",
    duration: "",
    error: false,
    errorMessage: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelect = (e, value) => {
    this.setState({ [value.name]: value.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name === "" || this.state.duration === "") {
      this.handleError();
    } else {
      api.appointments
        .newAppointment(
          this.state.name,
          this.state.duration,
          this.props.currentUser.id
        )
        .then(this.props.createAppointment)
        .then(this.setState({ name: "", duration: "", errorMessage: "" }));
    }
  };

  handleError = e => {
    this.setState({
      errorMessage: (
        <Message
          error
          header="Error"
          content="Make sure you enter a name and select a duration!"
        />
      )
    });
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
          duration={this.state.duration}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleSelect={this.handleSelect}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}

export default AppointmentFormContainer;
