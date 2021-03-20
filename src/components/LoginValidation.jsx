import React, { useState } from "react";
import useForm from "../components/useForm"
import validate from "../components/validateLogin"

function LoginValidation({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const { handleChange, handleSubmit, values, errors } = useForm(
  submit,
  validate
  );
  function submit() {
    Login(details)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  return (
    <div>
      <form onSubmit={submitHandler} noValidate>
        <div>
            {(error !="") ?  (<p>{error}</p> ) : "" }
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              // value={values.email}
              // onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              // value={values.email}
              // onChange={handleChange}
              // value={values.password}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginValidation;
