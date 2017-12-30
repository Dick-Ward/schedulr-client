import React from "react";
import Draggable from "react-draggable";

class Appointment extends React.Component {
  state = {
    x: 0,
    y: 67.5
  };
  render() {
    const height = `${this.props.duration * 2.2}px`;
    const handleStop = (e, f) => {
      this.setState({ x: f.x, y: f.y });
      console.log(f.x, f.y);
    };
    const handleDoubleClick = () => {
      console.log("double clicked!");
    };
    return (
      <Draggable
        onDrag={handleStop}
        grid={[255, 33.75]}
        position={{ x: this.state.x, y: this.state.y }}
      >
        <div>
          <button
            onDoubleClick={handleDoubleClick}
            style={{
              color: "#F4FAFF",
              margin: "1px",
              width: "150px",
              height: `${height}`
            }}
            className="ui orange button"
          >
            {this.props.name}
          </button>
        </div>
      </Draggable>
    );
  }
}

export default Appointment;
