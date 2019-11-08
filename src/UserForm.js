import React, { Component } from 'react';


class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangeEmail(e) {
    var val = e.target.value;
    this.setState({ email: val });
    console.log(val);
  }
  onChangePassword(e) {
    var password = e.target.value;
    this.setState({ password: password });
  }

  handleSubmit(e) {
    e.preventDefault();
    if ((this.state.email === 'vova') && (this.state.password === 'pass')) {

    }
  }

  render() {
    return (
      <div className="add-form">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label >Email:</label><br />
            <input type="text" value={this.state.email} onChange={this.onChangeEmail} />
          </p>
          <p>
            <label>Passw:</label><br />
            <input type="text" value={this.state.password} onChange={this.onChangePassword} />
          </p>
          <input type="submit" value="Sign in" />
        </form>
      </div>
    );
  }
}

export default UserForm