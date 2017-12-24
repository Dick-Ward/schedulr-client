import React, { Component } from "react";
import DayContainer from "./containers/DayContainer";
import appointments from "./data";
import Navbar from "./components/Navbar";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

class App extends Component {
  state = {
    appointments: appointments,
    preference: { startTime: "6:00am", endTime: "10:00pm" }
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
          <Navbar />
        </div>
        <DayContainer
          handleChange={this.handleChange}
          setTimes={this.setTimes}
          createAppointment={this.createAppointment}
          preference={this.state.preference}
          appointments={this.state.appointments}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
