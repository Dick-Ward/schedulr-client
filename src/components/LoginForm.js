import React from "react";

const LoginForm = () => {
  return (
    <div
      style={{ backgroundColor: "#F4FAFF" }}
      class="ui raised text container segment"
    >
      <form class="ui equal width form">
        <div class="two fields">
          <div class="field">
            <label>First Name</label>
            <input
              style={{ backgroundColor: "#F4FAFF" }}
              type="text"
              name="first-name"
              placeholder="First Name"
            />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input
              style={{ backgroundColor: "#F4FAFF" }}
              type="text"
              name="last-name"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label>Password</label>
            <input
              style={{ backgroundColor: "#F4FAFF" }}
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
