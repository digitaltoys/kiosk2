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
      <div className="clockwapper d-flex justify-content-center align-items-center">
        <div className="clock">{curTime.substr(0, 5)}</div>
        <div className="secwrapper d-flex align-items-end">
          <div className="sec font-m" style={{ marginBbottom: "25px" }}>
            {curTime.substr(6, 2)}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Clock;
