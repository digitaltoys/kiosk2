import React from "react";
import "./styles.css";

import Clock from "./Clock";
import Weather from "./Weather";
import Subway from "./Subway";

export default function App() {
  return (
    <div className="App">
      <div className="d-flex flex-row">
        <Weather></Weather>
        <Subway></Subway>
      </div>
      <h1>
        <Clock></Clock>
      </h1>
    </div>
  );
}
