import React, { useState } from 'react';
import "./signin.css";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import { useAuth } from "../../context/auth";
import { useHistory } from "react-router-dom";
import {useAuthService} from '../../services/auth-service';

const { useCallback } = React;


function AuthForm() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  let history = useHistory();
  
  const auth = useAuthService();
  const submitSignIn=()=> {
    auth.signIn();
  }

    // console.log("Sign in");
    // axios.post("http://localhost:8080/auth/signin", {
    //   "username": userName,
    //   "password": password
    // }).then(result => {
    //   if (result.status === 200) {
    //     console.log(2, result);
    //     setAuthTokens(result.data);
    //     setLoggedIn(true);
    //     history.push('/tasks')
    //     console.log("Success");
    //   } else {
    //     setIsError(true);
    //     console.log(result);
    //   }
    // }).catch(e => {
    //   setIsError(true);
    //   console.log("Catch er");
    // });
  

  function submitSignUp() {
    history.push('/signup')
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

        <Button className='button' onClick={submitSignIn}>
          Sign in
        </Button><br />

        <Button className='button' onClick={submitSignUp}>
          Sign up
        </Button>
      </form>
    </div>
  );
}

export default AuthForm