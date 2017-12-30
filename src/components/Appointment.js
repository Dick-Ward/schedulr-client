import React from "react";
import Draggable from "react-draggable";

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
      </div>
    </Draggable>
  );
};

export default Appointment;
