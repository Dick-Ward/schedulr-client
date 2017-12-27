let appointmentPosition = "1";
let observer = null;

export function observe(o) {
  observer = o;
  observer(appointmentPosition);
}

export function moveAppointment(time) {
  appointmentPosition = time;
  observer(appointmentPosition);
}
