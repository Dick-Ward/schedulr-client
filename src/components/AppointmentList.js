import React from "react";
import Appointment from "./Appointment";

const AppoinmentList = props => {
  const { appointments } = props;
  const appointment = appointments.map(appointment => {
    return (
      <Appointment name={appointment.name} duration={appointment.duration} />
    );
  });
  return <div>{appointment}</div>;
};

export default AppoinmentList;
