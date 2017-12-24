import React from "react";
import times from "../dayta";

const UserPreferenceForm = props => {
  const time = times.map(time => <option value={time}>{time}</option>);

  return (
    <form class="ui form" onSubmit={props.setTime}>
      <div class="field">
        <label>
          Wake Time
          <select
            onChange={props.handleChange}
            class="ui basic dropdown"
            name="startTime"
          >
            <option value="">Select Wakeup Time</option>
            {time}
          </select>
        </label>
      </div>
      <div class="field">
        <label>
          Bed Time
          <select
            onChange={props.handleChange}
            class="ui basic dropdown"
            name="endTime"
          >
            <option value="">Select Bed Time</option>
            {time}
          </select>
        </label>
      </div>
      <div class="field">
        <button class="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserPreferenceForm;
