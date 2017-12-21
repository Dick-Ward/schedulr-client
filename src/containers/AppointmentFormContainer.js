import React from "react";

class AppointmentFormContainer extends React.Component {
  render() {
    return (
      <div class="ui form">
        <div class="field">
          <label>
            Task Name <input type="text" name="name" />
          </label>
        </div>
        <div class="field">
          <label>Duration</label>
          <select class="ui search dropdown">
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
            <option value="60">75 minutes</option>
            <option value="60">90 minutes</option>
            <option value="60">105 minutes</option>
            <option value="60">120 minutes</option>
          </select>
        </div>
      </div>
    );
  }
}

export default AppointmentFormContainer;
