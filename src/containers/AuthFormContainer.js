import React from "react";
import AuthForm from "../components/AuthForm";
import { Message } from "semantic-ui-react";

class AuthFormContainer extends React.Component {
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
      this.props.apiCall(this.state.email, this.state.password).then(res => {
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
      <AuthForm
        name={this.props.name}
        email={this.state.email}
        password={this.state.password}
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default AuthFormContainer;
