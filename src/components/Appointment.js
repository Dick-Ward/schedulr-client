import React from "react";
import Draggable from "react-draggable";
import { Button } from "semantic-ui-react";
import EditModal from "./EditModal";

const Appointment = props => {
  const height = `${props.duration * 2.2}px`;

  return (
    <Draggable
      onStop={props.handleStop}
      bounds={{
        left: props.leftBounds,
        right: props.rightBounds,
        top: props.topBounds
      }}
      grid={[255, 33.75]}
      id={props.id}
    >
      <div
        id={props.id}
        style={{
          position: "absolute",
          top: `${props.y}px`,
          left: `${props.x}px`
        }}
      >
        <Button
          className={props.difficulty}
          onDoubleClick={props.buttonDoubleClick}
          id={props.id}
          style={{
            margin: "1px",
            width: "150px",
            height: `${height}`
          }}
        >
          {props.name}
        </Button>

        <EditModal
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
          handleSelect={props.handleSelect}
          handleDelete={props.handleDelete}
          handleClose={props.handleClose}
          id={props.id}
          name={props.name}
          duration={props.duration}
          difficulty={props.difficulty}
          modalOpen={props.modalOpen}
          modalClose={props.modalClose}
        />
      </div>
    </Draggable>
  );
};

export default Appointment;
