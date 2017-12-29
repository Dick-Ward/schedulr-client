import React from "react";
import SignupForm from "../components/SignupForm";
import api from "../services/api";

class SignupFormContainer extends React.Component {
  state = {
    email: "",
    password: "",
    error: false
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.users.signup(this.state.email, this.state.password).then(res => {
      if (res.error) {
        this.setState({ error: true });
      } else {
        this.props.handleLogin(res);
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <SignupForm
        email={this.state.email}
        password={this.state.password}
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

export default SignupFormContainer;
