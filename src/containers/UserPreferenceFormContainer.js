import React from "react";
import UserPreferenceForm from "../components/UserPreferenceForm";

class UserPreferenceFormContainer extends React.Component {
  state = {
    startTime: "6:00am",
    endTime: "10:00pm"
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  setTime = event => {
    event.preventDefault();
    const startTime = this.state.startTime;
    const endTime = this.state.endTime;
    this.props.setTimes({ startTime, endTime });
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
        <UserPreferenceForm
          setTime={this.setTime}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default UserPreferenceFormContainer;
