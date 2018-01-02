import React from "react";
import timeList from "../timeList";
import { Dropdown } from "semantic-ui-react";

const UserPreferenceForm = props => {
  const timeMap = timeList.map(time => {
    return { text: `${time}`, value: `${time}` };
  });

  return (
    <form className="ui form" onSubmit={props.setTime}>
      <div className="field">
        <label style={{ color: "#F4FAFF" }}>
          Wake Time: <br />
          <Dropdown
            selection
            placeholder="Select a Wake Time"
            onChange={props.handleChange}
            name="startTime"
            options={timeMap}
            value={props.startTime}
          />
        </label>
      </div>
      <div className="field">
        <label style={{ color: "#F4FAFF" }}>
          Bed Time: <br />
          <Dropdown
            selection
            placeholder="Select a Bed Time"
            onChange={props.handleChange}
            name="endTime"
            options={timeMap}
            value={props.endTime}
          />
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
