import React from "react";
import Time from "./Time";

const DayList = props => {
  const { times } = props;
  const time = times.map(time => {
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
    <table class="ui attached compact striped inverted table">
      <thead>
        <th class="center aligned">Thursday, December 20th</th>
      </thead>
      {time}
    </table>
  );
};

export default DayList;
