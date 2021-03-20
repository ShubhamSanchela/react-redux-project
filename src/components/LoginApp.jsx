import React, { useState } from "react";
import LoginValidation from "./LoginValidation";
import List from "../components/List";

function LoginApp() {
  const adminUser = {
    email: "a",
    password: "a",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log("login", details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("logged in");
      setUser({
        //   name : details.name,
        email: details.email,
      });
    } else {
      console.log("Invalid Details");
      setError("Invalid Details");
    }
  };

  const Logout = () => {
    console.log("logout");
    setUser({ email: "" });
  };

  return (
    <div>
      <div className="App">
        {user.email != "" ? (
          <h2>
            <button className="btn btn-primary" onClick={Logout}>Logout</button>
            <List />
            Welcome <span>{user.name}</span>
          </h2>
        ) : (
          <LoginValidation Login={Login} error={error} />
        )}
      </div>
    </div>
  );
}

export default LoginApp;
