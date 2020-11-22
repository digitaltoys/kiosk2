import React, { useState, useEffect } from "react";

export default function Clock() {
  const [curTime, setCurTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let now = new Date();
      // console.log(now.toTimeString());
      setCurTime(now.toTimeString().substr(0, 8));
    }, 1000);
  }, []);

  return <div>{curTime}</div>;
}
