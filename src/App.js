import React from "react";
import "./styles.css";

import Clock from "./Clock";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>
        <Weather></Weather>
      </h1>
      <h1>
        <Clock></Clock>
      </h1>
    </div>
  );
}
