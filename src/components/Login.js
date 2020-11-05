import React, { useState } from "react";

import { loginUser } from "../api";

const Login = (props) => {
  const { setIsLoggedIn } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        try {
          const result = await loginUser(username, password);
          setIsLoggedIn(true);
        } catch (error) {
          setErrorMessage(error.message);
        }
      }}
    >
      <h3>Sign in to your existing account!</h3>
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

export default Login;
