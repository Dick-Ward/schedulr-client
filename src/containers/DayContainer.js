import React from "react";
import DayGrid from "../components/DayGrid";

class DayContainer extends React.Component {
  render() {
    return (
      <div class="ui very padded text container">
        <DayGrid />
      </div>
    );
  }
}

export default DayContainer;
