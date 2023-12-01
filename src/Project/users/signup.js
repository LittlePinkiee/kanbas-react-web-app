import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="mb-3 row">
        <label for="inputUsername" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                username: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            className="form-control mt-2"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
          />
        </div>
      </div>

      <button className="btn btn-primary mt-2" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;
