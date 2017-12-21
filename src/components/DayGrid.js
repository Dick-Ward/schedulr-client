import React from "react";

const DayGrid = () => {
  return (
    <div
      style={{
        height: "600px",
        width: "400px",
        overflowY: "scroll",
        overflowX: "hidden"
      }}
    >
      <div class="ui top attached three item inverted menu">
        <a class="item">&lt; Back</a>
        <a class="item">Today</a>
        <a class="item">Forward ></a>
      </div>
      <table class="ui attached compact striped inverted table">
        <thead>
          <th class="center aligned">Thursday, December 20th</th>
        </thead>
        <tbody>
          <tr>
            <td class="left aligned">6:00am</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">7:00am</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">8:00am</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">9:00am</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">10:00am</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">11:00am</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">12:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">1:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">2:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">3:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">4:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">5:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">6:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">7:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">8:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">9:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
          <tr>
            <td class="left aligned">10:00pm</td>
          </tr>
          <tr>
            <td class="center aligned">-----</td>
          </tr>
        </tbody>
      </table>
      <div class="ui bottom attached inverted segment">Do I need this?</div>
    </div>
  );
};

export default DayGrid;
