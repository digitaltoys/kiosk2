import React, { useState, useEffect } from "react";
import moment from "moment";
import { line9h, line9n, line9w } from "./line9";

const Subway = ({ curTime }) => {
  // let index = 0;
  const [index, setIndex] = useState(0);
  // let line9 = line9w;
  let line9 = 0;
  if (moment().weekday() % 7 == 0) line9 = line9h;
  else if (moment().weekday() % 7 == 6) line9 = line9w;
  else line9 = line9n;

  // console.log((moment().weekday() + 1) % 7);

  const getRemainTime = (i) => {
    let asSec = Math.max(
      moment.duration(moment(line9[i], "hh:mm") - moment()).asSeconds() - 30,
      0
    );
    return asSec > 3500
      ? ""
      : moment(moment(line9[i], "hh:mm") - moment()).format("mm:ss");
  };

  const getRemainSec = (i) => {
    return Math.max(
      parseInt(
        moment.duration(moment(line9[i], "hh:mm") - moment()).asSeconds() - 30,
        10
      ),
      0
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
      <div
        className="subway d-flex flex-column"
        // style={{ border: "solid 2px gray" }}
      >
        <div className="font-s">
          <b>지하철</b>
        </div>
        <div className="stations font-s d-flex justify-content-end">
          <div className="station" style={{ right: "24rem" }}>
            공항시장
          </div>
          <div className="station" style={{ right: "16rem" }}>
            신방화
          </div>
          <div className="station" style={{ right: "8rem" }}>
            마곡나루
          </div>
          <div className="station">양천향교</div>
        </div>
        <div className="trainwrapper">
          <div
            className="train"
            style={{ right: `${getRemainSec(index) / 20}rem` }}
          ></div>
          <div
            className="train"
            style={{ right: `${getRemainSec(index + 1) / 20}rem` }}
          ></div>
        </div>
        <div className="progress" style={{ height: "3px" }}>
          <div
            className="progress-bar bg-lg"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="arrivaltime font-m d-flex flex-row-reverse align-items-end">
          {index > -1 && (
            <div className="subtime" style={{ right: "0vw" }}>
              {getRemainTime(index)}{" "}
            </div>
          )}
          {index > -1 && index + 1 < line9.length && (
            <div className="subtime" style={{ right: "15vw" }}>
              {getRemainTime(index + 1)}
            </div>
          )}
          {index > -1 && index + 2 < line9.length && (
            <div className="subtime" style={{ right: "30vw" }}>
              {getRemainTime(index + 2)}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Subway;
