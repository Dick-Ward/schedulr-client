import React from "react";
import Appointment from "../components/Appointment";
import api from "../services/api";

class AppointmentContainer extends React.Component {
  state = {
    x: 0,
    y: 0,
    name: "",
    duration: "",
    difficulty: "normal",
    modalOpen: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Since dropdowns work differently in Semantic, I need to use a separate handleSelect
  handleSelect = (e, value) => {
    this.setState({ [value.name]: value.value });
  };

  componentDidMount() {
    this.setState({
      x: this.props.x,
      y: this.props.y,
      name: this.props.name,
      duration: this.props.duration,
      difficulty: this.props.difficulty,
      modalOpen: this.props.handleEscape
    });
  }

  handleDoubleClick = () => {
    this.setState({ modalOpen: true });
  };
  handleSubmit = e => {
    api.appointments.updateAppointment(
      e.target.id,
      this.state.name,
      this.state.duration,
      this.state.difficulty
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

  handleClose = () => {
    this.setState({
      name: this.props.name,
      duration: this.props.duration,
      difficulty: this.props.difficulty,
      modalOpen: false
    });
  };

  onDelete = event => {
    this.setState({ modalOpen: false });

    this.props.handleDelete(event.target.id);
  };

  render() {
    // right and left bounds make sure users can't move tasks off the board
    const leftBounds = this.state.x === -0 ? -255 : 0;
    const rightBounds = this.state.x === -255 ? 255 : 0;
    const topBounds = -this.state.y + 16;
    return (
      <Appointment
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
        handleDelete={this.onDelete}
        handleClose={this.handleClose}
        leftBounds={leftBounds}
        rightBounds={rightBounds}
        topBounds={topBounds}
        difficulty={this.state.difficulty}
        activeModal={this.props.activeModal}
        buttonDoubleClick={this.handleDoubleClick}
        modalClose={this.props.modalClose}
      />
    );
  }
}

export default AppointmentContainer;
