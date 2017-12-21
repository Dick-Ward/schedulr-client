import React, { Component } from "react";
import DayContainer from "./containers/DayContainer";
import appointments from "./data";
import times from "./dayta";

class App extends Component {
  state = {
    appointments: appointments,
    times: times
  };
  render() {
    return (
      <div>
        <DayContainer
          times={this.state.times}
          appointments={this.state.appointments}
        />
      </div>
    );
  }
}

export default App;
