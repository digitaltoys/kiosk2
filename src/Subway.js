import React, { useState, useEffect } from "react";

export default function Subway() {
  const [curTime, setCurTime] = useState("");

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div className="subway d-flex flex-column">
        <div className="font-s">
          <b>지하철</b>
        </div>
        <div className="font-s d-flex justify-content-end">
          <div style={{ marginRight: "80px" }}>증미역</div>
          <div style={{ marginRight: "80px" }}>가양역</div>
          <div>등촌역 >></div>
        </div>
        <div class="progress" style={{ height: "5px" }}>
          <div
            class="progress-bar bg-lg"
            role="progressbar"
            style={{ width: "20%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "10%" }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar bg-lg"
            role="progressbar"
            style={{ width: "60%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style={{ width: "10%" }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar bg-lg"
            role="progressbar"
            style={{ width: "0%" }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="font-m d-flex justify-content-end" style={{}}>
          2분전
        </div>
      </div>
    </React.Fragment>
  );
}
