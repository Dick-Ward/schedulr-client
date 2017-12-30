import React from "react";
import Time from "./Time";
import times from "../dayta";
import moment from "moment";

const DayList = props => {
  const start = times.indexOf(props.startTime);
  const end = times.indexOf(props.endTime);
  const timeSlice = times.slice(start, end + 1);
  const time = timeSlice.map((time, index) => {
    return (
      <tbody key={index}>
        <tr>
          <Time time={time} />
        </tr>
        <tr>
          <td className="center aligned">-- 15 --</td>
        </tr>
        <tr>
          <td className="center aligned">-- 30 --</td>
        </tr>
        <tr>
          <td className="center aligned">-- 45 --</td>
        </tr>
      </tbody>
    );
  });

  return (
    <table
      className="ui attached compact striped inverted table"
      style={{
        border: "solid",
        borderColor: "white",
        borderSize: "1px"
      }}
    >
      <thead>
        <tr className="center aligned">
          <td>{moment().format("dddd, MMMM Do YYYY")}</td>
        </tr>
      </thead>
      {time}
    </table>
  );
};

export default DayList;
