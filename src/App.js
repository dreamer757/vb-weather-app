import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <a
          className="App-link"
          href="https://github.com/dreamer757/vb-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        by Courtney Jones
      </header>
    </div>
  );
}

export default App;
