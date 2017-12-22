import React from "react";

const AppointmentForm = props => {
  return (
    <form onSubmit={props.handleSubmit} class="ui form">
      <div class="field">
        <label>
          Task Name
          <input
            onChange={props.handleChange}
            type="text"
            name="name"
            value={props.name}
          />
        </label>
      </div>
      <div class="field">
        <label>
          Duration
          <select
            onChange={props.handleChange}
            class="ui search dropdown"
            name="duration"
          >
            <option value="">Select Duration</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
            <option value="75">75 minutes</option>
            <option value="90">90 minutes</option>
            <option value="105">105 minutes</option>
            <option value="120">120 minutes</option>
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

export default AppointmentForm;
