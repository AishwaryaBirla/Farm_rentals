/** @format */

import React, { Component } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { FormGroup, Label, Input, Form, FormText, Button } from "reactstrap";
import axios from "axios";
//import DatePicker from 'react-datepicker';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRegistrationType = this.onChangeRegistrationType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user: "",
      password: "",
      registrationType: "Farmer",
    };
  }

  onChangeUser(e) {
    this.setState({
      user: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeRegistrationType(e) {
    this.setState({
      registrationType: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const login = {
      user: this.state.user,
      password: this.state.password,
      registrationType: this.state.registrationType,
    };

    console.log(login);

    axios
      .post("http://localhost:5000/login/login", login)
      .then((response) => {
        console.log(response);
        window.location='/';
      })
      .catch((err) => {
        console.log(err);
      });
    //console.log(response);
  }

  render() {
    return (
      <>
        <div className="register_background">
          <Form className="register_us" onSubmit={this.onSubmit}>
            <h3 className="text-center">Login</h3>

            <FormGroup>
              <Label for="name">Phone number or Email</Label>
              <Input
                id="name"
                name="user"
                placeholder="Enter phone number or email "
                type="text"
                //value={this.state.fullname}
                onChange={this.onChangeUser}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Enter Password"
                type="password"
                //value={this.state.password}
                onChange={this.onChangePassword}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Registration type</Label>
              <Input
                id="exampleSelect"
                name="registrationType"
                type="select"
                value={this.state.registrationType}
                onChange={this.onChangeRegistrationType}
              >
                <option>Farmer</option>
                <option>Lessor</option>
              </Input>
            </FormGroup>

            <input
              type="submit"
              value="Login"
              className="btn btn-primary"
              onSubmit={this.onSubmit}
            />
          </Form>
        </div>
      </>
    );
  }
}