import React from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

const AppointmentForm = props => {
  const times = [15, 30, 45, 60, 75, 90, 105, 120];
  const timeMap = times.map(time => {
    return { text: `${time} minutes`, value: `${time}` };
  });
  const difficulties = ["Easy", "Normal", "Difficult"];
  const difficultyMap = difficulties.map(difficulty => {
    return { text: `${difficulty}`, value: `${difficulty}` };
  });

  return (
    <Form error onSubmit={props.handleSubmit}>
      <div className="field">
        <label
          style={{
            color: "#F4FAFF"
          }}
        >
          Task Name
          <input
            onChange={props.handleChange}
            type="text"
            name="name"
            value={props.name}
          />
        </label>
      </div>
      <div className="field">
        <label style={{ color: "#F4FAFF" }}>Duration</label>
        <Dropdown
          placeholder="Select a Duration"
          selection
          options={timeMap}
          onChange={props.handleSelect}
          name="duration"
          value={props.duration}
        />
        <div className="field">
          <br />
          <label style={{ color: "#F4FAFF" }}>Difficulty</label>
          <Dropdown
            selection
            options={difficultyMap}
            onChange={props.handleSelect}
            name="difficulty"
            value={props.difficulty}
          />
        </div>
      </div>
      <div className="field">
        <Button type="submit">Submit</Button>
      </div>
      {props.errorMessage}
    </Form>
  );
};

export default AppointmentForm;
