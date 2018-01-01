import React, { Component } from "react";
import DayContainer from "./containers/DayContainer";
import Navbar from "./components/Navbar";
import LoginFormContainer from "./containers/LoginFormContainer";
import SignupFormContainer from "./containers/SignupFormContainer";
import { Route, Switch, withRouter } from "react-router-dom";
import api from "./services/api";
import quotes from "./quotes";

class App extends Component {
  state = {
    auth: {
      currentUser: {
        appointments: [],
        start_time: "6:00am",
        end_time: "10:00pm"
      }
    },
    quote: "",
    modalOpen: false
  };

  quote = () => {
    return quotes[Math.round(Math.random() * 9)];
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const currentUser = { currentUser: user };
        this.setState({
          auth: currentUser,
          quote: this.quote()
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
    this.setState({ auth: { currentUser: {} } });
  };

  createAppointment = appointment => {
    const prevstate = this.state.auth.currentUser.appointments.slice();
    prevstate.push(appointment);
    this.setState({
      auth: {
        currentUser: { ...this.state.auth.currentUser, appointments: prevstate }
      }
    });

    if (prevstate.length === 1) {
      console.log("it was");
      this.setState({ modalOpen: true });
    }
  };

  handleDelete = id => {
    const prevState = this.state.auth.currentUser.appointments.slice();
    const newState = prevState.filter(a => a.id.toString() !== id);
    this.setState({
      auth: {
        currentUser: {
          ...this.state.auth.currentUser,
          appointments: newState
        }
      }
    });
  };

  setTimes = time => {
    api.users.update(
      this.state.auth.currentUser.id,
      time.startTime,
      time.endTime
    );
    this.setState({
      auth: {
        currentUser: {
          ...this.state.auth.currentUser,
          start_time: time.startTime,
          end_time: time.endTime
        }
      }
    });
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
                  currentUser={this.state.auth.currentUser}
                  handleDelete={this.handleDelete}
                  quote={this.state.quote}
                  modalOpen={this.state.modalOpen}
                  handleClose={this.handleClose}
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
