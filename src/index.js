import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-2847dwro.us.auth0.com
// henvWn68VMeK3Snonf5GOlZTEFzA53Wv

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-2847dwro.us.auth0.com'
      clientId='henvWn68VMeK3Snonf5GOlZTEFzA53Wv'
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
