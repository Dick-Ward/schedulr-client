import React, { Component } from "react";
import DayContainer from "./containers/DayContainer";
import Navbar from "./components/Navbar";
import LoginFormContainer from "./containers/LoginFormContainer";
import SignupFormContainer from "./containers/SignupFormContainer";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "./services/api";

class App extends Component {
  state = {
    preference: { startTime: "6:00am", endTime: "10:00pm" },
    auth: { currentUser: { appointments: [] } }
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = { currentUser: user };
        this.setState({
          auth: currentUser,
          appointments: currentUser.currentUser.appointments
        });
      });
    } else {
      this.props.history.push("/login");
    }
  }
  handleLogin = user => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);
    this.setState({
      auth: currentUser
    });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ appointments: [], auth: { currentUser: {} } });
  };

  createAppointment = appointment => {
    const prevstate = this.state.auth.currentUser.appointments.slice();
    prevstate.push(appointment);
    this.setState({
      auth: { currentUser: { appointments: prevstate } }
    });
  };

  setTimes = times => {
    this.setState({ preference: times });
  };

  render() {
    return (
      <div>
        <div>
          <Navbar
            currentUser={this.state.auth.currentUser}
            handleLogout={this.handleLogout}
          />
        </div>

        <Switch>
          <Route
            path="/login"
            render={routerProps => {
              return (
                <LoginFormContainer
                  {...routerProps}
                  handleLogin={this.handleLogin}
                />
              );
            }}
          />
          <Route
            path="/signup"
            render={routerProps => {
              return (
                <SignupFormContainer
                  {...routerProps}
                  handleLogin={this.handleLogin}
                />
              );
            }}
          />

          <Route
            path="/"
            render={routerProps => {
              return (
                <DayContainer
                  style={{ height: "100vh" }}
                  handleChange={this.handleChange}
                  setTimes={this.setTimes}
                  createAppointment={this.createAppointment}
                  preference={this.state.preference}
                  appointments={this.state.auth.currentUser.appointments}
                  currentUser={this.state.auth.currentUser}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
