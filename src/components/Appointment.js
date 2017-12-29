import React from "react";
import Draggable, { DraggableCore } from "react-draggable";

const Appointment = appointment => {
  const height = `${appointment.duration * 2.2}px`;
  const handleStop = (e, f) => {
    console.log(f.x, f.y);
  };
  const handleDoubleClick = () => {
    console.log("double clicked!");
  };
  return (
    <Draggable
      onDrag={handleStop}
      grid={[255, 33.75]}
      defaultPosition={{ x: 0, y: 48 }}
    >
      <div>
        <button
          onDoubleClick={handleDoubleClick}
          style={{
            color: "#F4FAFF",
            margin: "1px",
            width: "150px",
            height: `${height}`
          }}
          class="ui orange button"
        >
          {appointment.name}
        </button>
      </div>
    </Draggable>
  );
};

export default Appointment;
