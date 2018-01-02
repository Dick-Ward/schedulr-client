import React from "react";
import LoginSignupForm from "../components/LoginSignupForm";
import api from "../services/api";
import { Message } from "semantic-ui-react";

class LoginFormContainer extends React.Component {
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
      api.auth.login(this.state.email, this.state.password).then(res => {
        if (res.error) {
          this.setState({
            errorMessage: <Message error header="Error" content={res.error} />
          });
        } else {
          this.props.handleLogin(res);
          this.props.history.push("/");
        }
      });
    }
  };

  render() {
    return (
      <LoginSignupForm
        name="Log In"
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        email={this.state.email}
        password={this.state.password}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default LoginFormContainer;
