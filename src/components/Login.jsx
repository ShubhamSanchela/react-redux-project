import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
import "../App.css";

function Login({ handle }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  // const [details, setDetails] = useState({ email : "", password : "" })

  function submit() {
    // Login(details)
    handle();
    console.log("Submitted Successfully");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}{" "}
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
