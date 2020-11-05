import React, { useState } from "react";
import ReactDOM from "react-dom";

import { getToken, clearToken } from "./api";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  // a piece of state that represents the status of the current user
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <h1>Thanks for logging in!</h1>
          <button
            onClick={() => {
              clearToken();
              setIsLoggedIn(false);
            }}
          >
            LOG OUT
          </button>
        </>
      ) : (
        <>
          <Register setIsLoggedIn={setIsLoggedIn} />
          <Login setIsLoggedIn={setIsLoggedIn} />
        </>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
