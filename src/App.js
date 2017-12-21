import React, { Component } from "react";
import DayContainer from "./containers/DayContainer";
import Appointment from "./components/Appointment";

class App extends Component {
  render() {
    return (
      <div>
        <DayContainer />
        <Appointment />
      </div>
    );
  }
}

export default App;
