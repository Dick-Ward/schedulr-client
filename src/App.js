import React, { Component } from "react";
import DayContainer from "./containers/DayContainer";
import appointments from "./data";
import times from "./dayta";

class App extends Component {
  state = {
    appointments: appointments,
    times: times
  };

  createAppointment = appointment => {
    const prevstate = this.state.appointments.slice();
    prevstate.push(appointment);
    this.setState({
      appointments: prevstate
    });

    console.log(this.state.appointments);
  };

  render() {
    return (
      <div>
        <DayContainer
          createAppointment={this.createAppointment}
          times={this.state.times}
          appointments={this.state.appointments}
        />
      </div>
    );
  }
}

export default App;
