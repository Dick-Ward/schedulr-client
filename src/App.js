import React, { Component } from "react";
import DayContainer from "./containers/DayContainer";
import appointments from "./data";
import Navbar from "./components/Navbar";
import LoginFormContainer from "./containers/LoginFormContainer";
import SignupFormContainer from "./containers/SignupFormContainer";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    appointments: appointments,
    preference: { startTime: "6:00am", endTime: "10:00pm" },
    auth: { currentUser: {} }
  };
  handleLogin = user => {
    const currentUser = { currentUser: user };
    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    this.setState({ auth: { currentUser: {} } });
  };

  createAppointment = appointment => {
    const prevstate = this.state.appointments.slice();
    prevstate.push(appointment);
    this.setState({
      appointments: prevstate
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
                  appointments={this.state.appointments}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
