import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import App from "../app/app";
import Auth from "../signin/signin";
import PrivateRoute from "../../privateroutes";
import { AuthContext } from "../../context/auth";
import Signup from "../signup/signup";


function FirstPage(props) {
  const [authTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <div>
        <Route exact path="/" component={Auth} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute path="/tasks" component={App} />
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default FirstPage;