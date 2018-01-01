import React from "react";
import Appointment from "../components/Appointment";
import api from "../services/api";

class AppointmentContainer extends React.Component {
  state = {
    x: 0,
    y: 0,
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

  onDelete = e => {
    this.props.handleDelete(e.target.id);
    api.appointments.deleteAppointment(e.target.id);
  };

  componentDidMount() {
    this.setState({
      x: this.props.x,
      y: this.props.y,
      name: this.props.name,
      duration: this.props.duration
    });
  }
  handleSubmit = e => {
    api.appointments.updateAppointment(
      e.target.id,
      this.state.name,
      this.state.duration
    );
    this.setState({ modalOpen: false });
  };

  siblingCheck = (f, offset) => {
    let siblingLength = offset;
    if (f.previousSibling) {
      siblingLength += f.previousSibling.offsetHeight;
      if (f.previousSibling.previousSibling) {
        return this.siblingCheck(f.previousSibling, siblingLength);
      }
    }
    return siblingLength;
  };
  handleStop = (e, f) => {
    const winY = f.node.firstChild.getBoundingClientRect().y;
    const scroll =
      f.node.parentElement.parentElement.parentElement.parentElement.scrollTop;

    const y = winY - 87 + scroll;
    const x = this.state.x + Math.round(f.x / 255) * 255;

    api.appointments.updateAppointmentLocation(f.node.firstChild.id, x, y);
  };

  handleDoubleClick = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Appointment
        handleDoubleClick={this.handleDoubleClick}
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
        onDelete={this.onDelete}
        handleClose={this.handleClose}
      />
    );
  }
}

export default AppointmentContainer;
