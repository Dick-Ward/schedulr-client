import React from "react";

const Appointment = appointment => {
  const height = `${appointment.duration * 3}px`;
  return (
    <div>
      <button
        style={{ width: "150px", height: `${height}` }}
        class="ui orange button"
      >
        {appointment.name}
      </button>
    </div>
  );
};

export default Appointment;
