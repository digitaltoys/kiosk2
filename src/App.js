import React, { useState, useEffect } from "react";
import moment from "moment";
import "./styles.css";

import Clock from "./Clock";
import Weather from "./Weather";
import Subway from "./Subway";

export default function App() {
  const [curTime, setCurTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      // let now = new Date();
      // console.log(now.toTimeString());
      setCurTime(moment().format("hh:mm:ss"));
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="d-flex flex-row">
        <Weather></Weather>
        <Subway curTime={curTime}></Subway>
      </div>
      <h1>
        <Clock curTime={curTime}></Clock>
      </h1>
      {/* <Weather />
      <Subway curTime={curTime}></Subway> */}
    </div>
  );
}
