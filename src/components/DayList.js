import React from "react";
import Time from "./Time";
import times from "../dayta";
import { DropTarget } from "react-dnd";
import ItemTypes from "../ItemTypes";
import { moveAppointment } from "../Observer";

const dayTarget = {
  drop: function(props, monitor) {
    console.log(props);
    moveAppointment(props);
  }
};
function collect(connect, monitor) {
  // console.log(monitor);
  return {
    connectDropTarget: connect.dropTarget()
  };
}
class DayList extends React.Component {
  render() {
    const { connectDropTarget } = this.props;
    const moment = require("moment");
    const start = times.indexOf(this.props.startTime);
    const end = times.indexOf(this.props.endTime);
    const timeSlice = times.slice(start, end + 1);
    const time = timeSlice.map(time => {
      return (
        <tbody>
          <tr>
            <Time time={time} />
          </tr>
          <tr>
            <td class="center aligned">-- 15 --</td>
          </tr>
          <tr>
            <td class="center aligned">-- 30 --</td>
          </tr>
          <tr>
            <td class="center aligned">-- 45 --</td>
          </tr>
        </tbody>
      );
    });
    return connectDropTarget(
      <table
        class="ui attached compact striped inverted table"
        style={{
          border: "solid",
          borderColor: "white",
          borderSize: "1px"
        }}
      >
        <thead>
          <th class="center aligned">{moment().format("dddd, MMMM Do")}</th>
        </thead>
        {time}
      </table>
    );
  }
}

export default DropTarget(
  ItemTypes.APPOINTMENT,
  dayTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  })
)(DayList);
