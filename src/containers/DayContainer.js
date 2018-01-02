import React from "react";
import DayGrid from "../components/DayGrid";
import AppointmentFormContainer from "./AppointmentFormContainer";
import UserPreferenceFormContainer from "./UserPreferenceFormContainer";
import { Button, Modal } from "semantic-ui-react";

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
        <Modal size="tiny" open={this.props.modalOpen}>
          <Modal.Header>Did you know?</Modal.Header>
          <Modal.Content>
            <a
              onClick={this.props.handleClose}
              className="ui right corner label"
            >
              <i onClick={this.props.handleClose} className="delete icon" />
            </a>
            Hi there! Did you know you can double click on an appointment to
            edit it? You can!
          </Modal.Content>
        </Modal>
        <div className="twelve wide column">
          <DayGrid
            handleClick={this.handleClick}
            currentUser={this.props.currentUser}
            handleDelete={this.props.handleDelete}
            quote={this.props.quote}
            editModalOpen={this.props.editModalOpen}
            handleDoubleClick={this.props.handleDoubleClick}
          />
        </div>
        <div className="four wide column">
          <div className="ui column grid container">
            <Button
              style={{ marginTop: "1px", marginLeft: "1px", width: "200px" }}
              id="newAppointment"
              onClick={this.handleClick}
            >
              Create New Task
            </Button>

            <Button
              style={{ marginTop: "1px", marginLeft: "1px", width: "200px" }}
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
