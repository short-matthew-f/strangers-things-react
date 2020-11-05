import React, { useState } from "react";
import ReactDOM from "react-dom";

import { getToken, clearToken } from "./api";
import Auth from "./components/Auth";

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
        <Auth setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
