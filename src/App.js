import "./App.css";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { useState } from "react";
import LoginApp from "./components/LoginApp";
import Cookies from "universal-cookie";
import FakeApi from "./components/FakeApi";

// const cookies = new Cookies();

// cookies.set('myCat', 'Pacman', { path: '/' });
// console.log(cookies.get('myCat'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          hello
          <FakeApi />
          {/* <pre>
            <h2>Setting Cookie in ReactJS</h2>
            <span>Enter User Name: </span>
            <input
              type="text"
              onChange={(e) => setCookieFunction(e.target.value)}
            ></input>{" "}
            <br />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {message}
            </span>
          </pre> */}
          {/* <ul className="">
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>  */}

          <hr />
          {/* <Route exact path="/" component={List} />
          <Route path="/login" component={Login} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Navbar /> */}
          {/* <List /> */}
          {/* <LoginApp /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
