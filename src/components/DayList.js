import React from "react";
import Time from "./Time";
import times from "../dayta";

const DayList = props => {
  const moment = require("moment");
  const start = times.indexOf(props.startTime);
  const end = times.indexOf(props.endTime);
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

  return (
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
};

export default DayList;
