import React from "react";
import { Message } from "semantic-ui-react";

const LoginForm = props => {
  return (
    <div
      style={{
        backgroundColor: "#F4FAFF"
      }}
      className="ui raised text container segment"
    >
      <form className="ui form" onSubmit={props.onSubmit}>
        <div>Log In</div>
        <div className="field">
          <label>
            Email Address
            <input
              onChange={props.handleChange}
              style={{ backgroundColor: "#F4FAFF" }}
              type="email"
              name="email"
              placeholder="Email Address"
              value={props.email}
            />
          </label>
        </div>

        <div className="field">
          <label>
            Password
            <input
              onChange={props.handleChange}
              style={{ backgroundColor: "#F4FAFF" }}
              type="password"
              name="password"
              placeholder="Password"
              value={props.password}
            />
          </label>
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
      {props.errorMessage}
    </div>
  );
};

export default LoginForm;
