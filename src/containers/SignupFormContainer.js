import React from "react";
import SignupForm from "../components/SignupForm";
import api from "../services/api";
import { Message } from "semantic-ui-react";

class SignupFormContainer extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password === "" || this.state.email === "") {
      this.setState({
        errorMessage: (
          <Message
            error
            header="Error"
            content="Make sure you fill in your email and password!"
          />
        )
      });
    } else {
      api.users.signup(this.state.email, this.state.password).then(res => {
        if (res.error) {
          this.setState({ error: true });
        } else {
          this.props.handleLogin(res);
          this.props.history.push("/");
        }
      });
    }
  };

  render() {
    return (
      <SignupForm
        email={this.state.email}
        password={this.state.password}
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default SignupFormContainer;
