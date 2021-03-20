import Cookies from "js-cookie";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AuthApi from "./AuthApi";
import List from "../components/List";
import Login from "../components/Login"

function FakeApi() {
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      setAuth(true);
    }
  };

  React.useEffect(() => {
    readCookie();
  }, []);

  return (
    <div>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
  );
}

const Loginn = () => {
  const Auth = React.useContext(AuthApi);
  const handleOnClick = () => {
    Auth.setAuth(true);
    Cookies.set("user", "logintrue");
  };

  return (
    <div>
      welcome
      <Login handle = {handleOnClick} />
      {/* <button onClick={handleOnClick}>Login</button> */}
    </div>
  );
};

const Dashboard = () => {
  const Auth = React.useContext(AuthApi);

  const handleClick = () => {
    Auth.setAuth(false);
  };

  return (
    <div >
      {/* <h2>Dashboard</h2> */}
      <div >
      <button className="btn btn-primary" onClick={handleClick}>Logout</button>
      <List />
      </div>
     
    </div>
  );
};

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  return (
    <Switch>
      <ProctedLogin path="/login" component={Loginn} auth={Auth.auth} />
      <ProctedRoute path="/dashboard" component={Dashboard} auth={Auth.auth} />
    </Switch>
  );
};

const ProctedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const ProctedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (!auth ? <Component /> : <Redirect to="/dashboard" />)}
    />
  );
};

export default FakeApi;
