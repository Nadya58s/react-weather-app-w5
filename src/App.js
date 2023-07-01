/** @format */

import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project is created by Nadia Sylvester and is {""}
          <a
            href="https://github.com/Nadya58s/react-weather-app-w5"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
