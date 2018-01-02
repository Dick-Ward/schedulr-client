import React from "react";
import Time from "./Time";
import timeList from "../timeList";
import { Table } from "semantic-ui-react";

const DayList = props => {
  const start = timeList.indexOf(props.startTime);
  const end = timeList.indexOf(props.endTime);
  const timeSlice = timeList.slice(start, end + 1);
  const time = timeSlice.map((time, index) => {
    return (
      <tbody key={index}>
        <tr>
          <Time time={time} />
        </tr>
        <tr>
          <td className="left aligned"> &nbsp; :15</td>
        </tr>
        <tr>
          <td className="left aligned"> &nbsp; :30</td>
        </tr>
        <tr>
          <td className="left aligned"> &nbsp; :45</td>
        </tr>
      </tbody>
    );
  });

  return (
    <Table
      compact
      striped
      inverted
      style={{
        border: "solid",
        borderColor: "white",
        borderSize: "1px"
      }}
    >
      <thead>
        <tr className="center aligned" />
      </thead>
      {time}
    </Table>
  );
};

export default DayList;
