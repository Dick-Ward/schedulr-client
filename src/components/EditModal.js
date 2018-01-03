import React from "react";
import { Form, Dropdown, Modal } from "semantic-ui-react";

const EditModal = props => {
  const times = [15, 30, 45, 60, 75, 90, 105, 120];
  const timeMap = times.map(time => {
    return { text: `${time} minutes`, value: `${time}` };
  });
  const difficulties = ["Easy", "Normal", "Difficult"];
  const difficultyMap = difficulties.map(difficulty => {
    return { text: `${difficulty}`, value: `${difficulty}` };
  });

  return (
    <div>
      <Modal size="tiny" open={props.modalOpen}>
        <Modal.Header>Edit Task</Modal.Header>
        <Modal.Content>
          <a onClick={props.handleClose} className="ui right corner label">
            <i onClick={props.handleClose} className="delete icon" />
          </a>
          <Form id={props.id} onSubmit={props.handleSubmit}>
            <div className="field">
              <label
                style={{
                  color: "#F4FAFF"
                }}
              >
                Task Name
                <input
                  onChange={props.handleChange}
                  type="text"
                  name="name"
                  value={props.name}
                />
              </label>
            </div>
            <div className="field">
              <label style={{ color: "#F4FAFF" }}>Duration</label>
              <Dropdown
                placeholder="Select a Duration"
                selection
                options={timeMap}
                onChange={props.handleSelect}
                name="duration"
                value={props.duration}
              />
            </div>
            <div className="field">
              <label style={{ color: "#F4FAFF" }}>Difficulty</label>
              <Dropdown
                placeholder="Difficulty"
                selection
                options={difficultyMap}
                onChange={props.handleSelect}
                name="difficulty"
                value={props.difficulty}
              />
            </div>
            <div className="field">
              <button
                type="button"
                id={props.id}
                onClick={props.handleDelete}
                className="ui negative button"
              >
                Delete
              </button>
              <button className="ui button" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default EditModal;
