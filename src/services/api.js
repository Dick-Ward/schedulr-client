const API_ROOT = "https://vast-ridge-63077.herokuapp.com";
// https://vast-ridge-63077.herokuapp.com
const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Acccepts: "application/json",
  Authorization: token
};

const login = (email, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user/`, {
    headers: headers
  }).then(res => res.json());
};

const signup = (email, password) => {
  return fetch(`${API_ROOT}/users/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
};

const update = (id, startTime, endTime) => {
  return fetch(`${API_ROOT}/users/${id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ startTime, endTime })
  }).then(res => res.json());
};

const newAppointment = (title, duration, user_id, difficulty) => {
  return fetch(`${API_ROOT}/appointments/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      appointment: { title, duration, user_id, difficulty }
    })
  }).then(res => res.json());
};

const updateAppointmentLocation = (id, x, y) => {
  return fetch(`${API_ROOT}/appointments/${id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ x, y })
  }).then(res => res.json());
};
const updateAppointment = (id, title, duration, difficulty) => {
  return fetch(`${API_ROOT}/appointments/${id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({ title, duration, difficulty })
  }).then(res => res.json());
};

const deleteAppointment = id => {
  return fetch(`${API_ROOT}/appointments/${id}`, {
    method: "DELETE",
    headers: headers
  });
};

export default {
  auth: {
    login,
    getCurrentUser
  },
  users: {
    signup,
    update
  },
  appointments: {
    newAppointment,
    updateAppointmentLocation,
    updateAppointment,
    deleteAppointment
  }
};
