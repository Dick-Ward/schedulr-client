import React from "react";
import Appointment from "../components/Appointment";
import api from "../services/api";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class AppointmentContainer extends React.Component {
  state = {
    x: 0,
    y: 67.5,
    modalOpen: false,
    name: "",
    duration: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSelect = (e, value) => {
    this.setState({ [value.name]: value.value });
  };

  componentDidMount() {
    this.setState({
      x: this.props.x,
      y: this.props.y,
      name: this.props.name,
      duration: this.props.duration
    });
  }
  handleSubmit = (e, f) => {
    api.appointments.updateAppointment(
      e.target.id,
      this.state.name,
      this.state.duration
    );
    this.setState({ modalOpen: false });
  };
  handleStop = (e, f) => {
    const y = Math.round(f.y / 33.75) * 33.75;
    const x = Math.round(f.x / 255) * 255;
    api.appointments.updateAppointmentLocation(f.node.firstChild.id, x, y);
    this.setState({ x: x, y: y });
  };
  render() {
    const handleDoubleClick = () => {
      this.setState({ modalOpen: true });
    };

    return (
      <Appointment
        handleDoubleClick={handleDoubleClick}
        handleStop={this.handleStop}
        name={this.state.name}
        id={this.props.id}
        x={this.state.x}
        y={this.state.y}
        duration={this.state.duration}
        modalOpen={this.state.modalOpen}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleSelect={this.handleSelect}
      />
    );
  }
}

export default AppointmentContainer;
