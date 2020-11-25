import React, { useState, useEffect } from "react";
import moment from "moment";

const Clock = ({ curTime }) => {
  // const [curTime, setCurTime] = useState("");

  // useEffect(() => {
  //   setInterval(() => {
  //     // let now = new Date();
  //     // console.log(now.toTimeString());
  //     setCurTime(moment().format("hh:mm:ss"));
  //   }, 10000);
  // }, []);

  return (
    <React.Fragment>
      <div className="clock d-flex justify-content-center align-items-end">
        <div className="font-xxl">{curTime.substr(0, 5)}</div>
        <div className="font-m" style={{ "margin-bottom": "25px" }}>
          {curTime.substr(6, 2)}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Clock;
