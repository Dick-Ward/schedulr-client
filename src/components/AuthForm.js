import React from "react";

const AuthForm = props => {
  return (
    <div
      style={{
        backgroundColor: "#F4FAFF"
      }}
      className="ui raised text container segment"
    >
      <form className="ui form" onSubmit={props.onSubmit}>
        <div>{props.name}</div>
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

export default AuthForm;
