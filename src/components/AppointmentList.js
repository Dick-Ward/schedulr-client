import React from "react";
import AppointmentContainer from "../containers/AppointmentContainer";

const AppoinmentList = props => {
  const { appointments } = props;
  const appointment = appointments.map((appointment, index) => {
    return (
      <AppointmentContainer
        key={index}
        id={appointment.id}
        name={appointment.title}
        duration={appointment.duration}
        x={appointment.x}
        y={appointment.y}
        difficulty={appointment.difficulty}
        handleDelete={props.handleDelete}
        editModalOpen={props.editModalOpen}
        handleDoubleClick={props.handleDoubleClick}
      />
    );
  });
  return <div>{appointment}</div>;
};

export default AppoinmentList;
