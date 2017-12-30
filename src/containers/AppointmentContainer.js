import React from "react";
import Appointment from "../components/Appointment";
import api from "../services/api";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class AppointmentContainer extends React.Component {
  state = {
    x: 0,
    y: 67.5,
    modalOpen: false
  };

  componentDidMount() {
    this.setState({ x: this.props.x, y: this.props.y });
  }
  handleStop = (e, f) => {
    const y = Math.round(f.y / 33.75) * 33.75;
    const x = Math.round(f.x / 255) * 255;
    api.appointments
      .updateAppointmentLocation(f.node.firstChild.id, x, y)
      .then(res => console.log(res));
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
        name={this.props.name}
        id={this.props.id}
        x={this.state.x}
        y={this.state.y}
        duration={this.props.duration}
        modalOpen={this.state.modalOpen}
      />
    );
  }
}

export default AppointmentContainer;
