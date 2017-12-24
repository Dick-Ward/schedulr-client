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
      <div class="ui raised segment" style={{ backgroundColor: "#404E5C" }}>
        <UserPreferenceForm
          setTime={this.setTime}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default UserPreferenceFormContainer;
