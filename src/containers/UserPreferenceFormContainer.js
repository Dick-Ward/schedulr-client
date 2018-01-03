import React from "react";
import UserPreferenceForm from "../components/UserPreferenceForm";

class UserPreferenceFormContainer extends React.Component {
  state = {
    startTime: "6:00am",
    endTime: "10:00pm"
  };

  handleChange = (e, value) => {
    this.setState({ [value.name]: value.value });
  };
  setTime = event => {
    event.preventDefault();
    const startTime = this.state.startTime;
    const endTime = this.state.endTime;
    this.props.setTimes({ startTime, endTime });
    this.props.handleClose();
  };
  render() {
    console.log(this.props.currentUser);
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
        <UserPreferenceForm
          setTime={this.setTime}
          handleChange={this.handleChange}
          startTime={this.props.currentUser.start_time}
          endTime={this.props.currentUser.end_time}
        />
      </div>
    );
  }
}

export default UserPreferenceFormContainer;
