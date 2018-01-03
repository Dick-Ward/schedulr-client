import React from "react";
import AppointmentContainer from "../containers/AppointmentContainer";

const AppoinmentList = props => {
  const { appointments } = props;
  const appointment = appointments.map(appointment => {
    return (
      <AppointmentContainer
        key={appointment.id}
        id={appointment.id}
        name={appointment.title}
        duration={appointment.duration}
        x={appointment.x}
        y={appointment.y}
        difficulty={appointment.difficulty}
        handleDelete={props.handleDelete}
        activeModal={props.activeModal}
        handleDoubleClick={props.handleDoubleClick}
        modalClose={props.modalClose}
      />
    );
  });
  return <div>{appointment}</div>;
};

export default AppoinmentList;
