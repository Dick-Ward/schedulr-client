import React from "react";
import Draggable from "react-draggable";
import { Button, Form, Header, Icon, Modal } from "semantic-ui-react";

const Appointment = props => {
  const height = `${props.duration * 2.2}px`;

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
            <Form>
              <Form.Field>
                <label>Title</label>
                <input placeholder="Title" />
              </Form.Field>
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </Form.Field>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    </Draggable>
  );
};

export default Appointment;
