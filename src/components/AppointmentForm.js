import React from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

const AppointmentForm = props => {
  const times = [15, 30, 45, 60, 75, 90, 105, 120];
  const timeMap = times.map(time => {
    return { text: `${time} minutes`, value: `${time}` };
  });
  return (
    <Form onSubmit={props.handleSubmit}>
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
        />
      </div>
      <div className="field">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default AppointmentForm;
