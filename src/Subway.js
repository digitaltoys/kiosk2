import React, { useState, useEffect } from "react";
import moment from "moment";
import line9 from "./line9";

const Subway = ({ curTime }) => {
  // let index = 0;
  const [index, setIndex] = useState(0);

  const getRemainTime = (i) => {
    let asSec = moment
      .duration(moment(line9[i], "hh:mm") - moment())
      .asSeconds();
    return asSec > 3500
      ? ""
      : moment(moment(line9[i], "hh:mm") - moment()).format("mm:ss");
  };
  const getRemainSec = (i) => {
    return parseInt(
      moment.duration(moment(line9[i], "hh:mm") - moment()).asSeconds(),
      10
    );
  };

  useEffect(() => {
    // console.log(curTime);
    //   setInterval(() => {
    //     setCurTime(moment().format("hh:mm:ss"));
    setIndex(-1);

    let now = moment().format("HH:mm:ss");
    for (let i = 0; i < line9.length; i++) {
      // console.log(`--- i:${i}, el:${line9[i]}, now:${now}`);
      if (line9[i] > now) {
        setIndex(i);
        // console.log("--- now: ", line9[i]);
        break;
      }
    }
    // console.log("----- i: ", index);
    //   }, 10000);
  }, [curTime]);

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
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "5px"
          }}
        >
          <div
            class="train"
            style={{
              position: "absolute",
              // left: `${450-getRemainSec(index)}px`,
              right: `${getRemainSec(index)}px`,
              width: "30px",
              height: "5px",
              backgroundColor: "green"
            }}
          ></div>
          <div
            class="train"
            style={{
              position: "absolute",
              // left: `${450-getRemainSec(index)}px`,
              right: `${getRemainSec(index + 1)}px`,
              width: "30px",
              height: "5px",
              backgroundColor: "green"
            }}
          ></div>
        </div>
        <div class="progress" style={{ height: "3px" }}>
          <div
            class="progress-bar bg-lg"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          {/* <div
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
          ></div> */}
        </div>
        <div
          className="font-s d-flex flex-column align-items-end"
          style={{ width: "500px" }}
        >
          {index > -1 && (
            <div style={{ marginRight: "20px" }}>{getRemainTime(index)} </div>
          )}
          {index > -1 && index + 1 < line9.length && (
            <div style={{ marginRight: "20px" }}>
              {getRemainTime(index + 1)}
            </div>
          )}
          {index > -1 && index + 2 < line9.length && (
            <div style={{ marginRight: "20px" }}>
              {getRemainTime(index + 2)}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Subway;
