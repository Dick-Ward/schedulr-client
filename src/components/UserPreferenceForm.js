import React from "react";
import times from "../dayta";

const UserPreferenceForm = props => {
  const time = times.map((time, index) => (
    <option key={index} value={time}>
      {time}
    </option>
  ));

  return (
    <form className="ui form" onSubmit={props.setTime}>
      <div className="field">
        <label style={{ color: "#F4FAFF" }}>
          Wake Time
          <select
            onChange={props.handleChange}
            className="ui basic dropdown"
            name="startTime"
          >
            <option value="">Select Wakeup Time</option>
            {time}
          </select>
        </label>
      </div>
      <div className="field">
        <label style={{ color: "#F4FAFF" }}>
          Bed Time
          <select
            onChange={props.handleChange}
            className="ui basic dropdown"
            name="endTime"
          >
            <option value="">Select Bed Time</option>
            {time}
          </select>
        </label>
      </div>
      <div className="field">
        <button className="ui button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserPreferenceForm;
