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

  // Since dropdowns work differently in Semantic, I need to use a separate handleSelect
  handleSelect = (e, value) => {
    this.setState({ [value.name]: value.value });
  };

  onDelete = event => {
    this.props.handleDelete(event.target.id);
    api.appointments.deleteAppointment(event.target.id);
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

  // fires when user stops dragging an item.
  handleStop = (event, dragElement) => {
    //the location of the element in the window
    const winY = dragElement.node.firstChild.getBoundingClientRect().y;
    // the amount that the user has scrolled
    const scroll =
      dragElement.node.parentElement.parentElement.parentElement.parentElement
        .scrollTop;
    const y = winY - 87 + scroll;
    // rounds x coord so user cannot permanantly lose a task
    const x = this.state.x + dragElement.x > -127.5 ? 0 : -255;
    api.appointments.updateAppointmentLocation(
      dragElement.node.firstChild.id,
      x,
      y
    );
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
