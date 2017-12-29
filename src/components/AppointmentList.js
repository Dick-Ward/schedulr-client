import React from "react";
import Appointment from "./Appointment";

const AppoinmentList = props => {
  const { appointments } = props;
  const appointment = appointments.map((appointment, index) => {
    return (
      <Appointment
        key={index}
        name={appointment.title}
        duration={appointment.duration}
      />
    );
  });
  return <div>{appointment}</div>;
};

export default AppoinmentList;
