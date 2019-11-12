import React, { useState } from 'react';
import "./signin.css";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import { useAuth } from "../../context/auth";
import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";
import Signup from '../signup/signup';

function AuthForm() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();


  function submitSignIn() {
    console.log("Sign in");
    axios.post("http://localhost:8080/auth/signin", {
      "username": userName,
      "password": password
    }).then(result => {
      if (result.status === 200) {
        console.log(2)
        setAuthTokens(result.data);
        setLoggedIn(true);
        console.log("Success");
      } else {
        console.log(3)
        setIsError(true);
        console.log(result);
      }
    }).catch(e => {
      console.log(4)
      setIsError(true);
      console.log("Catch er");
    });
  }

  // if (isLoggedIn) {
  //   return <Redirect to="/tasks" />;
  //   console.log("Redirectto");
  // }


  function submitSignUp() {
    return <Redirect to="/signup" />;
  }

  return (
    
    <div className="add-form">
      <form>

        <FormGroup controlId="email">
          <FormControl
            className='email' placeholder="Email" type="email"
            value={userName}
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
        </FormGroup>

        <FormGroup controlId="password">
          <FormControl
            className='password' placeholder="Password" type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }} />
        </FormGroup>

        <Button className='button' block type="submit" onClick={submitSignIn}>
          Sign in
        </Button><br />

        <Button className='button' block type="submit" onClick={submitSignUp}>
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default AuthForm