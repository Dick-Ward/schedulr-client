import React from "react";
import { DragSource } from "react-dnd";
import ItemTypes from "../ItemTypes";

const Appointment = ({ connectDragSource, children, ...appointment }) => {
  const height = `${appointment.duration * 2.2}px`;
  return connectDragSource(
    <div>
      <button
        style={{
          color: "#F4FAFF",
          margin: "1px",
          width: "150px",
          height: `${height}`
        }}
        class="ui orange button"
        id={appointment.id}
      >
        {appointment.name}
      </button>
    </div>
  );
};
const appointmentSource = {
  beginDrag(props) {
    return { appointmentID: props.id };
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource(ItemTypes.APPOINTMENT, appointmentSource, collect)(
  Appointment
);
