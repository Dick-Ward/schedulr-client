import React from "react";
import Draggable from "react-draggable";
import { Button, Form, Header, Dropdown, Modal } from "semantic-ui-react";
import AppointmentForm from "./AppointmentForm";

const Appointment = props => {
  const height = `${props.duration * 2.2}px`;
  const times = [15, 30, 45, 60, 75, 90, 105, 120];
  const timeMap = times.map(time => {
    return { text: `${time} minutes`, value: `${time}` };
  });

  return (
    <Draggable
      onStop={props.handleStop}
      grid={[255, 33.75]}
      position={{ x: props.x, y: props.y }}
    >
      <div>
        <button
          onDoubleClick={props.handleDoubleClick}
          id={props.id}
          style={{
            color: "#F4FAFF",
            margin: "1px",
            width: "150px",
            height: `${height}`
          }}
          className="ui orange button"
        >
          {props.name}
        </button>
        <Modal size="tiny" open={props.modalOpen}>
          <Modal.Header>Edit Appointment</Modal.Header>
          <Modal.Content>
            <Form id={props.id} onSubmit={props.handleSubmit}>
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

                <Button
                  id={props.id}
                  onClick={props.handleDelete}
                  negative
                  floated="right"
                >
                  Delete
                </Button>
              </div>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    </Draggable>
  );
};

export default Appointment;
