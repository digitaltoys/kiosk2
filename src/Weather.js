// 4c1f05438a742fac682c8cc9b31f9b6e
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=seoul&appid=4c1f05438a742fac682c8cc9b31f9b6e

import React, { useState, useEffect } from "react";
import axios from "axios";
import dummyData from "./dummyData";

// const API_KEY = "60f2f5a42cdb41d0871131637202111";

// function getCurrentWeather(cityName) {
//   // const endpoint = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=1`;
//   const endpoint =
//     "http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=108";
//   console.log(endpoint);

//   const result = fetch(endpoint)
//     .then((response) => response.text())
//     .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
//     .then((data) => console.log(data));
//   return result;
// }

export default function Weather() {
  const [weatherData, setWeatherData] = useState(dummyData);
  useEffect(() => {
    // let a = getCurrentWeather("seoul")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((data) => {
    //     console.log(data);
    //   });

    const fetchUsers = async () => {
      try {
        let seoul = await axios.get(
          // "/data/2.5/weather?q=seoul&appid=4c1f05438a742fac682c8cc9b31f9b6e",
          "/v1/forecast.json?key=60f2f5a42cdb41d0871131637202111&q=seoul&days=1",
          {}
        );
        // console.log(seoul);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
  }, []);
  console.log(weatherData);

  return (
    <React.Fragment>
      <div>{weatherData.location.name}</div>
      <div className="d-flex justify-content-center ">
        <img src={weatherData.current.condition.icon} />
        <div className="temp">
          <div className="font-m">{weatherData.current.temp_c} ℃</div>
          <div className="font-sm">
            {weatherData.forecast.forecastday[0].day.mintemp_c}/
            {weatherData.forecast.forecastday[0].day.maxtemp_c}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
