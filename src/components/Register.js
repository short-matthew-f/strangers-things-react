import React, { useState } from "react";

import { registerUser } from "../api";

const Register = (props) => {
  const { setIsLoggedIn } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        try {
          const result = await registerUser(username, password);
          setIsLoggedIn(true);
        } catch (error) {
          setErrorMessage(error.message);
        }
      }}
    >
      <h3>Sign up for a new account!</h3>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
      />
      {errorMessage ? <h5 className="error">{errorMessage}</h5> : null}
      <button>Sign Up!</button>
    </form>
  );
};

export default Register;
