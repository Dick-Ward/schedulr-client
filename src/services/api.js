const API_ROOT = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
  Acccepts: "application/json"
};

const getAppointments = () => {
  return fetch(`${API_ROOT}/appointments/`, { headers: headers }).then(res =>
    res.json()
  );
};

const login = (email, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
};

const signup = (email, password) => {
  return fetch(`${API_ROOT}/users/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password })
  }).then(res => res.json());
};

export default {
  auth: {
    login
  },
  users: {
    signup
  },
  appointments: {
    getAppointments
  }
};
