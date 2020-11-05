import React, { useState } from "react";

import { loginUser, registerUser } from "../api";

const Auth = (props) => {
  const { setIsLoggedIn } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Register or Log In</h3>
      {errorMessage ? <h5 className="error">{errorMessage}</h5> : null}
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
      <button
        onClick={async (event) => {
          try {
            const result = await registerUser(username, password);
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}
      >
        Register
      </button>
      <button
        onClick={async (event) => {
          try {
            const result = await loginUser(username, password);
            setIsLoggedIn(true);
          } catch (error) {
            setErrorMessage(error.message);
          }
        }}
      >
        Log In
      </button>
    </form>
  );
};

export default Auth;
