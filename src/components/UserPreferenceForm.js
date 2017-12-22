import React from "react";
import times from "../dayta";

const UserPreferenceForm = props => {
  const time = times.map(time => <option value={time}>{time}</option>);

  return (
    <form class="ui form" onSubmit={props.setTime}>
      <div class="two fields">
        <div class="field">
          <label>Wake Time</label>
          <select
            onChange={props.handleChange}
            class="ui basic dropdown"
            name="startTime"
          >
            <option value="">Select Wakeup Time</option>
            {time}
          </select>
        </div>
        <div class="field">
          <label>Bed Time</label>
          <select
            onChange={props.handleChange}
            class="ui basic dropdown"
            name="endTime"
          >
            <option value="">Select Bed Time</option>
            {time}
          </select>
        </div>
        <div class="field">
          <button class="ui button" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserPreferenceForm;
